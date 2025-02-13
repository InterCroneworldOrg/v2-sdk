import invariant from 'tiny-invariant'
import { Token } from './token'
import { Currency, ETHER } from './currency'
import { WETH } from './weth'
import { Price } from './fractions/price'

import { Pair } from './pair'

export class Route {
  public readonly pairs: Pair[]
  public readonly path: Token[]
  public readonly input: Currency
  public readonly output: Currency

  public constructor(pairs: Pair[], input: Currency, output?: Currency) {
    invariant(pairs.length > 0, 'PAIRS')
    const chainId: number = pairs[0].chainId
    invariant(
      pairs.every(pair => pair.chainId === chainId),
      'CHAIN_IDS'
    )

    invariant(
      (input instanceof Token && pairs[0].involvesToken(input)) ||
        (input === ETHER && pairs[0].involvesToken(WETH[pairs[0].chainId])),
      'INPUT'
    )
    const wrappedInput = WETH[pairs[0].chainId]
    invariant(
      typeof output === 'undefined' ||
        (output instanceof Token && pairs[pairs.length - 1].involvesToken(output)) ||
        (output === ETHER && pairs[pairs.length - 1].involvesToken(WETH[pairs[0].chainId])),
      'OUTPUT'
    )

    const path: Token[] = [input instanceof Token ? input : wrappedInput]
    for (const [i, pair] of pairs.entries()) {
      const currentInput = path[i]
      invariant(currentInput.equals(pair.token0) || currentInput.equals(pair.token1), 'PATH')
      const output = currentInput.equals(pair.token0) ? pair.token1 : pair.token0
      path.push(output)
    }

    this.pairs = pairs
    this.path = path
    this.input = input
    this.output = output ?? path[path.length - 1]
  }

  private _midPrice: Price | null = null

  public get midPrice(): Price {
    if (this._midPrice !== null) return this._midPrice
    const prices: Price[] = []
    for (const [i, pair] of this.pairs.entries()) {
      prices.push(
        this.path[i].equals(pair.token0)
          ? new Price(pair.reserve0.currency, pair.reserve1.currency, pair.reserve0.raw, pair.reserve1.raw)
          : new Price(pair.reserve1.currency, pair.reserve0.currency, pair.reserve1.raw, pair.reserve0.raw)
      )
    }
    const reduced = prices.slice(1).reduce((accumulator, currentValue) => accumulator.multiply(currentValue), prices[0])
    return (this._midPrice = new Price(this.input, this.output, reduced.denominator, reduced.numerator))
  }

  public get chainId(): number {
    return this.pairs[0].chainId
  }
}

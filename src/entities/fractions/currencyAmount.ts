import invariant from 'tiny-invariant'
import JSBI from 'jsbi'
import { Currency, ETHER } from '../currency'
import { Fraction } from './fraction'
import _Big from 'big.js'

import toFormat from 'toformat'
import { BigintIsh, Rounding, MaxUint256, TEN } from '../../constants'

const Big = toFormat(_Big)

export class CurrencyAmount extends Fraction {
  public readonly currency: Currency
  public readonly decimalScale: JSBI

  public get raw(): JSBI {
    return this.numerator
  }

  static ether(amount: BigintIsh): CurrencyAmount {
    return CurrencyAmount.fromRawAmount(ETHER, amount)
  }

  /**
   * Returns a new currency amount instance from the unitless amount of token, i.e. the raw amount
   * @param currency the currency in the amount
   * @param rawAmount the raw token or ether amount
   */
  public static fromRawAmount(currency: Currency, rawAmount: BigintIsh): CurrencyAmount {
    return new CurrencyAmount(currency, rawAmount, JSBI.exponentiate(TEN, JSBI.BigInt(currency.decimals)))
  }

  /**
   * Construct a currency amount with a denominator that is not equal to 1
   * @param currency the currency
   * @param numerator the numerator of the fractional token amount
   * @param denominator the denominator of the fractional token amount
   */
  public static fromFractionalAmount(currency: Currency, numerator: BigintIsh, denominator: BigintIsh): CurrencyAmount {
    return new CurrencyAmount(currency, numerator, denominator)
  }

  protected constructor(currency: Currency, numerator: BigintIsh, denominator?: BigintIsh) {
    super(numerator, denominator)
    invariant(JSBI.lessThanOrEqual(this.quotient, MaxUint256), 'AMOUNT')
    this.currency = currency
    this.decimalScale = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(currency.decimals))
  }

  public add(other: CurrencyAmount): CurrencyAmount {
    invariant(this.currency.equals(other.currency), 'CURRENCY')
    const added = super.add(other)
    return CurrencyAmount.fromFractionalAmount(this.currency, added.numerator, added.denominator)
  }

  public subtract(other: CurrencyAmount): CurrencyAmount {
    invariant(this.currency.equals(other.currency), 'CURRENCY')
    const subtracted = super.subtract(other)
    return CurrencyAmount.fromFractionalAmount(this.currency, subtracted.numerator, subtracted.denominator)
  }

  public multiply(other: Fraction | BigintIsh): CurrencyAmount {
    const multiplied = super.multiply(other)
    return CurrencyAmount.fromFractionalAmount(this.currency, multiplied.numerator, multiplied.denominator)
  }

  public divide(other: Fraction | BigintIsh): CurrencyAmount {
    const divided = super.divide(other)
    return CurrencyAmount.fromFractionalAmount(this.currency, divided.numerator, divided.denominator)
  }

  public toSignificant(
    significantDigits: number = 6,
    format?: object,
    rounding: Rounding = Rounding.ROUND_DOWN
  ): string {
    return super.divide(this.decimalScale).toSignificant(significantDigits, format, rounding)
  }

  public toFixed(
    decimalPlaces: number = this.currency.decimals,
    format?: object,
    rounding: Rounding = Rounding.ROUND_DOWN
  ): string {
    invariant(decimalPlaces <= this.currency.decimals, 'DECIMALS')
    return super.divide(this.decimalScale).toFixed(decimalPlaces, format, rounding)
  }

  public toExact(format: object = { groupSeparator: '' }): string {
    Big.DP = this.currency.decimals
    return new Big(this.quotient.toString()).div(this.decimalScale.toString()).toFormat(format)
  }
}

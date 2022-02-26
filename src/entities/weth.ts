import { Token } from './token'
import { ChainId } from '../constants'

export const WETH: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0x3e3c57AEc343579fa645C9f8857D1C968Ee5D01d', 18, 'WBTT', 'Wrapped BTT'),
  [ChainId.DONAU]: new Token(ChainId.DONAU, '0x107742eb846b86ceaaf7528d5c85cddcad3e409a', 18, 'WBTT', 'Wrapped BTT')
}

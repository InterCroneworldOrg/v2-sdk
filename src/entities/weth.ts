import { Token } from './token'
import { ChainId } from '../constants'

export const WETH: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0x197a4ed2b1bb607e47a144b9731d7d34f86e9686',
    18,
    'WBTT',
    'Wrapped BTT'
  ),
  [ChainId.DONAU]: new Token(ChainId.DONAU, '0xcbda27d7f16c71aa2b4d1a1309fd26eae4d63c4a', 18, 'WBTT', 'Wrapped BTT')
}

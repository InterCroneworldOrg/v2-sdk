import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | string | number

export enum ChainId {
  MAINNET = 199,
  DONAU = 1029
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = '0x25078Aa3439E4F4cadef81373bd2105cf0e814C8'
export const FACTORY_ADDRESSES: { [chainId: number]: string } = {
  [ChainId.MAINNET]: '0x5f4f1a36b7c141a12817580bc35277955c0afd78',
  [ChainId.DONAU]: '0xc0fb56252e8048f45d2b091d1f142c9d27ec0cb2'
}
export const INIT_CODE_HASH = '0x9c7703d0f26714f3c5eb40128273e2cd2d69c69cfed9e38dd249609c9ca4c83f'

export const MaxUint256 = JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

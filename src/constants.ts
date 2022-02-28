import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | string | number

export enum ChainId {
  MAINNET = 11111,
  NILE = 201910292,
  SHASTA = 1
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

export const FACTORY_ADDRESS = '0x486be31557ee7d7b50113a512da8faa1a6c3a5ef'
export const FACTORY_ADDRESSES: { [chainId: number]: string } = {
  [ChainId.MAINNET]: '0x6168bf722a3e7983e680f6bf3b2740cba7f92b7c',
  [ChainId.NILE]: '0xed8185b97e71435f5c37381a8b4d050b5daee972',
  [ChainId.SHASTA]: '0x486be31557ee7d7b50113a512da8faa1a6c3a5ef'
}
export const INIT_CODE_HASH = '0xaeab5e5d863dce4b9d24fa521d4e3b9915e19359bd891b4dc5ee022a2698541b'

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

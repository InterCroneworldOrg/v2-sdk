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
  [ChainId.MAINNET]: '0xC2301F81D7E05B70AC94207D4E5B7CB07C845568',
  [ChainId.NILE]: '0xed8185b97e71435f5c37381a8b4d050b5daee972',
  [ChainId.SHASTA]: '0x486be31557ee7d7b50113a512da8faa1a6c3a5ef'
}
export const INIT_CODE_HASH = '0x87abd74a1a26e0addc829240582ef115e4b42b6271fb9a3937363a3f0f756cce'

export const MaxUint256 = JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

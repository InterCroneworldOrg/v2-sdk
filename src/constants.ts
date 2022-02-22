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

export const FACTORY_ADDRESS = '0xed8185b97e71435f5c37381a8b4d050b5daee972'
export const FACTORY_ADDRESSES: { [chainId: number]: string } = {
  [ChainId.MAINNET]: '0xC2301F81D7E05B70AC94207D4E5B7CB07C845568',
  [ChainId.NILE]: '0xed8185b97e71435f5c37381a8b4d050b5daee972',
  [ChainId.SHASTA]: '0xed8185b97e71435f5c37381a8b4d050b5daee972'
}
export const INIT_CODE_HASH = '0xecf3ad9b15e86f3ebbd9cb0ef01ca73f48a403eb2e294faa6057b1a364723bc5'

export const MaxUint256 = JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

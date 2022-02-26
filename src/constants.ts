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

export const FACTORY_ADDRESS = '0x096c64d79a85c8fd2e963c4abd9373301d2cf801'
export const FACTORY_ADDRESSES: { [chainId: number]: string } = {
  [ChainId.MAINNET]: '0xC2301F81D7E05B70AC94207D4E5B7CB07C845568',
  [ChainId.DONAU]: '0x096c64d79a85c8fd2e963c4abd9373301d2cf801'
}
export const INIT_CODE_HASH = '0x87abd74a1a26e0addc829240582ef115e4b42b6271fb9a3937363a3f0f756cce'

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

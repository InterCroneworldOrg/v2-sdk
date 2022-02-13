import { ChainId, Currency, CurrencyAmount, ETHER, Token, TokenAmount, WETH } from "@intercroneswap/sdk-core";
import invariant from "tiny-invariant";

export function wrappedAmount(currencyAmount:CurrencyAmount, chainId: ChainId): TokenAmount {
    if (currencyAmount instanceof TokenAmount) {
        return currencyAmount
    }
    if (currencyAmount.currency === ETHER) {
        return new TokenAmount(WETH[chainId], currencyAmount.raw)
    }
    invariant(false, 'CURRENCY')
}

export function wrappedCurrency(currency:Currency, chainId: ChainId): Token {
    if (currency instanceof Token) {
        return currency;
    }
    if(currency === ETHER) return WETH[chainId];
    invariant(false, 'CURRENCY')
}
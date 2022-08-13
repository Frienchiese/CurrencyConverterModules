import { fromAmount, toAmount, fromCurrency, toCurrency } from "./money.js";
import { convert } from "./lib.js";
import { formatCurrency } from "./utils.js";

export async function handleInput(e) {
    const amount = fromAmount.value;
    const rawAmount = await convert(fromCurrency.value, toCurrency.value, amount);
    toAmount.textContent = formatCurrency(rawAmount, toCurrency.value);
}
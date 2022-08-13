import { generateOptions } from "./utils.js";
import currencies from "./currencies.js"
import { handleInput } from "./handlers.js"

export const fromCurrency = document.querySelector('[name="from_currency"]');
export const toCurrency = document.querySelector('[name="to_currency"]');
export const fromAmount = document.querySelector('[name="from_amount"]');
export const toAmount = document.querySelector('.to_amount');
export const endpoint = 'https://api.exchangerate.host/convert';
const form = document.querySelector('.app form');

const optionsHTML = generateOptions(currencies);
fromCurrency.innerHTML = optionsHTML;
toCurrency.innerHTML = optionsHTML;
form.addEventListener('input', handleInput);
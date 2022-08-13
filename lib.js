import { endpoint } from "./money.js";

export async function fetchData(from, to) {
    const response = await fetch(`${endpoint}?from=${from}&to=${to}`);
    const data = await response.json();
    return data.result;
  }
  
export async function convert(from, to, amount) {
    const rate = await fetchData(from, to);
    const convertedAmount = rate * amount;
    return convertedAmount;
  }
import { isAValue, isBValue } from "./lib";

console.log(isAValue({ isAValue: true }));
console.log(isBValue({ isBValue: true }));

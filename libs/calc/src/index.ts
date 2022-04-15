import { sum } from "@mauriciomelo/sum";
import { subtract } from "@mauriciomelo/subtract";

const total = subtract(sum(1, 1), 4);

console.log(`The total is ${total}!`);

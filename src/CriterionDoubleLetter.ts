import { ICriterion } from "./ICriterion";

export class CriterionDoubleLetter implements ICriterion{
    
    check(string: string): boolean {
        let foundDouble = false;
        let lastChar = string[0];

        string.substring(1).split('').forEach(char => {
            if (char == lastChar) {
                foundDouble = true;
            }
            lastChar = char;
        })

        return foundDouble;
    }
    
}

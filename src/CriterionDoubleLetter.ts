import { ICriterion } from "./ICriterion";

export class CriterionDoubleLetter implements ICriterion {
    
    check(string: string): boolean {
        let foundDouble = false;
        let lastChar = string[0];

        string.substring(1).split('').forEach(char => {
            foundDouble = foundDouble ? true : char == lastChar;
            lastChar = char;
        })

        return foundDouble;
    }
    
}

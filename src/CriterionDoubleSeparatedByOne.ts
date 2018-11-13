import { ICriterion } from "./ICriterion";

export class CriterionDoubleSeparatedByOne implements ICriterion {
    
    check(string: string): boolean {
        let foundDouble = false;

        string.split('').map((c,i,a) => {
            if (c == a[i-2] || c == a[i+2]) {
                foundDouble = true;
            }
        })
        return foundDouble;
    }
}

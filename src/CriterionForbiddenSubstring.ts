import { ICriterion } from "./ICriterion";

export class CriterionForbiddenSubstring implements ICriterion {
    
    forbiddenSubstrings = [
        "ab", 
        "cd",
        "pq",
        "xy"
    ]

    check(string: string): boolean {
        let includesForbiddenString = false;
        this.forbiddenSubstrings.forEach(fs => {
            includesForbiddenString = includesForbiddenString ? true : string.includes(fs);
        })
        return !includesForbiddenString;
    }

}

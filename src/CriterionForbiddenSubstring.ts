import { ICriterion } from "./ICriterion";

export class CriterionForbiddenSubstring implements ICriterion {
    
    forbiddenSubstrings = [
        "ab", 
        "cd",
        "pq",
        "xy"
    ]

    constructor(strings?: string[]) {
        if(strings) {
            this.forbiddenSubstrings = strings;
        }
    }
    check(string: string): boolean {
        let includesForbiddenString = false;

        this.forbiddenSubstrings.forEach(fs => {
            includesForbiddenString = includesForbiddenString ? true : string.includes(fs);
        })
        
        return !includesForbiddenString;
    }

}

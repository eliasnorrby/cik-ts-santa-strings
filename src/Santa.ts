import { ICriterion } from "./ICriterion";

export class Santa {

    criteria: ICriterion[]

    constructor(criteria: ICriterion[]) {
        this.criteria = criteria;
    }

    determineNiceness(string: string): boolean {
        let stringIsNice = true;

        this.criteria.forEach(c => {
            stringIsNice = stringIsNice ? c.check(string) : false;
        })
        
        return stringIsNice;
    }
    
    countNiceStrings(strings: string[]): number {
        let count = 0;

        strings.forEach(s => {
            if (this.determineNiceness(s)) {
                count++;
            }
        })

        return count;
    }

}

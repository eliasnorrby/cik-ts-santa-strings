import { ICriterion } from "./ICriterion";

export class Santa {

    criteria: ICriterion[]

    constructor(criteria: ICriterion[]) {
        this.criteria = criteria;
    }

    determineNiceness(string: string): boolean {
        throw new Error("Method not implemented.");
    }
    
    countNiceStrings(strings: string[]): number {
        throw new Error("Method not implemented.");
    }

}

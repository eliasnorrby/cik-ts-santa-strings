import { ICriterion } from "./ICriterion";

export class CriterionVowel implements ICriterion {

    requiredCount = 3;
    
    vowels = [
        "a",
        "e",
        "i",
        "o",
        "u"
    ] 

    constructor(vowels?: string[], count?: number) {
        if (vowels && vowels.length > 0) {
            this.vowels = vowels;
        }
        if (count) {
            this.requiredCount = count;
        }
    }

    check(string: string): boolean {
        let vowelCount = 0;

        string.split('').forEach(char => {
            if(this.vowels.includes(char)) {
                vowelCount++;
            }
        })
        
        return vowelCount >= this.requiredCount;
    }

}

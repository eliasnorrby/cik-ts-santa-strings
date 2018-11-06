import { ICriterion } from "./ICriterion";

export class CriterionVowel implements ICriterion {
    
    vowels = [
        "a",
        "e",
        "i",
        "o",
        "u"
    ] 
    // vowels = "aeiou";

    check(string: string): boolean {
        let vowelCount = 0;

        string.split('').forEach(char => {
            if(this.vowels.includes(char)) {
                vowelCount++;
            }
        })
        
        return vowelCount >= 3;
    }

}

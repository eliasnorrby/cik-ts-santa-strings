import { ICriterion } from "./ICriterion";

export class CriterionDoublePair implements ICriterion {
    
    check(string: string): boolean {
        let foundDoublePair = false;
        string.split('').map((c, i, a) => {
            if(a[i-1]) {
                if ((string.substring(0,i-1)+string.substring(i+1)).includes(a[i-1]+c)) {
                    foundDoublePair = true;
                }
            } 
            if (a[i+1]) {
                if ((string.substring(0,i)+string.substring(i+2)).includes(c+a[i+1])) {
                    foundDoublePair = true;
                }
            }
        })
        return foundDoublePair;
    }

}

import { CriterionDoubleLetter } from "../src/CriterionDoubleLetter";

describe('CriterionDoubleLetter', () => {
    let c: CriterionDoubleLetter

    let ns1 = "xx";
    let ns2 = "abcdde";
    let ns3 = "aabbccdd";

    let bs1 = "aba";
    let bs2 = "";
    let bs3 = "halelua";

    beforeEach(() => {
        c = new CriterionDoubleLetter();
    })

    it('should return true for a nice string', () => {
        expect(c.check(ns1)).toBeTruthy();
        expect(c.check(ns2)).toBeTruthy();
        expect(c.check(ns3)).toBeTruthy();
    })

    it('should return false for bas strings', () => {
        expect(c.check(bs1)).toBeFalsy();
        expect(c.check(bs2)).toBeFalsy();
        expect(c.check(bs3)).toBeFalsy();
    })

})

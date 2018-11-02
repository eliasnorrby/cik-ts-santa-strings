import { CriterionForbiddenSubstring } from "../src/CriterionForbiddenSubstring";

describe('CriterionForbiddenSubstring', () => {
    let c: CriterionForbiddenSubstring

    let ns1 = "aaaa";

    let bs1 = "aaaxyaaa";
    let bs2 = "ababab";

    let ws1 = "";

    beforeEach(() => {
        c = new CriterionForbiddenSubstring();
    })

    it('should return true for nice strings', () => {
        expect(c.check(ns1)).toBeTruthy();
    })

    it('should return false for bad strings', () => {
        expect(c.check(bs1)).toBeFalsy();
        expect(c.check(bs2)).toBeFalsy();
    })

    it('should return true for weird strings', () => {
        expect(c.check(ws1)).toBeTruthy();
    })
})

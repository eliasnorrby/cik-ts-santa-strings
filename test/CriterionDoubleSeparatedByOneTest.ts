import { CriterionDoubleSeparatedByOne } from "../src/CriterionDoubleSeparatedByOne";

describe('CriterionDoubleSeparatedByOne', () => {

    let c : CriterionDoubleSeparatedByOne;

    beforeEach(() => {
        c = new CriterionDoubleSeparatedByOne();
    })

    let ns = [
        "xyx",
        "efe",
        "aaa",
        "qjhvhtzxzqqjkmpb",
        "xxyxx"
    ]

    let bs = [
        "uurcxstgmygtbstg",
        "abc",
        "aldkrh"
    ]

    it('should return true for a simple nice string', () => {
        expect(c.check("xyx")).toBeTruthy();
    })

    it('should return false for a simple bad string', () => {
        expect(c.check("eef")).toBeFalsy();
    })

    ns.forEach(s => {
        it("should return true for ${s}", () => {
            expect(c.check(s)).toBeTruthy();
        })
    })

    bs.forEach(s => {
        it("should return false for ${s}", () => {
            expect(c.check(s)).toBeFalsy();
        })
    })

})

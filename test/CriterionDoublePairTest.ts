import { CriterionDoublePair } from "../src/CriterionDoublePair";

describe('CriterionDoublePair', () => {
    let c : CriterionDoublePair;

    let ns = [
        "xyxy",
        "qjhvhtzxzqqjkmpb",
        "xxyxx"
    ]

    let bs = [
        "aaa",
        "ieodomkazucvgmuy"
    ]

    let ws = [
        "zztdcqzqddaazdjp"
    ]

    beforeEach(() => {
        c = new CriterionDoublePair();
    })

    it('should return true for simple string with double pairs', () => {
        expect(c.check("xyxy")).toBeTruthy();
    })

    it('should return false for a simple bad string', () => {
        expect(c.check("aaa")).toBeFalsy();
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

    ws.forEach(s => {
        it("should return false for ${s}", () => {
            expect(c.check(s)).toBeFalsy();
        })
    })
})

import { CriterionVowel } from "../src/CriterionVowel";

describe('CriterionVowel', () => {
    
    let c: CriterionVowel;

    let ns1 = "aao";
    let ns2 = "hdjjshgkaouie";
    let ns3 = "hjdjajfkdjfoldkdjfkjdfo";

    beforeEach(() => {
        c = new CriterionVowel();
    })

    it('should return true for nice string', () => {
        expect(c.check(ns1)).toBeTruthy();
    })
    
    it('should return true for long nice string', () => {
        expect(c.check(ns2)).toBeTruthy();
    })

    it('should return true for long nice string with vowels separated', () => {
        expect(c.check(ns3)).toBeTruthy();
    })

    it('should support custom configurations', () => {
        c = new CriterionVowel(["a", "e", "i"]);
        expect(c.check(ns1)).toBeFalsy();
        expect(c.check(ns2)).toBeTruthy();
    })
})
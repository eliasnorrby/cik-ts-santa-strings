import { Santa } from "../src/Santa";
import { CriterionVowel } from "../src/CriterionVowel";
import { CriterionDoubleLetter } from "../src/CriterionDoubleLetter";
import { CriterionForbiddenSubstring } from "../src/CriterionForbiddenSubstring";
import { listOfStrings } from "../src/input";

describe('Santa', () => {
    let santa: Santa;

    let niceStrings = [
        "ugknbfddgicrmopn",
        "aaa"
    ];

    let badStrings = [
        "jchzalrnumimnmhp",
        "haegwjzuvuyypxyu",
        "dvszwmarrgswjxmb"
    ];

    beforeEach(() => {
        let criteria = [
            new CriterionVowel(),
            new CriterionDoubleLetter(),
            new CriterionForbiddenSubstring()
        ]
        santa = new Santa(criteria);
    })

    describe('santa.determineNiceness', () => {

        it('should return true for nice string', () => {
            expect(santa.determineNiceness('ugknbfddgicrmopn')).toBeTruthy();
        })
        
        it('should return true for nice string with overlapping rules nice', () => {
            expect(santa.determineNiceness('aaa')).toBeTruthy();
        })
        
        it('should return false for string missing double letters not nice', () => {
            expect(santa.determineNiceness('jchzalrnumimnmhp')).toBeFalsy();
        })
        
        it('should return false for string with forbidden substring', () => {
            expect(santa.determineNiceness('haegwjzuvuyypxyu')).toBeFalsy();
        })
        
        it('should return false for string with too few vowels', () => {
            expect(santa.determineNiceness('dvszwmarrgswjxmb')).toBeFalsy();
        })
    })

    describe('santa.countNiceStrings', () => {

        it('should return the proper count', () => {
            let strings1 = ["aaa"];
            let strings2 = [niceStrings[0], niceStrings[1], badStrings[0], badStrings[1]];

            expect(santa.countNiceStrings(strings1)).toBe(1);
            expect(santa.countNiceStrings(strings2)).toBe(2);
        })

        it('should log the number of nice strings in input', () => {
            let nNiceStrings = santa.countNiceStrings(listOfStrings)
            console.log(`\nThe input contains ${nNiceStrings} nice strings.\n`);
        })
    })

    describe('should give different results with new configs', () => {
        let newSanta: Santa;
        
        beforeEach(() => {
            let newCriteria = [
                new CriterionVowel(["a", "u"]),
                new CriterionDoubleLetter(),
                new CriterionForbiddenSubstring(["xy"])
            ]
            newSanta = new Santa(newCriteria);
        })

        it('should give another result for new rules', () => {
            let nNiceStrings = newSanta.countNiceStrings(listOfStrings)
            console.log(`\nThe input contains ${nNiceStrings} nice strings.\n`);
            expect(nNiceStrings != 238).toBeTruthy();
        })
    })
})

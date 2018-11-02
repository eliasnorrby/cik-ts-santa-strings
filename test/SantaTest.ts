import { Santa } from "../src/Santa";

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
        santa = new Santa([]);
    })

    xdescribe('santa.determineNiceness', () => {

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

    xdescribe('santa.countNiceStrings', () => {

        it('should return the proper count', () => {
            let strings1 = ["aaa"];
            let strings2 = [niceStrings[0], niceStrings[1], badStrings[0], badStrings[1]];

            expect(santa.countNiceStrings(strings1)).toBe(1);
            expect(santa.countNiceStrings(strings2)).toBe(2);
        })
    })
    

})

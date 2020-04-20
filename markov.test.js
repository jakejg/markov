const { MarkovMachine } = require("./markov")


describe("MarkovMachine Class", () =>{
    let mm;
    beforeAll(() => {
        mm = new MarkovMachine("I do not like them Sam-I-am I do not like Green eggs and ham")
    })
    test('Chain map size should be equal to number of unique words', () => {
        expect(mm.chain.size).toEqual(10)
    });

    test("Next word after last word should be null", () => {
        expect(mm.chain.get("ham")[0]).toBeNull()
    })

    test("makeText() should return a string", () => {
        expect(mm.makeText()).toEqual(expect.any(String))
    })
})
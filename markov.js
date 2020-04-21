

class MarkovMachine {

    constructor(text) {
          let words = text.split(/[ \r\n]+/);
          this.words = words.filter(c => c !== "");  
          this.makeChains();
    }

    makeChains() {
        const chain = new Map()

        for (let i = 0; i < this.words.length; i++){

            let word = this.words[i];
            let next = this.words[i+1] || null;
            let array = chain.get(word) || [];
            array.push(next);
            chain.set(word, array);
        }

        this.chain = chain;
    }

    makeText(numWords = 100) {
        const chain = this.chain;
        let text = [];

        let keys = [...chain.keys()];
        let idx = Math.floor(Math.random() * chain.size);

        //Only start on capital word
        while (keys[idx][0] !== keys[idx][0].toUpperCase()){
            idx = Math.floor(Math.random() * chain.size)
        }

        let afterWords;

        while (keys[idx] !== null && text.length <= numWords) {
            text.push(keys[idx])
            afterWords = chain.get(keys[idx])
            keys = [...afterWords]
            idx = Math.floor(Math.random() * afterWords.length)
            
        }
        return text.join(' ')
    }
}

module.exports = {
    MarkovMachine
}


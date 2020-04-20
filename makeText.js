const { MarkovMachine } = require("./markov")
const fs = require('fs');
const axios = require('axios');
const process = require('process');


function buildNewMachine(data) {
    const mm = new MarkovMachine(data)
    console.log(mm.makeText())
}

function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err){
            console.log(`Error reading ${path}`)
            process.exit(1)
        }
        buildNewMachine(data);
    })
}

async function webCat(URL) {
    try {
        let content = await axios.get(URL);
        buildNewMachine(content.data);
    }
    catch(err) {
        console.log('Error fetching', URL)
    }
}

if (process.argv[2] === 'file') {
    cat(process.argv[3])
}

else if (process.argv[2] === 'URL') {
    webCat(process.argv[3])
}

else {
    console.log(`${process.argv[2]} command not found`)
}

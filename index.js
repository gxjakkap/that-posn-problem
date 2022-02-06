const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function logic(phrase){
    let length = phrase.length;
    let mid = Math.floor(length/2)
    for (i=1; i<=mid; i++){
        let x = phrase.charAt(i-1);
        let y = phrase.charAt((length-i+1)-1)
        let bool = true;
        if (x === y){
            bool = true;
        } else {
            bool = false;
            console.log(bool);
            break;
        }
        console.log(bool);
    }
    return
}

readline.question(`Phrase: `, phrase => {
    logic(phrase);
    readline.close()
})
  
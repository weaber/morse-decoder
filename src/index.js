const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const LETTER_LENGTH = 10;    
    const dividedMessage = [];
    const lettersIntoKeys = [];
    
    for (let i = 0; i < expr.length; i += LETTER_LENGTH) {        
      dividedMessage.push(expr.substr(i, LETTER_LENGTH));
    }    

    dividedMessage.forEach((item) => {
      let letter = '';
      for (let i = 0; i < 10; i += 2) {
        if (item.substr(i, 2) === '10') {
          letter = letter.concat('.');
        } else if (item.substr(i, 2) === '11') {
          letter = letter.concat('-');                
        };
      };
      lettersIntoKeys.push(letter)
    });

    const decodedLetters = lettersIntoKeys.map((item) => {
      return item === "" ? " " : MORSE_TABLE[item];  
    });
    return decodedLetters.join('');    
}

module.exports = {
    decode
}
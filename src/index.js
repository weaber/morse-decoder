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
    '': ' ',
};

function decode(expr) {
    const LETTER_LENGTH = 10;
    const SIGNAL_LENGTH = 2;
    const DOT_CODE = '10';
    const DASH_CODE = '11';
    const dividedMessage = [];
    const lettersIntoKeys = [];
    
    for (let i = 0; i < expr.length; i += LETTER_LENGTH) {        
      dividedMessage.push(expr.substr(i, LETTER_LENGTH));
    }    

    dividedMessage.forEach((item) => {
      let letter = '';
      for (let i = 0; i < 10; i += SIGNAL_LENGTH) {
        if (item.substr(i, SIGNAL_LENGTH) === DOT_CODE) {
          letter = letter.concat('.');
        } else if (item.substr(i, 2) === DASH_CODE) {
          letter = letter.concat('-');                
        };
      };
      lettersIntoKeys.push(letter)
    });

    const decodedLetters = lettersIntoKeys.map((item) => {
      return MORSE_TABLE[item];  
    });
    return decodedLetters.join('');    
}

module.exports = {
    decode
}
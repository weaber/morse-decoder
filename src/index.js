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

const codesKeys = Object.keys(MORSE_TABLE);

const encodedKeys = codesKeys.map((item) => {
    let code ='';
    let zeros = '';

    for (let i = 0; i < item.length; i++) {
        if (item[i] === '-') {
        code = code.concat('11');
        } else if (item[i] === '.') {
        code = code.concat('10');}    
        
    }
    if (code.length < 10) {
        let lettersLeft = 10 - code.length;    
        for (let i = 0; i < lettersLeft; i++) {
        zeros = zeros.concat('0');
        }
    }
    return zeros.concat(code);
});

const getLetters = (string) => {
    const LETTER_LENGTH = 10;
    const lettersArr = [];
    
    for (let i = 0; i < string.length; i += LETTER_LENGTH) {        
      lettersArr.push(string.substr(i, LETTER_LENGTH));
    }
    return lettersArr;
  };



function decode(expr) {
    const codedMessage = getLetters(expr);
    const lettersNumbers =[];
    codedMessage.forEach((item) => {
        lettersNumbers.push(encodedKeys.indexOf(item));
    })
    const decodedMessage = lettersNumbers.map((item) => {
        return item === -1 ? " " : MORSE_TABLE[codesKeys[item]];  
      });
    const answer = decodedMessage.join('');
    return answer;
}

module.exports = {
    decode
}
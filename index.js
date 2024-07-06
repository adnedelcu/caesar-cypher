const map = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let text = process.argv[2];
if (text.split(' ').join('') === text && process.argv.length != 4) {
    text = process.argv.splice(2, process.argv.length - 2).join(' ');
}
const shift = parseInt(process.argv.at(-1));
console.log(`shift: ${shift}`, `text: ${text}`);

const cypher = (letter) => {
    if (map.indexOf(letter.toLowerCase()) === -1) {
        return letter;
    }
    const newLetter = map.at(map.indexOf(letter.toLowerCase()) + shift);
    return newLetter;
};

const newText = [];
for (const index in text) {
    newText[index] = cypher(text[index]);
}

console.log(`Originl Text: ${text}`, `New text: ${newText.join('')}`);

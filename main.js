const prompt = require('prompt-sync')({sigint: true})

/*
xify - returns the same string, but with every character replaced by an 'x'
Examples:
xify('hello') -> 'xxxxx'
xify('hi there') -> 'xxxxxxxx'
*/

console.log(`1. Xify:`)
function xify(y) {
    let newStr = ""
    for (let i = 0; i < y.length; i++) {
    newStr += 'x'
    }
    return newStr
}
console.log(xify('Cheers'))
console.log()
console.log()

/*
yellingChars - returns the given string with an exclamation point after each character
Examples:
yellingChars('goodness') -> 'g!o!o!d!n!e!s!s!'
yellingChars('oh hello') -> 'o!h! !h!e!l!l!o!'
*/

console.log(`2. YellingChars:`)
function yellingChars(x) {
    let y = ""
    for (let i = 0; i < x.length; i++) {
    y = y + x[i] + '!'
    }
    return y
}
console.log(yellingChars('say what'))
console.log()
console.log()

/*
indexedChars - adds the index of each character before that character in the given string
Examples:
indexedChars('hello') -> '0h1e2l3l4o'
indexedChars('bye') -> '0b1y2e'
*/

console.log(`3. IndexedChars:`)
function indexedChars(x) {
    let y = ""
    for (let i = 0; i < x.length; i++) {
    y = y + i + x[i]
    }
    return y
}
console.log(indexedChars('What'))
console.log()
console.log()

/*
exclaim - returns the given sentence with every question mark or period changed to an 
exclamation point.
Examples:
exclaim('What are you doing? Are you a fool?') -> 'What are you doing! Are you a fool!'
exclaim('This is fine.') -> 'This is fine!'
*/

console.log(`4. Exclaim:`)
function exclaim(x) {
    let y = ""
    for (let i = 0; i < x.length; i++) {
    if (x[i] === "?" || x[i] === ".") {
        y = y + "!"
    } else (y = y + x[i])
    }
    return y
}
console.log(exclaim('What? Yeah? Okay.'))
console.log()
console.log()

/*
truncate - shortens a long string to 15 characters plus an ellipsis (...)
Examples:
truncate('The fault, dear Brutus, is not in our stars, but in ourselves.') -> 'The fault, dear...'
truncate("Well, that's just, like, your opinion man.") -> "Well, that's ju..."
*/

console.log(`5. Truncate:`)
function truncate(x) {
    let y = ""
    for (let i = 0; i < 16; i++) {
    if (i < 15) {
    y = y + x[i]
    } else {
    y = y + '...'
    }
    }
    return y
}
console.log(truncate('Stairway to heaven'))
console.log()
console.log()

/*
ciEmailify - creates an email from a two-part name
Examples:
ciEmailify('colin jaffe') -> 'colin.jaffe@codeimmersives.com'
ciEmailify('Anthony DeRosa') -> 'anthony.derosa@codeimmersives.com'
*/

console.log(`6. ciEmailify:`)
function ciEmailify(x) {
    let y = ""
    for (let i = 0; i <= x.length; i++) {
    if (x[i] === " ") {
    y = y + "."
    } else if (x[i] !== " " && i < x.length) {
    y = y + x[i]
    } else {
    y = y + "@codeimmersives.com"
    }     
}   return y
}

console.log(ciEmailify('John Smith'))
console.log()
console.log()

/*
reverse - reverses the given string
Examples:
reverse('colin') -> 'niloc'
reverse('mesuara') -> 'arausem'
*/

console.log(`7. Reverse:`)
function reverse(x) {
    let y = ""
    for (let i = x.length-1; i >= 0; i--) {
    y = y + x[i]
}   return y
}
console.log(reverse(`Reverse Reverse`))
console.log()
console.log()

/*
onlyVowels - returns only the vowels from a word

Examples:
onlyVowels('Colin Jaffe') -> 'oiae'
onlyVowels('quickly') -> 'ui'
onlyVowels('Anthony DeRosa') -> 'Aoeoa'
*/

console.log(`8. onlyVowels:`)
function onlyVowels(x) {
    let y = ""
    for (let i = 0; i < x.length; i++) {
        let vowel = x[i]
        if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'y' || vowel === 'u') {
        y = y + vowel
    }
    }
    return y
}

console.log(onlyVowels('Trying any vowels'))
console.log()
console.log()
console.log('End')

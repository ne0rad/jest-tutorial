function reverseString(string) {
    const reverseString = [];
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString.push(string[i]);
    }
    return reverseString.join('');
}

module.exports = reverseString;
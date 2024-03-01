const palindromes = function (string) {
    const origString = string.split('');
    const revString = origString;
    revString.reverse();
    let origMarker = 0;
    let revMarker = revString.length - 1;
    for (let i = 0; i = string.length; i++) {
        if (origString[origMarker] === revString[revMarker]) {
            i++;
            origMarker++;
            revMarker--;
        } else if (origString[origMarker].match(/[a-z]/i)) {
            origMarker++;
        } else if (revString[revMarker].match(/[a-z]/i)) {
            revMarker--;
        } else return(false);
        return(true);
    }
};

// Do not edit below this line
module.exports = palindromes;

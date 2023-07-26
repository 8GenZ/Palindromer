function getValues() {
    let input = document.getElementById('userString').value;


    let revString = reverseString(input);

    checkForPalindrome(revString, input)

    displayResults(results)
}

function reverseString(input) {

    let revString = '';

    for (let index = input.length - 1; index >= 0; index--) {

        let character = input[index];

        revString = revString + character;
    }

    return revString;
}

function checkForPalindrome(revString, userString) {

    let results = ''

    if (revString == userString) {
        results = 'Palindrome';
    } else {
        results = 'Not A Palindrome';
    }

    return results;

}

function displayResults(results) {

    if (results == 'Palindrome') {
        document.getElementById('true');

        alertBox.classList.remove('invisible');

    }
    if (results == 'Not A Palindrome') {

        document.getElementById('false')

        alertBox.classList.remove('invisble')
    }

}
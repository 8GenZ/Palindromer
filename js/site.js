function getValues() {
    let input = document.getElementById('userString').value;


    let results = checkForPalindrome(input);


    displayResults(results);
}

function checkForPalindrome(input) {

    let revString = '';

    input = input.toLowerCase();

    let regex = /[^a-z0-9]/gi;
    input = input.replace(regex, '')


    for (let index = input.length - 1; index >= 0; index--) {

        let character = input[index];

        revString = revString + character;
    }


    let palindromeObj = {
        isPalindrome: (revString == input),
        reversedString: revString
    };

    return palindromeObj;
}


function displayResults(results) {

    let alertBox = document.getElementById('alert');
    alertBox.classList.remove('invisible');

    document.getElementById('msgReversed').textContent = `Your Message Reversed is ${results.reversedString}`;
    if (results.isPalindrome == true) {
        
        alertBox.classList.remove('alert-danger');

        document.getElementById('results').textContent = 'Great Job! You entered a palindrome!';

        alertBox.classList.add('alert-success');
    } else {

        alertBox.classList.remove('alert-success');

        document.getElementById('results').textContent = "Sorry! That's not a Palindrome!";

        alertBox.classList.add('alert-danger');
    }


}
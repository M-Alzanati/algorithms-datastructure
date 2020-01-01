function isPalindrome(word) {
    if (!word) return false;
    word = word.toLowerCase();

    for(let i = 0; i < word.length; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    }
    
    return true;
}

var word = readline();
print(isPalindrome(word));

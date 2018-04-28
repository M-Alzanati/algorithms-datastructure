/**
 * @author: 
 * @description: Given a word check if it's palindrome or not. A palindrome is a word, phrase, 
 * number, or other sequence of characters which reads the same backward as forward.
 * @example: Amore Roma, Tenet, Wow, 1234321
 */

const re = /[^\w]/g;

function solve_rec(text) {
    if (text.length < 2) {
        return true;
    } else if (text[text.length - 1] !== text[0]) {
        return false;
    } else {
        return solve_rec(text.substr(1, text.length - 2));
    }
}

function recursive(text) {
    return solve_rec(getPlainText(text));
}

function iterative(text) {
    text = getPlainText(text);
    for (let c = 0; c < text.length; c++) {
        if (text[text.length - c - 1] !== text[c]) {
            return false;
        }
    }
    return true;
}

function getPlainText(text) {
    return text.replace(re, '').toLowerCase();
}

module.exports = {
    recursive,
    iterative
};
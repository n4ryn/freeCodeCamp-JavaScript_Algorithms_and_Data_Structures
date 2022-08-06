function palindrome(str) {
  str = str.replace(/\W|_/g, "").toLowerCase();
  let reverse = str.split("").reverse().join("");

  if (str === reverse) {
    return true;
  }

  return false;
}

palindrome("eye");

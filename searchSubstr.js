function searchSubstr(mainStr, subStr) {
    if (subStr.length > mainStr.length) return false;
    for (let i = 0; i < mainStr.length; i++) {
        for (let j = 0; j < subStr.length; j++) {
            if (mainStr[i + j] !== subStr[j]) break;
            if (j === subStr.length - 1) return true;
        }
    }
    return false;
}
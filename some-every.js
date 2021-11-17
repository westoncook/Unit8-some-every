function hasOddNumber(arr) {
    return arr.some(isOdd);
}

function isOdd(num) {
    return num % 2 !== 0;
}

function hasAZero(num) {
    const arr = Array.from(num.toString());
    return arr.some((val) => {
        return val === '0';
    })
}

function hasOnlyOddNumbers(arr) {
    return arr.every(isOdd);
}

function hasNoDuplicates(arr) {
    return arr.every(function (val, ind, array) {
        return !array.some((v, i) => {
            if (val === v && ind !== i) {
                return true
            }
        })
    })
}

function hasNoDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++)
            if (arr[i] === arr[j]) {
                return false;
            }
    }
    return true
}

function hasCertainKey(arr, key) {
    return arr.every((obj) => {
        return obj[key];
    })
}

function hasCertainValue(arr, key, val) {
    return arr.every((obj) => {
        return obj[key] === val;
    })
}


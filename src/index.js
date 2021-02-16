module.exports = function reverse(n) {
    let arr = ('' + n).split('');
    let newArr = '';

    if (arr[0] === '-') {
        newArr = arr.slice(1);
        return newArr.reverse().join('');
    } else {
        return arr.reverse().join('');
    };
}

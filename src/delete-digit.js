function deleteDigit(num) {
    let str = num.toString();
    let arr = str.split('');
    let rand = Math.floor(Math.random() * arr.length)

    for (let elem of arr) {
        if (elem === rand) {
            arr.splice(rand, 1);
        }
    }

    let sum = arr.reduce((prev, current) => prev + current, 0);

    console.log(sum);
}

deleteDigit(152)
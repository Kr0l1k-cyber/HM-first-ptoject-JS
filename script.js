const arr = ['123', '246', '532', '444', '1235', '4783', '26789']

for (let i = 0; i < arr.length; i++) {
    const firstDigit = arr[i][0];
    if (firstDigit === '2' || firstDigit === '4') {
        console.log(arr[i]);
    }
    }


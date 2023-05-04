const arr = ['123', '246', '532', '444', '1235', '4783', '26789']

for (let i = 0; i < arr.length; i++) {
    const firstDigit = arr[i][0];
    if (firstDigit === '2' || firstDigit === '4') {
        console.log(arr[i]);
    }
    }

    for (let i = 2; i <= 100; i++) {
        let isPrime = true;
        
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
            isPrime = false;
            break;
            }
        }
        
        if (isPrime) {
            console.log(i, 'Делитель этого числа 1 и' + i);
        }
        }
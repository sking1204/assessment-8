function addCommas(number) {
    if(isNaN(number)){
        return NaN;
    }
    const formattedNumber = number.toLocaleString("en-US");
    console.log(formattedNumber)
    console.log(typeof formattedNumber)
    return formattedNumber;
}



module.exports = addCommas;

// //Manual Tests

// addCommas(1234); //expect 1,234
// addCommas(1000000); //expect 1,000,000
// addCommas(9876543210); //expect 9,876,543,210
// addCommas(6); //expect 6
// addCommas(-10); //expect -10
// addCommas(-5678); //expect -5,678
// addCommas(12345.678); //expect 12,345.678
// addCommas(-3141592.65); //expect -3,141,592.65

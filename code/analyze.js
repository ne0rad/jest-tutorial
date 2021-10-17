function analyze(arr) {
    let max = -Infinity;
    let min = +Infinity;
    let average = 0;
    let length = arr.length;
    arr.forEach(el => {
        if(el > max) max = el;
        if(el < min) min = el;
        average += el;
    });
    average = average / length;

    return {
        average: average,
        min: min,
        max: max,
        length: length
    }
}

module.exports = analyze;
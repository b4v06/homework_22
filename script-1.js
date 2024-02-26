for (let step = 1900; step <= 2100; step++) {
    if (Number.isInteger(step / 4) && Number.isInteger(step / 100) == false) {
        console.log(step);
    } else if (Number.isInteger(step/400)) {
        console.log(step);
    }
}
function calculateOutputCorrected(inputValue) {
    return Math.floor((inputValue - 699) / 700) + 1;
}
for (let i = 0; i < 700; i++) {
    console.log(i, ":", calculateOutputCorrected(i))
}
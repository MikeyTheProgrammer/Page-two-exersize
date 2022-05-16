let number = 6742; count = 1;
while (number > 0) {
    count = count * (number % 10)
    number = Math.trunc(number / 10)
}
console.log(count)
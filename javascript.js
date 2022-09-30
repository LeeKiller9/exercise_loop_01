let result = "";

function exercise1() {
    for (let i = 1; i <= 100; i++) {
        if (i === 100) {
            result = result + i;
            alert("Finished");
            break;
        }
        result = result + i + ", ";
    }
    document.getElementById("resultEx1").innerHTML = result;
    result = "";
}

function exercise2() {
    let temp = 0;
    do {
        temp = +prompt("Enter current temperature:");
        if (temp < 20) {
            alert("Enter higher temperature")
        } else if (temp > 100) {
            alert("Enter lower temperature")
        }
    } while (temp < 20 || temp > 100)
    document.getElementById("resultEx2").innerHTML = "Current temperature: " + temp;
}

function exercise3() {
    let a = 0;
    let b = 1;
    let temp = 0;
    result = "1, "
    for (let i = 0; i < 19; i++) {
        temp = b;
        b += a;
        a = temp;
        if (i === 18) {
            result += b;
        } else {
            result += b + ", ";
        }
    }
    document.getElementById("resultEx3").innerHTML = result;
    result = "";
}

function exercise4() {
    let a = 0;
    let b = 1;
    let temp = 0;
    while (b % 5 !== 0) {
        temp = b;
        b += a;
        a = temp;
    }
    document.getElementById("resultEx4").innerHTML = "First Fibonacci number % 5 = 0: " + b;
}

function exercise5() {
    let a = 0;
    let b = 1;
    let temp = 0;
    let sum = 1;
    for (let i = 0; i < 19; i++) {
        temp = b;
        b += a;
        a = temp;
        sum += b;
    }
    document.getElementById("resultEx5").innerHTML = "" + sum;
}

function exercise6() {
    let sum = 0;
    let num = 7;
    for (let i = 0; i < 30; i++) {
        sum += num;
        num += 7;
    }
    document.getElementById("resultEx6").innerHTML = "" + sum;
}

function exercise7() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += "FizzBuzz, ";
        } else if (i % 3 === 0) {
            result += "Fizz, ";
        } else if (i === 100) {
            result += "Buzz";
        } else if (i % 5 === 0) {
            result += "Buzz, ";
        } else {
            result += i + ", ";
        }
    }
    document.getElementById("resultEx7").innerHTML = "" + result;
}



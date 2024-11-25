let chislo;

function foo(num){
    
    const isNegative = num < 0;
    
    num = Math.abs(num);
    let reversed = 0;

    while (num > 0) {
        const digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }

    return isNegative ? -reversed : reversed;
}

document.getElementById("btn1").onclick=function(){
    chislo=foo(document.getElementById("txt1").value);
    console.log(chislo);
}
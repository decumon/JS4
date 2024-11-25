let stroka

function foo(str, nomer){
    str=str.replace([nomer], "")
    return str;
}

document.getElementById("btn1").onclick=function(){
    console.log(stroka=foo(document.getElementById("txt1").value, document.getElementById("txt2").value))
}
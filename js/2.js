let stroka;
document.getElementById("btn1").onclick=function(){
    stroka=""
    for (let i=1; i<document.getElementById("txt1").value.length; i+=2){
    stroka+=document.getElementById("txt1").value.at(i);
    }
    console.log(stroka);
}
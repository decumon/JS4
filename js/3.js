let sum;
document.getElementById("btn1").onclick=function(){
    sum=1;
    for (let i=0; i<document.getElementById("txt1").value.length; i++){
    sum*= +document.getElementById("txt1").value.at(i);
    }
    console.log(sum);
}
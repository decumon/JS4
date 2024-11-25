let messages={
    'error':"Вы допустили ошибку",
    'success':"Все прошло успешно",
    'check':function(otvet, answer){
        if (otvet==answer) console.log(this.success);
        else console.log(messages.error);
    }
 }
ch1=Math.floor(Math.random()*100%10+3)
ch2=Math.floor(Math.random()*100%10+3)
let user=prompt(`Вычислите ${ch1}*${ch2}`);
let answer=(ch1*ch2);
messages.check(user, answer);

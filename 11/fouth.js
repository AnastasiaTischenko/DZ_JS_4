var prNum, tempOut;

prNum = Math.floor((Math.random() * 10) + 1);
//tempOut = document.getElementById('temp-out');
//tempOut.innerHTML = prNum;
console.log(prNum);

var count = 0;
function f1(){
    var num, out;
    // from 1 to 10
    
    num = document.getElementById('mynum').value;
    out = document.getElementById('out');
    if (count == 3){
        out.innerHTML = 'Вы исчерпали свои 3 попытки';
        document.getElementById('btn').disabled = true;
            
    }
    else if (num > prNum){
        out.innerHTML = 'Вы ввели число больше чем нужно'; 
        count++;
    }
    else if (num < prNum){
        out.innerHTML = 'Вы ввели число меньше чем нужно';
        count++;
    }
    else if (num == prNum){
        out.innerHTML = 'Вы угадали!';
        document.getElementById('btn').disabled = true;
    }
    else{
        count++; 
    }
}












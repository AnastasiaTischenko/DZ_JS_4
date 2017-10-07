document.getElementById('push').onclick = function(){
    var val = document.getElementById('input').value;
    if (val > 10){
        return alert(Math.pow(val, 2));
    }
    else if (val < 7){
        return alert('value is less than 7');
    }
    else if (val == 8){
        return alert(7);
    }
    else if (val == 9){
        return alert(8);
    }
    else{
        return 0;
    }
}
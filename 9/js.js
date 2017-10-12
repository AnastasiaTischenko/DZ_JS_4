document.getElementById('push').onclick = function(){
    var arr = document.getElementById('arr').value;
    arr = arr.split(', ');
    if ( arr == undefined || arr == ""){
        alert('enter arrey');
    }
    else{
        document.querySelector("#out").innerHTML = arr.length;
    }
    console.log(Number(arr.length));
}


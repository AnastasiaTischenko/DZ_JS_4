document.getElementById('log-in').onclick = function(){
    var age = document.getElementById('age').value;
    //console.log(age)
    if (age == undefined || age == ""){
        alert('Please enter your age!');
    }
    else if (age > 16){
        alert('Welcome!');
    }
    else{
        alert('You are too young!');
    }
}
//1
document = f1();
function f1(){
    var p = document.querySelectorAll('p');
    for (var i = 0; i < p.length; i++){
        p[i].style.backgroundColor = "red";
    }
}

//2
document = f2();
function f2(){
    var img = document.querySelectorAll('img');
    for (var i = 0; i < img.length; i++){
        img[i].style.boxShadow = '0 0 4px #BE595A';
    }
}

//3
document = f3();
function f3(){
    var p = document.querySelectorAll('p');
    var arr = [];
    for (var i = 0; i < p.length; i++){
        arr[i] = p[i].innerHTML;
    }
    for (var i = 0; i < p.length; i++){
        p[i].innerHTML = i + 1 + ')' + arr[i] + '<br>';
    }
}
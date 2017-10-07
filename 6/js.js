function f1(a){
    var str = a;
    var p = document.getElementsByTagName('p');
    for (let i = 0; i < p.length; i++){
        var z = p[i].innerHTML;
        if (z.includes(str)){
            p[i].style.textDecoration = 'underline';
        }
    }
}
f1("span>Маша</span>");
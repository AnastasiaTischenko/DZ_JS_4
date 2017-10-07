var count = 0;
var btn = document.getElementsByTagName('button');
    for (var i = 0; i < btn.length; i++){
        btn[i].onclick = function(){
        count++;
        this.innerText = count;
    }
}

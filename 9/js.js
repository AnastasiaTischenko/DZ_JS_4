//var array = [12, 'str', 234, true];
var array = [];
function f1(arr) {
        console.log(arr.length);
        k = Number(arr.length);
        return k;
}
if ( array == undefined || array.length == 0){
    alert('enter arrey');
}
else{
    document.querySelector("#out").innerHTML = f1(array);
}

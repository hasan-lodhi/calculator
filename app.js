var dis = document.getElementById("hasan");


function getval(num){
    dis.value +=num;
}

function calc (){
    dis.value = eval(dis.value);
}

function clearall (){
    dis.value = "";
}
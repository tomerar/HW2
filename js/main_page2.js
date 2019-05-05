/*add enter listener*/

window.addEventListener("keypress",checkIfEnter,false);
function checkIfEnter(key)
{
    if(key.keyCode == "13")
    {
        base_conver();
    }
}
/*to the convert*/
function base_conver() {
    var value = document.getElementById('input').value;



    for (let index = 0; index < value.length; index++) {
        if ('1234567890 '.indexOf(value.charAt(index)) == -1) {
            clearinput(1);
            console.log("wrong input");

            return;
        }

    }
    clearinput(0);

    var e = document.getElementById("selet_base_from");
    var e2 = document.getElementById("selet_base_to");
    var strUser = e.options[e.selectedIndex].value;
    var strUser2 = e.options[e2.selectedIndex].value;
    var initial_base =10;
    
    result =parseInt(value,strUser );
    console.log(parseInt(value, strUser));

    document.getElementById('result_base').innerHTML = "result: "+ ConvertBase(value, strUser, strUser2);
   
}
/*check the input*/ 
function clearinput(res) {
    if (res == 1) {

        document.getElementById('wrong_input').innerHTML = "you enter bad iput only 0-9 ";
    }
    if (res == 0) {

        document.getElementById('wrong_input').innerHTML = "";
    }

}
function ConvertBase(val, base1, base2) {
    if (typeof (val) == "number") {
        return parseInt(String(val)).toString(base2);
    } else {
        return parseInt(val.toString(), base1).toString(base2)
    };
}
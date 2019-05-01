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

    var e = document.getElementById("selet_base");
    
    var strUser = e.options[e.selectedIndex].value;
    var initial_base =10;
    
    result =parseInt(value,strUser );
    console.log(parseInt(value, strUser));

    document.getElementById('result_base').innerHTML = "result: " +parseInt(value + '', strUser)
    .toString(initial_base);
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
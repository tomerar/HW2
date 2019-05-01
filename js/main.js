/*add enter listener*/
window.addEventListener("keypress", checkIfEnter, false);
function checkIfEnter(key) {
    if (key.keyCode == "13") {
        check_If_Ok();
    }
}

/*random number*/ 
var number = Math.floor(Math.random() * 15) + 5;
let theString = makeid(number);
document.getElementById('text-center').innerHTML = theString;
console.log(number);
/*random number*/
function getNewString() {
    var number = Math.floor(Math.random() * 15) + 5;
    let theString = makeid(number);
    document.getElementById('text-center').innerHTML = theString;
    console.log(number);
}
document.getElementById('text-center').innerHTML = theString;
/*random letters*/
function makeid(length) {
    var text = "";
    var possible = ".,abcdefghijklmnopqrstuvwxyz123456789";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
/*check input*/ 
function clearinput() {
    document.getElementById('errors').innerHTML = "you enter bad iput only 1-9 ,a-z , . and ,";
    setTimeout(function () {
        document.getElementById('errors').innerHTML = "";
    }, 2500);
}
/*chack the end of the 3 leatter on abc*/ 
function chagne_the_char(char) {
    let Ww = 'w';
    let Aa = 'a';
    let Zz = 'z';
    if (Ww.charCodeAt(0) >= char.charCodeAt(0)) {
        var result = String.fromCharCode((char.charCodeAt(0) + 3));
        return result;
    }
    else {
        var resultElse = String.fromCharCode((char.charCodeAt(0) + 3) - Zz.charCodeAt(0) + Aa.charCodeAt(0) - 1);
        return resultElse;
    }

}
String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

/*the main function*/ 
function check_If_Ok() {
    var value = document.getElementById('input').value;
    var res1 = "";
    var res = "";
    var after_convert_res = "";
    res1 = document.getElementById('text-center').innerHTML;
    res = res1.toLowerCase();
    console.log(res);
    for (let index = 0; index < value.length; index++) {
        if ('.,abcdefghijklmnopqrstuvwxyz123456789'.indexOf(value.charAt(index)) == -1) {
            clearinput();
            console.log("wrong input");

            return;
        }
    }
    console.log("it check the array");
    for (let index = 0; index < res.length; index++) {
        if ('0123456789'.indexOf(res.charAt(index)) !== -1) {
            after_convert_res += (10 - parseInt(res.charAt(index))).toString();
            console.log("is a number")
        }
        if ('abcdefghijklmnopqrstuvwxyz'.indexOf(res.charAt(index)) !== -1) {
            after_convert_res += chagne_the_char(res.charAt(index));
            console.log("is a char")
        }
        if ('.,'.indexOf(res.charAt(index)) !== -1) {
            var coma = ""
            coma = res.charAt(index);
            after_convert_res += coma;
        }
    }
    console.log(" befor:" + after_convert_res)
    for (let index = 0; index < res.length; index++) {
        if ('.,'.indexOf(after_convert_res.charAt(index)) !== -1) {
            var swapVAr = "";
            swapVAr = after_convert_res.charAt(after_convert_res.length - index - 1);
            after_convert_res = after_convert_res.replaceAt(after_convert_res.length - index - 1, after_convert_res.charAt(index));
            after_convert_res = after_convert_res.replaceAt(index, swapVAr);
            break;
        }
    }

    console.log("the result:  "+after_convert_res);
    console.log("what you inter: "+value);
    var n = after_convert_res.localeCompare(value);
    if (n == 0) {
        console.log("yes");
        alert("You passed the test successfully")
        window.location.href = 'page5.html';
    }
    else {
        console.log("no");
        alert("try again")
    }



}
function base_conver() {
    var e = document.getElementById("selet_base");
    var strUser = e.options[e.selectedIndex].value;
    console.log(strUser);
}


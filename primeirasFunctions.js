//1
function GetUserInformation(){
    let userName = prompt("Qual seu nome?");
    let userPassWord = prompt("Informe senha desejada.");
}

//2
function CheckUserInformation(userName, userPassWord){
    var name = prompt("Qual seu nome?");
    var passWord = prompt("Qual sua senha?");
    return userName === name && userPassWord === passWord? true : false;
}

//3
GetUserInformation()
CheckUserInformation(userName, userPassWord);
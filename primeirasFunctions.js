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

////////////////////////////
//colocando em prática 2.1.6

//1
function confirmarDados(nome){
    var nomeCompleto = nome + ' da Silva';
    var idade = 20;
    function getAnoNascimento(){
        var ano = 2022 - idade;
        return ano;
    }

    console.log('nome completo:', nomeCompleto);
    console.log('ano de nascimento:', getAnoNascimento());
    console.log('idade:', idade);
}

confirmarDados('Marcos');

//2
function confirmarDados(nome){
    let nomeCompleto = nome + ' da Silva';
    let geracao = 'millenium';
    
    function getAnoNascimento(){
        const idade = 40;
        const ano = 2022 - idade;
        return ano;
    }
    let anoDeNascimento = getAnoNascimento();
    if (anoDeNascimento <= 1995) {
        geracao = 'geração x';
    }

    console.log('nome completo:', nomeCompleto);
    console.log('ano de nascimento:', getAnoNascimento());
    console.log('geração:', geracao);
}

confirmarDados('Marcos');

//3
try {
    function confirmarDados(nome){
        var nomeCompleto = nome + ' da Silva';
        
        function getAnoNascimento(){
            var idade = 20;
            var ano = 2022 - idade;
            return ano;
        }
    
        console.log('nome completo:', nomeCompleto);
        console.log('ano de nascimento:', getAnoNascimento());
        console.log('idade:', idade);
    }
    
    confirmarDados('Marcos');
} catch (error) {
    console.log('Um erro foi encontrado e não foi possível concluir a operação.')
}

//4
function confirmarDados(nome, idade){
    var nomeCompleto = nome + ' da Silva';
    var geracao = geracaoPertence();
    
    function getAnoNascimento(){
        var ano = 2022 - idade;
        return ano;
    }

    function geracaoPertence(){
        if (getAnoNascimento() <= 1995) {
            return 'geração x';
        }
    }

    console.log('nome completo:', nomeCompleto);
    console.log('ano de nascimento:', getAnoNascimento());
    console.log('geração:', geracao);
}

confirmarDados('Marcos', 40);

//colocando em prática 2.1.7
function  wageIncrease(salary){
    try {
        switch (true) {
            case salary <= 1500:
                return salary*1.2;

            case salary > 1500 && salary <= 2000:
                return salary*1.15;

            case salary > 2000 && salary <= 3000:
                return salary*1.1;

            case salary > 3000:
                return salary*1.05;
        
            default:
                throw new error();
        }
    } catch (error) {
        console.log("Por favor, informe os dados corretamente!")
    }
}

wageIncrease(1500);
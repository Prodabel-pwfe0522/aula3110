let opcao
function escolha(opcao) 
{
    switch (opcao)  
    {                   
            case 0:
                
            function somar()
            break
            case 1:
            document.getElementById("txt1").innerHTML = "2"
            break;
            case 2:
            document.getElementById("txt1").innerHTML = "3"
            break;
            case 3:
            document.getElementById("txt1").innerHTML = "4"
            break;
            case 4:
            document.getElementById("txt1").innerHTML = "5";
            break;
            case 5: 
            document.getElementById("txt1").innerHTML = "6";
            break;
            case 6:
            document.getElementById("txt1").innerHTML = "7";
            break;
            case 7:
            document.getElementById("txt1").innerHTML = "8";
            break;
            case 8:
            document.getElementById("txt1").innerHTML = "9";
            break;
            case 9:
            document.getElementById("txt1").innerHTML = "10";
            break;
            default 
            document.getElementById("txt1").innerHTML = "0";
            break;
    }
    function somar() {
        let n1 = Number(window.prompt('Digite um número: '))
        let n2 = Number(window.prompt('Digite outro número:'))
        soma = n1 + n2

        let res = document.querySelector('section#txt1')
        res.innerHTML = `<p>A soma entre <mark>${n1}</mark> e <mark>${n2}</mark> é igual a <strong>${soma}</strong>!</p>`
    }

}
var selecionado = window.location.search
selecionado = selecionado.replace('?', '')
//console.log(selecionado)
var caixa1 = document.getElementById('caixa1')
var caixa2 = document.getElementById('caixa2')
var caixa3 = document.getElementById('caixa3')
var caixa4 = document.getElementById('caixa4')
var caixa5 = document.getElementById('caixa5')
var caixa6 = document.getElementById('caixa6')
var caixa7 = document.getElementById('caixa7')
var caixa8 = document.getElementById('caixa8')
var caixa9 = document.getElementById('caixa9')
var caixa10 = document.getElementById('caixa10')

if(selecionado == 1) {
 let resultado = document.getElementById('pos-Resultado')
 resultado.removeChild(caixa2)
 resultado.removeChild(caixa3)
 resultado.removeChild(caixa4)
 resultado.removeChild(caixa5)
 resultado.removeChild(caixa6)
 resultado.removeChild(caixa7)
 resultado.removeChild(caixa8)
 resultado.removeChild(caixa9)
 resultado.removeChild(caixa10)

} else if (selecionado == 2) {
    let resultado = document.getElementById('pos-Resultado')
    resultado.removeChild(caixa3)
    resultado.removeChild(caixa4)
    resultado.removeChild(caixa5)
    resultado.removeChild(caixa6)
    resultado.removeChild(caixa7)
    resultado.removeChild(caixa8)
    resultado.removeChild(caixa9)
    resultado.removeChild(caixa10)
}else if (selecionado == 3) {
    let resultado = document.getElementById('pos-Resultado')
    resultado.removeChild(caixa4)
    resultado.removeChild(caixa5)
    resultado.removeChild(caixa6)
    resultado.removeChild(caixa7)
    resultado.removeChild(caixa8)
    resultado.removeChild(caixa9)
    resultado.removeChild(caixa10)

}else if (selecionado == 4) {
    let resultado = document.getElementById('pos-Resultado')
    resultado.removeChild(caixa5)
    resultado.removeChild(caixa6)
    resultado.removeChild(caixa7)
    resultado.removeChild(caixa8)
    resultado.removeChild(caixa9)
    resultado.removeChild(caixa10)

}else if (selecionado == 5) {
    let resultado = document.getElementById('pos-Resultado')
    resultado.removeChild(caixa6)
    resultado.removeChild(caixa7)
    resultado.removeChild(caixa8)
    resultado.removeChild(caixa9)
    resultado.removeChild(caixa10)

}else if (selecionado == 6) {
    let resultado = document.getElementById('pos-Resultado')
    resultado.removeChild(caixa7)
    resultado.removeChild(caixa8)
    resultado.removeChild(caixa9)
    resultado.removeChild(caixa10)

}else if (selecionado == 7) {
    let resultado = document.getElementById('pos-Resultado')
    resultado.removeChild(caixa8)
    resultado.removeChild(caixa9)
    resultado.removeChild(caixa10)

}else if (selecionado == 8) {
    let resultado = document.getElementById('pos-Resultado')
    resultado.removeChild(caixa9)
    resultado.removeChild(caixa10)

}else if (selecionado == 9) {
    let resultado = document.getElementById('pos-Resultado')
    resultado.removeChild(caixa10)
}


function sortearNumeros() {
    var numeroInformado = document.getElementById('numeroInformado').value;

    if(numeroInformado < 20 || numeroInformado > 1000) {
        alert('O número deve ser de 20 até 1000!')
        document.getElementById('numeroInformado').value = '';

    } else if (selecionado == 1) {
        let guardaNumerosAleatorios = []
        for(let i = 0; i < 2; i++){
        let numeroAleatorio = Math.floor(Math.random() * numeroInformado)
        guardaNumerosAleatorios.push(numeroAleatorio) 

        }
        caixa1.value = guardaNumerosAleatorios[0]

        document.getElementById('numeroInformado').value = '';

    } else if (selecionado == 2) {
        let guardaNumerosAleatorios = []
        for(let i = 0; i < 3; i++){
        let numeroAleatorio = Math.floor(Math.random() * numeroInformado)
        guardaNumerosAleatorios.push(numeroAleatorio) 

        }
        caixa1.value = guardaNumerosAleatorios[0]
        caixa2.value = guardaNumerosAleatorios[1]

        document.getElementById('numeroInformado').value = '';

    }else if (selecionado == 3) {
        let guardaNumerosAleatorios = []

        for(let i = 0; i < 4; i++){
        let numeroAleatorio = Math.floor(Math.random() * numeroInformado)
        guardaNumerosAleatorios.push(numeroAleatorio) 

        }
        caixa1.value = guardaNumerosAleatorios[0]
        caixa2.value = guardaNumerosAleatorios[1]
        caixa3.value = guardaNumerosAleatorios[2]

        document.getElementById('numeroInformado').value = '';
        console.log(guardaNumerosAleatorios)
    }else if (selecionado == 4) {
        let guardaNumerosAleatorios = []

        for(let i = 0; i < 5; i++){
        let numeroAleatorio = Math.floor(Math.random() * numeroInformado)
        guardaNumerosAleatorios.push(numeroAleatorio) 

        }
        caixa1.value = guardaNumerosAleatorios[0]
        caixa2.value = guardaNumerosAleatorios[1]
        caixa3.value = guardaNumerosAleatorios[2]
        caixa4.value = guardaNumerosAleatorios[3]

        document.getElementById('numeroInformado').value = '';

    }else if (selecionado == 5) {
        let guardaNumerosAleatorios = []

        for(let i = 0; i < 6; i++){
        let numeroAleatorio = Math.floor(Math.random() * numeroInformado)
        guardaNumerosAleatorios.push(numeroAleatorio) 

        }
        caixa1.value = guardaNumerosAleatorios[0]
        caixa2.value = guardaNumerosAleatorios[1]
        caixa3.value = guardaNumerosAleatorios[2]
        caixa4.value = guardaNumerosAleatorios[3]
        caixa5.value = guardaNumerosAleatorios[4]

        document.getElementById('numeroInformado').value = '';

    }else if (selecionado == 6) {
        let guardaNumerosAleatorios = []

        for(let i = 0; i < 7; i++){
        let numeroAleatorio = Math.floor(Math.random() * numeroInformado)
        guardaNumerosAleatorios.push(numeroAleatorio) 

        }
        caixa1.value = guardaNumerosAleatorios[0]
        caixa2.value = guardaNumerosAleatorios[1]
        caixa3.value = guardaNumerosAleatorios[2]
        caixa4.value = guardaNumerosAleatorios[3]
        caixa5.value = guardaNumerosAleatorios[4]
        caixa6.value = guardaNumerosAleatorios[5]



        document.getElementById('numeroInformado').value = '';

    }else if (selecionado == 7) {
        let guardaNumerosAleatorios = []

        for(let i = 0; i < 8; i++){
        let numeroAleatorio = Math.floor(Math.random() * numeroInformado)
        guardaNumerosAleatorios.push(numeroAleatorio) 

        }
        caixa1.value = guardaNumerosAleatorios[0]
        caixa2.value = guardaNumerosAleatorios[1]
        caixa3.value = guardaNumerosAleatorios[2]
        caixa4.value = guardaNumerosAleatorios[3]
        caixa5.value = guardaNumerosAleatorios[4]
        caixa6.value = guardaNumerosAleatorios[5]
        caixa7.value = guardaNumerosAleatorios[6]



        document.getElementById('numeroInformado').value = '';

    }else if (selecionado == 8) {
        let guardaNumerosAleatorios = []

        for(let i = 0; i < 9; i++){
        let numeroAleatorio = Math.floor(Math.random() * numeroInformado)
        guardaNumerosAleatorios.push(numeroAleatorio) 

        }
        caixa1.value = guardaNumerosAleatorios[0]
        caixa2.value = guardaNumerosAleatorios[1]
        caixa3.value = guardaNumerosAleatorios[2]
        caixa4.value = guardaNumerosAleatorios[3]
        caixa5.value = guardaNumerosAleatorios[4]
        caixa6.value = guardaNumerosAleatorios[5]
        caixa7.value = guardaNumerosAleatorios[6]
        caixa8.value = guardaNumerosAleatorios[7]

        document.getElementById('numeroInformado').value = '';

    }else if (selecionado == 9) {
        let guardaNumerosAleatorios = []

        for(let i = 0; i < 10; i++){
        let numeroAleatorio = Math.floor(Math.random() * numeroInformado)
        guardaNumerosAleatorios.push(numeroAleatorio) 

        }
        caixa1.value = guardaNumerosAleatorios[0]
        caixa2.value = guardaNumerosAleatorios[1]
        caixa3.value = guardaNumerosAleatorios[2]
        caixa4.value = guardaNumerosAleatorios[3]
        caixa5.value = guardaNumerosAleatorios[4]
        caixa6.value = guardaNumerosAleatorios[5]
        caixa7.value = guardaNumerosAleatorios[6]
        caixa8.value = guardaNumerosAleatorios[7]
        caixa9.value = guardaNumerosAleatorios[8]


        document.getElementById('numeroInformado').value = '';

    }else if (selecionado == 10) {
        let guardaNumerosAleatorios = []

        for(let i = 0; i < 11; i++){
        let numeroAleatorio = Math.floor(Math.random() * numeroInformado)
        guardaNumerosAleatorios.push(numeroAleatorio) 

        }
        caixa1.value = guardaNumerosAleatorios[0]
        caixa2.value = guardaNumerosAleatorios[1]
        caixa3.value = guardaNumerosAleatorios[2]
        caixa4.value = guardaNumerosAleatorios[3]
        caixa5.value = guardaNumerosAleatorios[4]
        caixa6.value = guardaNumerosAleatorios[5]
        caixa7.value = guardaNumerosAleatorios[6]
        caixa8.value = guardaNumerosAleatorios[7]
        caixa9.value = guardaNumerosAleatorios[8]
        caixa10.value = guardaNumerosAleatorios[9]


        document.getElementById('numeroInformado').value = '';

    }
}
 




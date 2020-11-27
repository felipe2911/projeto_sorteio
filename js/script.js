
function sortearNumeros() {
    var numeroInformado = document.getElementById('numeroInformado').value;
    var guardaNumerosAleatorios = []
    if(numeroInformado < 10 || numeroInformado > 1000) {
        alert('O número deve ser de 10 até 1000!')
        document.getElementById('numeroInformado').value = '';
    } else {
        for(var i = 0; i < 8; i++){
        var numeroAleatorio = Math.floor(Math.random() * numeroInformado)
        guardaNumerosAleatorios.push(numeroAleatorio) 

        console.log(guardaNumerosAleatorios)
        }
        document.getElementById('caixa1').value = guardaNumerosAleatorios[0]
        document.getElementById('caixa2').value = guardaNumerosAleatorios[1]
        document.getElementById('caixa3').value = guardaNumerosAleatorios[2]
        document.getElementById('caixa4').value = guardaNumerosAleatorios[3]
        document.getElementById('caixa5').value = guardaNumerosAleatorios[4]
        document.getElementById('caixa6').value = guardaNumerosAleatorios[5]
        document.getElementById('caixa7').value = guardaNumerosAleatorios[6]
        document.getElementById('caixa8').value = guardaNumerosAleatorios[7]

        document.getElementById('numeroInformado').value = '';

    }
}
 



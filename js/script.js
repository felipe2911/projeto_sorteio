 function selecionandoQtd(){
     var selecionar = document.getElementById('qtdSorteio').value
     //console.log(selecionar)
     if(selecionar == '') {
         alert('Por favor, selecione um número para o sorteio!')
     }else {
        window.location.href = 'sorteio.html?' + selecionar

     }
}




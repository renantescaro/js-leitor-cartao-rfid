leitura = ''
document.addEventListener('keypress', monitoramentoLeitor)


function monitoramentoLeitor(event){
    if(event.key != 'Enter'){
        leitura += event.key
        leitura.replace(' ', '')
        if(leitura.length >= 10){
            pessoaPorCartao(leitura)
            console.log(leitura)
            leitura = ''
        }
    }
}


function pessoaPorCartao(leituraCartao){
    if(leituraCartao=='0005162117'){
        document.getElementById('h2Pessoa').innerText = 'Renan'
    }
    else if(leituraCartao=='0005162307'){
        document.getElementById('h2Pessoa').innerText = 'Willian'
    }
    else{
        document.getElementById('h2Pessoa').innerText = 'Cartão de número '+leituraCartao+' não cadastrado!'
    }
}
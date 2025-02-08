let nomes = []

function adicionarAmigo(){
    var adicionarAmigo = document.querySelector("#amigo").value;
    if(adicionarAmigo.trim() === " ") {
        alert("Por favor digite um nome");
        return;
    }
    nomes.push(adicionarAmigo);
    document.querySelector("#amigo").value = '';
    console.log(nomes);
}

nomes.push(adicionarAmigo);

function embaralharAmigos(){
    let randomizar = Math.floor(Math.random() * nomes.length);
    console.log(nomes[randomizar]);
}

// function botaoSorteio(){
//     document.getElementById("embaralharAmigos()").innerHTML = randomizar
//     alert(embaralharAmigos)
//     let resultadoMigos = document.getElementById("resultado")
//     alert(resultadoMigos)

// }

function botaoSorteio(){
    let nomeSorteado = embaralharAmigos();
    alert("O nome sorteado foi: " + nomeSorteado);

    let resultadoMigos = document.getElementById("resultado");
    if (resultadoMigos){
        resultadoMigos.innerHTML = "O sorteado foi: " + nomeSorteado;
    }
}

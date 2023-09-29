let inputTarefa = document.querySelector('.inputTarefa');
let adicionar = document.querySelector('.adicionar');
let resultados = document.querySelector('.resultados');

adicionar.addEventListener('click', function(e){
    e.preventDefault();
    let valorInput = inputTarefa.value;
    if(!valorInput){
        alert('Insira um valor válido')
        return;
    }
    let tarefa = document.createElement('div');
    tarefa.classList.add('tarefa');
    resultados.appendChild(tarefa);

    let circulo = document.createElement('div');
    circulo.classList.add('circulo');
    tarefa.appendChild(circulo);

    let icone = document.createElement('i');
    circulo.appendChild(icone);

    let nomeTarefa = document.createElement('span');
    nomeTarefa.innerHTML += `${valorInput}`;
    tarefa.appendChild(nomeTarefa);
    nomeTarefa.addEventListener('click', ()=>{
        let editarTarefa = prompt('Edite sua tarefa:');
        if(!editarTarefa){
            return;
        }
        else{
            nomeTarefa.innerHTML = `${editarTarefa}`
        }
    });

    let excluir = document.createElement('span');
    excluir.classList.add('excluir');
    excluir.innerHTML = 'X'
    nomeTarefa.after(excluir);

    excluir.addEventListener('click', function() {
        nomeTarefa.remove();
        excluir.remove();
        icone.remove();
        circulo.remove();
        tarefa.remove();
    });

    circulo.addEventListener('click', ()=> {
        icone.classList.toggle('fa-solid');
        icone.classList.toggle('fa-check');
        nomeTarefa.classList.toggle('ativar');
    })
});
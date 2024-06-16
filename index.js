//Todas as nossas imagens estão sobrepostas. A proposta é que quando alternarmos, a primeira vá para o "fim da fila". No caso das thumbs, a ativa sempre será a primeira da direita e a próxima a entrar é a primeira da esquerda.

let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')
let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

btnNext.onclick = () => moveItemsOnClick('next')
btnBack.onclick = () => moveItemsOnClick('back')

function moveItemsOnClick(type){
    let listItems = document.querySelectorAll('.list .list-item')
    let thumbItems = document.querySelectorAll('.thumb .thumb-item')

    if(type === 'next'){
        list.appendChild(listItems[0]) //appendchild lida com nodelist(lembra um array), colocando o elemento no inicio de uma lista.
        thumb.appendChild(thumbItems[0])
        container.classList.add('next')
    }else{
        list.prepend(listItems[listItems.length - 1]) //prepend faz o inverso do anterior
        thumb.prepend(thumbItems[thumbItems.length - 1]) //length pega o tamanho todo
        container.classList.add('back')
    }

    setTimeout( () => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 3000); //settimeout serve para deixar um temporizador para os efeitos. No nosso caso, tirar a classe depois de 3seg para que a animação não fique direto.
}


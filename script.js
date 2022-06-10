const $mobile_page = document.getElementById('mobile-page')
const $cards = document.getElementsByClassName('card')
const $content = document.getElementsByClassName('content');
const $button_request = document.getElementById('button-request')
const $main = document.getElementsByTagName('main')
const cards = [...$cards]
const content = [...$content]


cards.map(card => card.addEventListener('click', seleciona_card))
cards.map(card => card.addEventListener('click', habilita_pedido))
$button_request.addEventListener('click', test_disabled)
function test_disabled(){
    alert('disabled removed')
}

function seleciona_card(e) {

    const content = this.parentNode
    const card_selected = e.currentTarget

    const $logo = card_selected.getElementsByClassName('logo')
    let logo = [...$logo]
    logo = logo[0]

    const $cards_in_content = content.getElementsByClassName('card');
    const cards_in_content = [...$cards_in_content]


    let cont = 0;
    for (let i = 0; i < 3; i++) {

        if (cards_in_content[i].classList.contains('card_selected')) {
            cards_in_content[i].classList.remove('card_selected')

            const $logo_temp = cards_in_content[i].getElementsByClassName('logo')
            let logo_temp = [...$logo_temp]
            logo_temp[0].classList.remove('logo-checked')


            card_selected.classList.add('card_selected')
            logo.classList.add('logo-checked')
        }
        else {
            cont++
        }
    }

    if (cont === 3) {
        card_selected.classList.add('card_selected')
        logo.classList.add('logo-checked')
    }
}


function habilita_pedido() {

    // console.log(cards)
    let cont = 0
    cards.map(e => e.classList.contains('card_selected') ? cont++ : 0)

    if (cont === 3) {
        console.log($button_request.hasAttribute('disabled'))
        $button_request.removeAttribute('disabled')
        console.log($button_request.hasAttribute('disabled'))
        $button_request.style.backgroundColor = '#32B72F';

        let text_button = $button_request.children
        text_button[0].textContent = 'Fechar pedido';
        text_button[0].style.fontWeight = 'bold';
    }
}
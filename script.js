const $mobile_page = document.getElementById('mobile-page')
const $cards = document.getElementsByClassName('card')
const $content = document.getElementsByClassName('content');
const $button_request = document.getElementById('button-request')
const $header = document.getElementsByTagName('header')[0]
const $footer = document.getElementsByTagName('footer')[0]
const $confirm_request = document.getElementsByClassName('confirm-request')[0]
const $confirm_request_send_button = document.getElementsByClassName('confirm-request-send-button')[0]
const $confirm_request_cancel_button = document.getElementsByClassName('confirm-request-cancel-button')[0]
const $confirm_request_content_tittle = document.getElementsByClassName('confirm-request-content-tittle')
const $confirm_request_content_price = document.getElementsByClassName('confirm-request-content-price')
const $price_total = document.getElementsByClassName('price_total')[0]

const cards = [...$cards]
const content = [...$content]

let request = []
let price = []
let price_total = 0

cards.map(card => card.addEventListener('click', select_card))
cards.map(card => card.addEventListener('click', enable_request))
$button_request.addEventListener('click', confirm_request)
$confirm_request_cancel_button.addEventListener('click', cancel_request)


function select_card(e) {

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


function enable_request() {
  
    let cards_selected = []
    let cont = 0
    cards.map(card => card.classList.contains('card_selected') ? cont++ : 0)
    
    if (cont === 3) {
        price_total = 0
        price = []

        cards.map(card => card.classList.contains('card_selected') ? cards_selected.push(card): 0)
        cards_selected.map(card_selected => request.push(card_selected.getElementsByTagName('h3')[0].textContent))
        cards_selected.map(card_selected => price.push(parseFloat(card_selected.getElementsByTagName('input')[0].value)))
        price.map(price => price_total += price)
  
        $button_request.removeAttribute('disabled');
        $button_request.style.backgroundColor = '#32B72F';
        let text_button = $button_request.children;
        text_button[0].textContent = 'Fechar pedido';
        text_button[0].style.fontWeight = 'bold';
    }
}


function confirm_request(){

    $mobile_page.classList.add('filter')
    $header.classList.add('adjust-header-layout')
    $footer.classList.add('adjust-footer-layout')
    
    let name = prompt('Qual o seu nome?')
    let adress = prompt('Qual o seu endereço?')

    for(let i = 0; i < 3; i++){
        $confirm_request_content_tittle[i].textContent = request[i];
        $confirm_request_content_price[i].textContent = `R$ ${price[i].toFixed(2)}`;
    }

    $price_total.textContent = `R$ ${price_total.toFixed(2)}`;
    
    $confirm_request.style.display = 'flex';

    const text_request = encodeURIComponent(`Olá, gostaria de fazer o pedido: \n- Prato: ${request[0]}\n- Bebida: ${request[1]}\n- Sobremesa: ${request[2]}\nTotal: R$ ${price_total.toFixed(2)}\n\nNome: ${name}\nEndereço: ${adress}`)
    const link_request = document.getElementById('link_request')
    link_request.setAttribute('href', `https://wa.me/5521993056687?text=${text_request}`)
}

function cancel_request(){

    $confirm_request.style.display = 'none'
    $mobile_page.classList.remove('filter')
    $header.classList.remove('adjust-header-layout')
    $footer.classList.remove('adjust-footer-layout')
}

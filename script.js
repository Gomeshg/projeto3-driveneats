const $mobile_page = document.getElementById('mobile-page')
const $cards = document.getElementsByClassName('card')
const $content = document.getElementsByClassName('content');
const $button_request = document.getElementById('button-request')
const cards = [...$cards]
const content = [...$content]


cards.map( card => card.addEventListener('click', seleciona_card))


function seleciona_card(e){

    const content = this.parentNode
    const card_selected = e.currentTarget

    const $button_card_selected = card_selected.getElementsByTagName('span')
    let button_card_selected = [...$button_card_selected]
    button_card_selected = button_card_selected[0]

    const $cards_in_content = content.getElementsByTagName('div');
    const cards_in_content = [...$cards_in_content]

    
    let cont = 0;
    for(let i = 0; i < 3; i++){

        if(cards_in_content[i].classList.contains('card_selected')){
            cards_in_content[i].classList.remove('card_selected')
    
            let $button_card_selected_temp = cards_in_content[i].getElementsByTagName('span')
            let button_card_selected_temp = [...$button_card_selected_temp]
            button_card_selected_temp[0].classList.remove('button-selected')
            

            card_selected.classList.add('card_selected')
            button_card_selected.classList.add('button-selected')
        }
        else{
            cont++
        }
    }

    if(cont === 3){
        card_selected.classList.add('card_selected')
        button_card_selected.classList.add('button-selected')
    }
}
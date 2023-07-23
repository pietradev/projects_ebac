//declaring variables that will receive the numeric inputs
let input_a = document.querySelector('#input-a');
let input_b = document.querySelector('#input-b');
let submit_button = document.querySelector('#btn-submit');
let message = document.querySelector('#message');
const inputs = document.querySelector('.inputs')

inputs.addEventListener('submit', function(e){
    e.preventDefault(); // Prevent the default form submission

    if(input_b.value > input_a.value){

        const score_a = parseFloat(input_a.value);
        const score_b = parseFloat(input_b.value);
        let calculation = (score_a + score_b)/2;
        message.innerHTML= `You media was sucessfully calculated: ${calculation}`;
    }
    else{
        message.style.border = '1px dashed white';
        message.innerHTML = 'Invalid Inputs';
    }
})
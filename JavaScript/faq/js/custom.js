
var allQuestion = document.querySelectorAll('.question');

allQuestion.forEach((element, index) => {
    if(index > 0){
        element.parentElement.nextElementSibling.classList.add('d-none');
    }

    element.addEventListener('click', () => {
        element.parentElement.nextElementSibling.classList.toggle('d-none');

        if(element.nextElementSibling.innerHTML.trim() == '<i class="fa-solid fa-circle-plus"></i>'){
            element.nextElementSibling.innerHTML = '<i class="fa-solid fa-circle-minus"></i>';
        } else {
            element.nextElementSibling.innerHTML = '<i class="fa-solid fa-circle-plus"></i>';
        }

        allQuestion.forEach((value, i) => {
            if(index != i){
                value.parentElement.nextElementSibling.classList.add('d-none');
                value.nextElementSibling.innerHTML = '<i class="fa-solid fa-circle-plus"></i>';
            }
        })
    });
    
})


const slideBtn = document.querySelectorAll('.slide');

slideBtn.forEach(element => {
    element.addEventListener('click', () => {
        // console.log('ok')
        document.querySelector('.img').classList.toggle('tanya')
        document.querySelector('.img').classList.toggle('john')
        document.querySelector('.description.tanya').classList.toggle('act');
        document.querySelector('.description.john').classList.toggle('act');
        document.querySelector('.profesional.tanya').classList.toggle('act');
        document.querySelector('.profesional.john').classList.toggle('act');

    })
});
const cards = document.querySelectorAll('.plate');

cards.forEach(function(card) {card.classList.add('none')})

let currentIndex = 0; 

let currentCard = 0; 

cards[0].querySelector('[data-nav="prev"]').remove();



cards[0].classList.remove('none');

cards[0].classList.add('visible');

updateProgressBar();

window.addEventListener('click', function(event) {

    if (event.target.closest('[data-nav="next"]')) {

        const result = checkOnAnswer(cards[currentIndex]);

        const answersWrapper = cards[currentIndex].querySelector('[data-answers]');

        if (result) {

            updateProgressBar('next');


            setTimeout (function () {

                cards[currentIndex].classList.remove('visible');

                setTimeout (function( ) {

                cards[currentIndex].classList.add('none');

                currentIndex = currentIndex + 1;

                cards[currentIndex].classList.remove('none');


                setTimeout(function () {

                    cards[currentIndex].classList.add('visible');

                }, 100)

                }, 500)

            }, 500)

        

        } else {

            answersWrapper.classList.add('required');
        }

    }

    if (event.target.closest('[data-nav="prev"]')) {

        updateProgressBar('prev');

        setTimeout(function () {

        if (currentIndex === 0 ) return;

        cards[currentIndex].classList.remove('visible');


        setTimeout(function () {

            cards[currentIndex].classList.add('none');

            currentIndex = currentIndex - 1;

            cards[currentIndex].classList.remove('none');

            setTimeout (function() {

                cards[currentIndex].classList.add('visible');

            }, 100)


        }, 500)


        }, 500)

    }

})

function checkOnAnswer(card) {

    const radioBtns = card.querySelectorAll('input[type="radio"]');

    for (let radio of radioBtns) {

        if (radio.checked === true) return true;  
    }

    const checkBoxes = card.querySelectorAll('input[type="checkbox"]');

    if (checkBoxes.length > 0) {

        for (let checkBox of checkBoxes) {

            if (checkBox.checked) return true;
        }
    }

};

function updateProgressBar(direction = 'start') {

    if (direction === 'next') {

        currentCard = currentCard + 1;

    }  else if (direction === 'prev') {

        currentCard = currentCard - 1;
    }

    const progressValue = document.querySelectorAll('.progress__label strong');

    const progressLineBar = document.querySelectorAll('.progress__line-bar');

    const countableCards = document.querySelectorAll('[data-progress]').length;

    const progress = Math.round((currentCard * 100) / countableCards);

    progressValue.forEach( function (item) {

        item.innerText = progress + '%';

    });

    progressLineBar.forEach( function (item) {

        item.style.width = progress + '%';

    })

};

// phone mask

mask('#tel');

const submitForm = document.querySelector('#submitForm');

const telInput = document.querySelector('#tel');

submitForm.onclick = function() {

    if (telInput.value === '+' || telInput.value.length <= 6){
        telInput.value = ''
    }
        
}

const checkBoxPolicy = document.querySelector('#policy');

checkBoxPolicy.addEventListener( 'focus', function () {

    console.log('fffff');

    this.closest('label').classList.add('hovered');

});

checkBoxPolicy.addEventListener( 'blur', function () {

    console.log('hhhhh');

    this.closest('label').classList.remove('hovered');
    
});


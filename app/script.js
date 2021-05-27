const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

if (document.querySelector(".hamburger-menu")!= null) {menuIcon.addEventListener("click", () => {
   navbar.classList.toggle("change");
})}

/* Rating Stars inspiration: https://dev.to/leonardoschmittk/how-to-make-a-star-rating-with-js-36d3*/

const ratingStars = [...document.getElementsByClassName("rating__star")];
const ratingResult = document.querySelector(".rating__result");

printRatingResult(ratingResult);

function executeRating(stars, result) {
   const starClassActive = "rating__star fas fa-star";
   const starClassUnactive = "rating__star far fa-star";
   const starsLength = stars.length;
   let i;
   stars.map((star) => {
      star.onclick = () => {
         i = stars.indexOf(star);

         if (star.className.indexOf(starClassUnactive) !== -1) {
            printRatingResult(result, i + 1);
            for (i; i >= 0; --i) stars[i].className = starClassActive;
         } else {
            printRatingResult(result, i);
            for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
         }
      };
   });
}

function printRatingResult(result, num = 0) {
   result= `${num}/5`;
}

executeRating(ratingStars, ratingResult);

/* Pop Up Contact-Service */



const openKundeserviceButtons = document.querySelectorAll('[data-kundeservice-target]')
const closeKundeserviceButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openKundeserviceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const kundeservice = document.querySelector(button.dataset.kundeserviceTarget)
        openKundeservice(kundeservice)
    })
})

overlay.addEventListener('click' , () => {
    const kundeservice = document.queryselectorAll('.kundeservice.active')
    kundeservice.forEach(kundeservice => {
        closeKundeservice(kundeservice)
    })
})

closeKundeserviceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const kundeservice = button.closest('.kundeservice')
        closeKundeservice(kundeservice)
    })
})

function openKundeservice(kundeservice) {
    if (kundeservice == null) return
    kundeservice.classList.add('active')
    overlay.classList.add('active')
}

function closeKundeservice(kundeservice) {
    if (kundeservice == null) return
    kundeservice.classList.remove('active')
    overlay.classList.remove('active')
}

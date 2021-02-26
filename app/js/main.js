var presentationItem = document.getElementsByClassName('header__presentation-instruction-item');
var presentation = document.getElementsByClassName('presentation');
var presentationTitle = document.getElementsByClassName('header__presentation-title');

presentationItem[0].onclick = function() {
    presentationItem[1].classList.remove("active");
    presentationItem[2].classList.remove("active");
    presentationItem[3].classList.remove("active");
    (this).classList.add("active");

    presentation[1].classList.remove("active");
    presentation[2].classList.remove("active");
    presentation[3].classList.remove("active");
    presentation[0].classList.add("active");

    presentationTitle[1].classList.remove("active");
    presentationTitle[0].classList.add("active");
}

presentationItem[1].onclick = function() {

    presentationItem[0].classList.remove("active");
    presentationItem[2].classList.remove("active");
    presentationItem[3].classList.remove("active");
    (this).classList.add("active");

    presentation[0].classList.remove("active");
    presentation[2].classList.remove("active");
    presentation[3].classList.remove("active");
    presentation[1].classList.add("active");

    presentationTitle[1].classList.remove("active");
    presentationTitle[0].classList.add("active");
}

presentationItem[2].onclick = function() {
      presentationItem[0].classList.remove("active");
      presentationItem[1].classList.remove("active");
      presentationItem[3].classList.remove("active");
      (this).classList.add("active");

      presentation[0].classList.remove("active");
      presentation[1].classList.remove("active");
      presentation[3].classList.remove("active");
      presentation[2].classList.add("active");

      presentationTitle[1].classList.remove("active");
      presentationTitle[0].classList.add("active");
}

presentationItem[3].onclick = function() {
    (this).classList.add("active");
    presentationItem[0].classList.remove("active");
    presentationItem[1].classList.remove("active");
    presentationItem[2].classList.remove("active");

    presentation[0].classList.remove("active");
    presentation[1].classList.remove("active");
    presentation[2].classList.remove("active");
    presentation[3].classList.add("active");

    presentationTitle[0].classList.remove("active");
    presentationTitle[1].classList.add("active");
}


// document.querySelectorAll('.answers__item-question').forEach((item) =>
//     item.addEventListener('click', () => {
//         item.parentNode.classList.toggle('active');
//     })
// )
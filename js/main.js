
document.addEventListener('DOMContentLoaded', () => {

    if (document.querySelector('#home')) { // what`s page
        const presentationItem = document.querySelectorAll('.header__presentation-instruction-item');
        const presentation = document.querySelectorAll('.presentation');
        const presentationTitle = document.querySelector('.header__presentation-title');

        const settingTitle = [
            {
                idxChangeTitle: 0,
                title: `Reliable and trustworthy by design: <span>readable by your devices and your own eyes.</span>`
            },
            {
                idxChangeTitle: 1,
                title: `Reliable and trustworthy by design: <span>readable by your devices and your own eyes.</span>`
            },
            {
                idxChangeTitle: 2,
                title: `Reliable and trustworthy by design: <span>readable by your devices and your own eyes.</span>`
            },
            {
                idxChangeTitle: 3,
                title: `How it works`
            }
        ];


        function chooseBlockImageAndAcordeons(textlist, imagelist, title, settingTitle, activeElement) {

            textlist.forEach((item, idx) => {

                item.addEventListener('click', () => {

                    textlist.forEach((other, idx) => {
                        if (other !== item) {
                            other.classList.remove("active");
                            imagelist[idx].classList.remove("active");
                            return
                        }
                        return;
                    });

                    imagelist[idx].classList.add("active");
                    title.innerHTML = settingTitle[idx].title;
                    item.classList.add("active");
                });
            });

            imagelist[activeElement].classList.add("active");
            title.innerHTML = settingTitle[activeElement].title;
            textlist[activeElement].classList.add("active");

        };

        chooseBlockImageAndAcordeons(presentationItem, presentation, presentationTitle, settingTitle,3);

  

            $('.quotes__slider-content').slick({
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                prevArrow: '<button type="button" class="slick-btn slick-prev">Previous</button>',
                nextArrow: '<button type="button" class="slick-btn slick-next">Previous</button>'
            });

     

        //https://github.com/ganlanyuan/tiny-slider
        // http://ganlanyuan.github.io/tiny-slider/demo/
        // var slider = tns({
        //     items: 2,
        //     container: "#slider_home",
        //     speed: 400
        // });


    
    };




    if (document.querySelector('#faq')) {
        console.log('fack')
        document.querySelectorAll('.answers__category-title').forEach((item) =>
            item.addEventListener('click', () => item.parentNode.classList.toggle('active'))
        )

        document.querySelectorAll('.answers__item-question').forEach((item) =>
            item.addEventListener('click', () => item.parentNode.classList.toggle('active'))
        )
    }


    if (document.querySelector('#security')) {

    }



    $(".menu__list-item--anchor").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });



});


console.log('global')



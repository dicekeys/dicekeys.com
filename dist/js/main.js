document.addEventListener('DOMContentLoaded', () => {

    function allSite() {
        const menuBtn = document.querySelector('.menu-btn');
        const menu = document.querySelector('.menu');

        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            menu.classList.toggle('active');
            if (!menuBtn.classList.contains('active')) {
                menuBtn.classList.add('holder');
            } else {
                menuBtn.classList.remove('holder');
            }
        });

    };

    function pageHome() {
        const anchorsLink = document.querySelectorAll('a.menu__list-item--anchor');

        anchorsLink.forEach((item) => {
            item.addEventListener('click', function (e) {
                e.preventDefault()
                const blockID = item.getAttribute('href')
                document.querySelector(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            })
        });

        const presentationItem = document.querySelectorAll('.header__presentation-instruction-item');
        const presentation = document.querySelectorAll('.presentation');
        const presentationTitle = document.querySelector('.header__presentation-title');

        const settingTitle = [
            {
                idxChangeTitle: 0,
                title: `How it works`
            },
            {
                idxChangeTitle: 1,
                title: `How it works`
            },
            {
                idxChangeTitle: 2,
                title: `How it works`
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

        chooseBlockImageAndAcordeons(presentationItem, presentation, presentationTitle, settingTitle, 3);
    };

    function pageFaq() { 
        document.querySelectorAll('.answers__category-title').forEach((item) =>
            item.addEventListener('click', () => { 
                item.parentNode.classList.toggle('active');
            })
        )
        document.querySelectorAll('.answers__item-question').forEach((item) =>
            item.addEventListener('click', () => item.parentNode.classList.toggle('active'))
        )
    };

    function pageSequrity() { };

    function pageSupport() { };

    if (document.querySelector('#home')) pageHome();
    else if (document.querySelector('#faq')) pageFaq();
    else if (document.querySelector('#security')) pageSequrity();
    else if (document.querySelector('#support')) pageSupport();
    allSite();

});
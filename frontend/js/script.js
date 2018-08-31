window.onload = () => {
    $('.hero .owl-carousel').owlCarousel({
        dots: true,
        items: 1,
        dotsEach: true,
        autoplay: true,
        rewind: true
    });

    $('.proposals .owl-carousel').owlCarousel({
        margin: 28,
        dots: true,
        items: 3
    });
    
    let tabs = document.querySelectorAll('.proposals .tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            let tabPosition = 0;
            let tabs = document.querySelectorAll('.proposals .tab');
            let cards = document.querySelectorAll('.proposals .tab-content > div');

            //Change active tabs and sliders
            tabs.forEach(tab => {
                if (tab.classList.contains('active')) {
                    tab.classList.remove('active');
                }
            });

            cards.forEach(card => {
                if (card.classList.contains('active')) {
                    card.classList.remove('active');
                }
            });

            e.currentTarget.classList.add('active');
            
            //Find out a current position of the tab 
            for (let i = 0; i < tabs.length; i++)
                if (tabs[i].classList.contains('active')) {
                    tabPosition = i;
                }
            
            cards[tabPosition].classList.add('active');
        });
    });
};
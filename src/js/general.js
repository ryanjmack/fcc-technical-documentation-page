(function() {
    // The arrow button that will toggle the nac
    var target = document.getElementById('nav-toggle');

    // There is only element with this class
    var navList = document.getElementsByClassName('nav__ol--first')[0];

    // when target is clicked change the display of the navList and change the arrows direction
    target.addEventListener('click', function() {
        if (navList.style.display === 'block') {
            navList.style.display = 'none';
            target.classList.add('icon-right');
            target.classList.remove('icon-down');
        }
        else {
            navList.style.display = 'block';
            target.classList.add('icon-down');
            target.classList.remove('icon-right');
        }
    });
}());

/************************************Плавная прокрутка******************************************/
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockBValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector('header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				headerNav.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockBValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

/************************************Плавная прокрутка******************************************/

/************************************Меню Бургер******************************************/
const iconMenu = document.querySelector('.menu__icon');
const headerNav = document.querySelector('.header__nav');
if(iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		headerNav.classList.toggle('_active');
	});
}


'use strict';

// Mobile Nav Toggler
(() => {
	const bodyEL = document.querySelector('[data-js=body]');
	const primaryNavEL = document.querySelector('[data-js=primary-nav]');
	const navToggleEL = document.querySelector('[data-js=primary-nav__toggler]');
	const clickCatcherNavEL = document.querySelector(
		'[data-js=primary-nav__click-catcher]'
	);

	const navToggleHandler = () => {
		if (
			primaryNavEL.getAttribute('data-primary-nav-toggled-open') === 'false'
		) {
			primaryNavEL.setAttribute('data-primary-nav-toggled-open', 'true');
			bodyEL.setAttribute('data-scroll-lock', 'true');
			return;
		}

		primaryNavEL.setAttribute('data-primary-nav-toggled-open', 'false');
		bodyEL.setAttribute('data-scroll-lock', 'false');
	};

	clickCatcherNavEL &&
		clickCatcherNavEL.addEventListener('click', navToggleHandler);

	navToggleEL && navToggleEL.addEventListener('click', navToggleHandler);
})();

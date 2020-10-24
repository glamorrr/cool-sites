// touch screen media width
const mobileMedia = 800;

// Testimonials slider using GliderJS library.
(() => {
	new Glider(document.querySelector('[data-js=glider-testimonials]'), {
		draggable: true,
		dragVelocity: 1,
		responsive: [
			{
				// screens greater than >= 300px
				breakpoint: 300,
				settings: {
					slidesToShow: 1,
					dots: '#glider-testimonials'
				}
			},
			{
				// screens greater than >= 800px
				breakpoint: mobileMedia,
				settings: {
					slidesToShow: 'auto',
					itemWidth: 650,
					exactWidth: true
				}
			}
		]
	});
})();

// Form submit handler.
(() => {
	const form = document.querySelector('[data-js=form]');
	const emailInput = document.querySelector('[data-js=form-email-input]');
	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const regexForEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
		if (!emailInput.value || !regexForEmail.test(emailInput.value)) {
			form.setAttribute('data-form-not-valid', 'true');
			setTimeout(
				() => form.setAttribute('data-form-not-valid', 'false'),
				3 * 1000
			);
			return;
		}
		alert(`Email: ${emailInput.value}`);
		emailInput.value = '';
		emailInput.blur();
	});
})();

// Nav mobile toggler
if (window.outerWidth <= mobileMedia) {
	(() => {
		const nav = document.querySelector('[data-js=nav]');
		const navToggler = document.querySelector('[data-js=nav-toggler]');
		const navBackdrop = document.querySelector('[data-js=nav-backdrop]');

		const navFunctionHandler = () => {
			if (nav.getAttribute('data-nav-toggled-open') === 'false') {
				nav.setAttribute('data-nav-toggled-open', 'true');
				document.querySelector('body').style.position = 'fixed';
				return;
			}
			nav.setAttribute('data-nav-toggled-open', 'false');
			document.querySelector('body').style.position = 'relative';
		};

		navToggler.addEventListener('click', navFunctionHandler);
		// close nav list if backdrop clicked
		navBackdrop.addEventListener('click', navFunctionHandler);
	})();
}

(() => {
  const footerFormEL = document.querySelector('.pageFooter__form');
  const inputFooterFormEL = document.querySelector('.pageFooter__input');

  const clearInput = (inputElement) => {
    inputElement.value = '';
  };

  const validateInput = (inputElement) => {
    const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    const isEmailValidated = regexEmail.test(inputElement.value);

    if (!isEmailValidated) {
      inputFooterFormEL.classList.add('pageFooter__input--notValidated');

      setTimeout(
        () =>
          inputFooterFormEL.classList.remove('pageFooter__input--notValidated'),
        3 * 1000
      );
      return;
    }

    alert(inputElement.value);
    clearInput(inputElement);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateInput(inputFooterFormEL);
  };

  footerFormEL.addEventListener('submit', handleSubmit);
})();

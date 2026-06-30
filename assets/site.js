const form = document.querySelector('#signup-form');
const emailInput = document.querySelector('#signup-email');

if (form && emailInput) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const subject = encodeURIComponent('Beautiful Applesauce early access');
    const body = encodeURIComponent(
      email
        ? `Please add this address to the Beautiful Applesauce early access list:\n\n${email}`
        : 'Please add me to the Beautiful Applesauce early access list.'
    );

    window.location.href = `mailto:hello@beautifulapplesauce.com?subject=${subject}&body=${body}`;
  });
}

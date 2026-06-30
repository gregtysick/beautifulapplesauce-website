const form = document.querySelector('#signup-form');
const emailInput = document.querySelector('#signup-email');
const note = document.querySelector('.signup-note');

if (form && emailInput && note) {
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
    note.textContent = 'Your mail app should open with the note ready to send.';
  });
}

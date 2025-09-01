
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

// Basic client-side form handler stub (replace action with Formspree or server later)
const form = document.querySelector('form[data-simple]');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    btn.disabled = true;
    btn.textContent = 'Sending...';
    // Demo only: simulate success
    setTimeout(()=>{
      btn.disabled = false;
      btn.textContent = 'Send message';
      form.reset();
      alert('Thanks — your message has been captured locally. Connect Formspree or a backend to receive it.');
    }, 700);
  });
}

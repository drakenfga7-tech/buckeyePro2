// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Quote form -> opens the visitor's email app pre-filled and addressed to us.
// This needs no backend or account setup, so it works immediately on Vercel.
// To upgrade later to a form that submits without opening email (e.g. Formspree
// or EmailJS), see the README.
const QUOTE_EMAIL = 'buckeyeremoval@yahoo.com';

const form = document.getElementById('quote-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = new FormData(form);
    const name = (data.get('name') || '').trim();
    const phone = (data.get('phone') || '').trim();
    const email = (data.get('email') || '').trim();
    const address = (data.get('address') || '').trim();
    const service = (data.get('service') || '').trim();
    const date = (data.get('date') || '').trim();
    const details = (data.get('details') || '').trim();

    const subject = `Quote request: ${service || 'Junk Removal'} - ${name || 'New lead'}`;

    const bodyLines = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email || 'n/a'}`,
      `Address/City: ${address || 'n/a'}`,
      `Service: ${service}`,
      `Preferred date: ${date || 'n/a'}`,
      '',
      'Details:',
      details || 'n/a'
    ];

    const mailto = `mailto:${QUOTE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

    window.location.href = mailto;
  });
}

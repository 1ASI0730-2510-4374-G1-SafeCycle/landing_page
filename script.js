const languages = {
    en: 'languages/lang-en.json',
    es: 'languages/lang-es.json'
  };


function setLanguage(lang) {
    fetch(languages[lang])
      .then(res => res.json())
      .then(data => {
        document.querySelectorAll('[id]').forEach(el => {
          const key = el.getAttribute('id');
          if (data[key]) {
            el.innerHTML = data[key];
          }
        });
      })
      .catch(err => {
        console.error('Error loading language:', err);
      });
  }

document.addEventListener("DOMContentLoaded", () => {
    const userLang = navigator.language || navigator.userLanguage;
    const lang = userLang.startsWith('es') ? 'es' : 'en'; 
    setLanguage(lang);
  });
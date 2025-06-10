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
document.getElementById('LogIn').addEventListener('click', () => {
    window.location.href = 'https://white-mud-04527db10.6.azurestaticapps.net/';
  });
document.getElementById('IntroductionButton').addEventListener('click', (e) => {
    e.preventDefault(); 
    window.location.href = 'https://white-mud-04527db10.6.azurestaticapps.net/';
  });
document.getElementById('planButton1').addEventListener('click', () => {
    window.location.href = 'https://white-mud-04527db10.6.azurestaticapps.net/';
});

document.getElementById('planButton2').addEventListener('click', () => {
    window.location.href = 'https://white-mud-04527db10.6.azurestaticapps.net/';
});

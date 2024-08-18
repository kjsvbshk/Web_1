// Seleccionar el botón de voz y las secciones de bio, footer y perfil
const voiceButton = document.getElementById('voice-assistant');
const bioSection = document.querySelector('.perfil-usuario-bio');
const footerSection = document.querySelector('.perfil-usuario-footer');
const profileSection = document.querySelector('.perfil-usuario-portada');
const avatarSection = document.querySelector('.perfil-usuario-avatar');

// Web Speech API
function readText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1; 
    utterance.pitch = 1; 
    utterance.lang = 'en-US'; // Cambia esto para cambiar el idioma
    speechSynthesis.speak(utterance);
}

// Evento para el botón de voz
voiceButton.addEventListener('click', () => {
    const bioText = bioSection.textContent;
    const footerText = footerSection.textContent;
    readText(bioText + ' ' + footerText);
});

voiceButton.addEventListener('focus',()=>{
    readText(voiceButton.getAttribute('aria-label'))
});

// Función para anunciar la navegación por teclado
function announceSection(element, sectionName) {
    readText('You are in the ' + sectionName);
}

// Añadir tabindex para que sean focuseables
bioSection.setAttribute('tabindex', '0');
footerSection.setAttribute('tabindex', '0');
profileSection.setAttribute('tabindex', '0');
avatarSection.setAttribute('tabindex', '0');

// Eventos de enfoque para las secciones
// bioSection.addEventListener('focus', () => announceSection(bioSection, 'User description'));
footerSection.addEventListener('focus', () => announceSection(footerSection, 'User Bio'));
profileSection.addEventListener('focus', () => announceSection(profileSection, 'change cover background'));
avatarSection.addEventListener('focus', () => announceSection(avatarSection, 'change profile picture'));

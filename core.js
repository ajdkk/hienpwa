// PRELOADER

// COOKIE CONSENT
const cookieStorage = {
    getItem: (key) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.spli('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value}));
        return cookies[key];
    },
    setItem: (key, value) => {
        document.cookie = `${key}=${value}`;
    },
};
const storageType = sessionStorage;
const consentPropertyName = 'motukaka_cookie_consent';
const shouldShowpopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {
    // FOR COOKIE CONSENT
    const consentPopup = document.getElementById('consent-popup');
    const acceptBtn = document.getElementById('accept');
    const acceptFn = event => {
        saveToStorage(storageType);
        consentPopup.classList.add('hidden');
    };
    acceptBtn.addEventListener('click', acceptFn);
    if (shouldShowpopup(storageType)) {
        setTimeout(() => { 
        consentPopup.classList.remove('hidden');
        }, 2000);
    }

};

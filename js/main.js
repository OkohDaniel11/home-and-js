

//Holding of translation for differnent language
const translations = {
    en: {
        navHome: "Home",
        navAbout: "About Us",
        navContact: "Contact us",
        navProducts: "Products",
        navHelp: "Help",
        productsTitle: "Products",
        flagTitle: "You are in: ",
        flagDescription: "Our International sites",
        footerHome: "Home",
        footerFacebook: "Facebook",
        footerInstagram: "Instagram",
        footerTwitter: "Twitter",
        flagImg: "flagimg/unitedkingdom.webp"
    },
    es: {
        navHome: "Inicio",
        navAbout: "Sobre Nosotros",
        navContact: "Contáctenos",
        navProducts: "Productos",
        navHelp: "Ayuda",
        productsTitle: "Productos",
        flagTitle: "Estás en: ",
        flagDescription: "Nuestros sitios internacionales",
        footerHome: "Inicio",
        footerFacebook: "Facebook",
        footerInstagram: "Instagram",
        footerTwitter: "Twitter",
        flagImg: "flagimg/spanish.png"
    },
    fr: {
        navHome: "Accueil",
        navAbout: "À Propos",
        navContact: "Contactez-nous",
        navProducts: "Produits",
        navHelp: "Aide",
        productsTitle: "Produits",
        flagTitle: "Vous êtes dans :",
        flagDescription: "Nos sites internationaux",
        footerHome: "Accueil",
        footerFacebook: "Facebook",
        footerInstagram: "Instagram",
        footerTwitter: "Twitter",
        flagImg: "flagimg/french.png"
    }
};


function changeLanguage(lang) {
    // Update text content based on the selected language
    document.querySelectorAll('[id]').forEach(el => {
        const key = el.id.split('-').map((part, index) => {
            return index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1);
        }).join('');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update the "You are in:" section with the current language flag
    const currentFlag = document.getElementById('current-flag');
    currentFlag.src = translations[lang].flagImg;
    currentFlag.alt = translations[lang].navHome; // Alt text can be the name of the language
}


//view more js in product html
function moreFunction() {
    const container = document.getElementById('fourcontainer');
    const btnText = document.getElementById('mreBtn');
    const fifthContainer = document.getElementById('fifthcontainer');

    // Check the screen width
    const isSmallScreen = window.matchMedia("(max-width: 568px)").matches;

    if (container.style.display === 'none' || container.style.display === '') {
        if (isSmallScreen) {
            container.style.display = 'contents'; // Show as content on smaller screens
        } else {
            container.style.display = 'flex'; // Show as flex on larger screens
        }
        fifthContainer.style.display = 'block';
        btnText.innerHTML = 'View Less!';
    } else {
        container.style.display = 'none';
        fifthContainer.style.display = 'none';
        btnText.innerHTML = 'View More!';
    }
}


//contact js for arrow dropdown
function dropdownContact() {
    const hiddenContainer = document.getElementById('hidden-container');
    const arrowDown = document.getElementById('arrow');

    if (!hiddenContainer.classList.contains('show')) {
        hiddenContainer.classList.add('show');
        arrowDown.innerHTML = '&#94;'; // Up arrow
    } else {
        hiddenContainer.classList.remove('show');
        arrowDown.innerHTML = '&#709;'; // Down arrow
    }
}
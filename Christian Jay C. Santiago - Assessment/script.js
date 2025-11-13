function toggleAnswer(index) {
    const card = document.querySelectorAll('.card')[index];
    const back = document.getElementById(`answer${index}`);
    const isExpanded = card.classList.contains('expanded');

    if (isExpanded) {
        back.classList.add('hide');
        setTimeout(() => {
            back.style.display = 'none';
            back.classList.remove('hide');
            card.classList.remove('expanded');
        }, 500);
        return;
    }

    document.querySelectorAll('.card').forEach(c => {
        if (c.classList.contains('expanded')) {
            const otherBack = c.querySelector('.card-back');
            if (otherBack) {
                otherBack.classList.add('hide');
                setTimeout(() => {
                    otherBack.style.display = 'none';
                    otherBack.classList.remove('hide');
                    c.classList.remove('expanded');
                }, 500);
            }
        }
    });

    card.classList.add('expanded');
    back.style.display = 'block';
}

document.getElementById('home-link').addEventListener('click', function () {
    setActiveLink('home-link');
});

document.getElementById('questions-link').addEventListener('click', function () {
    setActiveLink('questions-link');
});

document.getElementById('contact-link').addEventListener('click', function () {
    setActiveLink('contact-link');
});

document.querySelector('.logo-link').addEventListener('click', function () {
    setActiveLink('home-link');
});

function setActiveLink(activeId) {
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
    document.getElementById(activeId).classList.add('active');
}

const sections = document.querySelectorAll('section, footer');
const navLinks = document.querySelectorAll('nav a');

const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80% 0px', 
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === 'welcome') {
                setActiveLink('home-link');
            } else if (id === 'questions') {
                setActiveLink('questions-link');
            } else if (id === 'footer') {
                setActiveLink('contact-link');
            }
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

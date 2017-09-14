$( document ).ready(function() {
    window.sr = ScrollReveal();
    sr.reveal('#navigation', {
        duration: 2000,
        origin: 'left',
        distance: '150px',
        viewFactor: 0.1
    });
    sr.reveal('#main-header, #contact-header', {
        duration: 2000,
        delay: 500,
        origin: 'right',
        distance: '150px',
        viewFactor: 0.1
    });
    sr.reveal('#main-lead, #contact-lead', {
        duration: 2000,
        delay: 500,
        origin: 'bottom',
        distance: '100px',
        viewFactor: 0.1
    });
    sr.reveal('.event-event', {
        duration: 2000,
        delay: 500,
        origin: 'right',
        distance: '150px',
        viewFactor: 0.25
    });
    sr.reveal('.media-video', {
        duration: 2000,
        delay: 500,
        origin: 'right',
        distance: '150px',
        viewFactor: 0.25
    });
});


document.addEventListener('DOMContentLoaded',() => {
    new TypeIt('#title')
        .pause(1000)
        .delete(5, {delay:500})
        .type('bonjour')
        .go()
    });
   



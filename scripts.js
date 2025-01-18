document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const menu = document.getElementById("menu");

    hamburgerMenu.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});

// Evenementenlijst (kan ook uit een externe bron komen zoals een JSON-bestand)
const events = [
    {
        title: "Interstella",
        date: "2025-02-15",
        time: "22:00",
        location: "Jeugdhuis De Vlinder, Gits",
        ticketLink: "ticket-verkoop-link.html",
        archived: false,
        image: null
    },
    {
        title: "Festivachiel",
        date: "2025-07-11",
        time: "20:00",
        location: "onbepaald",
        ticketLink: "ticket-verkoop-link.html",
        archived: false,
        image: null
    },
    {
        title: "Oudejaarsavond",
        date: "2024-12-31",
        time: "23:00",
        location: "Jeugdhuis De Vlinder, Gits",
        ticketLink: null,
        archived: true,
        review: "Geweldige show! Het publiek was compleet gek."
    }
];

// Functie om evenementen dynamisch toe te voegen
function displayEvents(events) {
    const eventList = document.querySelector('.event-list');

    // Wis de bestaande inhoud om duplicaten te voorkomen
    eventList.innerHTML = '';

    events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.classList.add('event-item');
        if (event.archived) eventItem.classList.add('archived');

        eventItem.innerHTML = `
            <h2>${event.title}</h2>
            <p><strong>Datum:</strong> ${event.date}</p>
            <p><strong>Tijd:</strong> ${event.time}</p>
            <p><strong>Locatie:</strong> ${event.location}</p>
            ${event.ticketLink ? `<a href="${event.ticketLink}" class="ticket-link">Koop Tickets</a>` : ''}
            ${event.archived ? `<p><strong>Review:</strong> ${event.review}</p>` : ''}
        `;

        eventList.appendChild(eventItem);
    });
}


// Evenementen weergeven bij het laden van de pagina
document.addEventListener('DOMContentLoaded', () => {
    displayEvents(events);
});



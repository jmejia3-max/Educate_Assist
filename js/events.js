const ticketmasterKey = "";

async function getEvents() {
  const url = `https://app.ticketmaster.com/discovery/v2/events.json?city=Chicago&apikey=${ticketmasterKey}`;

  const response = await fetch(url);
  const data = await response.json();

  const container = document.getElementById("eventsContainer");
  container.innerHTML = "";

  const events = data._embedded.events.slice(0, 6);

  events.forEach(event => {
    container.innerHTML += `
      <div class="col-md-4">
        <div class="card p-3 shadow-sm">
          <h4>${event.name}</h4>
          <p>${event.dates.start.localDate}</p>
          <p>${event._embedded.venues[0].name}</p>
        </div>
      </div>
    `;
  });
}
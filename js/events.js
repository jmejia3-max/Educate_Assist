const ticketmasterKey = "uAertibB1PeOiAiooif6lZbDxCq1Q9RS";

async function getEvents() {
  const container = document.getElementById("eventsContainer");
  container.innerHTML = "<p class='text-center'>Loading events...</p>";

  try {
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?city=Chicago&size=6&apikey=${ticketmasterKey}`;

    const response = await fetch(url);
    const data = await response.json();

    container.innerHTML = "";

    if (!data._embedded || !data._embedded.events) {
      container.innerHTML = "<p>No events found.</p>";
      return;
    }

    data._embedded.events.forEach(event => {
      const venue = event._embedded?.venues?.[0]?.name || "Location unavailable";
      const date = event.dates?.start?.localDate || "Date unavailable";

      container.innerHTML += `
        <div class="col-md-4">
          <div class="card shadow-sm p-3 h-100">
            <h4>${event.name}</h4>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Venue:</strong> ${venue}</p>
            <a href="${event.url}" target="_blank" class="btn btn-outline-primary">View Details</a>
          </div>
        </div>
      `;
    });
  } catch (error) {
    container.innerHTML = "<p>Failed to load events.</p>";
    console.error(error);
  }
}
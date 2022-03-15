const routeChange = (e) => {
  location.href = "./events/#" + e.dataset.path;
};

const load = async () => {
  let res = await fetch(
    "https://raw.githubusercontent.com/pccoeacm/data-store/main/anantya22_events.json"
  );
  let data = await res.json();

  $("#events-container").html("");
  let delay = data.forEach((event) => {
    $(".events-container").append(`
    <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
      <div class="card event-card m-3" style="width:23rem" data-path=${event.eventName
        .split(" ")
        .join("_")} onclick="routeChange(this)">
        <div class="card-body">
          <div class="d-flex align-items-center card-head">
            <img src="${
              event.icon
            }" alt="logo" class="event-card-icon"loading="lazy"/>
            <h5 class="event-title">${event.eventName}</h5>
          </div>
          <div class="prizes m-2">
            <h4>
            <span class="total-prizes" style="font-size:1.5rem"> &#8377;${
              event.totalPrizes
            } </span>
            </h4>
          </div>
          <div class="py-3 event-details">
            <p class="card-text">${event.description}</p>
          </div>
        </div>
      </div>
    </div>
    `);
  });
};

load();

//Scroll Up

function scrollUp() {
  const scrollUp = document.getElementById("scrolltoTop");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 350) scrollUp.style.visibility = "visible";
  else scrollUp.style.visibility = "hidden";
}
window.addEventListener("scroll", scrollUp);

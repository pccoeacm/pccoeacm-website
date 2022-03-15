const loadEvent = async () => {
  let res = await fetch(
    "https://raw.githubusercontent.com/pccoeacm/data-store/main/anantya22_events.json"
  );
  let data = await res.json();
  var eName = window.location.href.split("#")[1].split("_").join(" ");
  let event = data.filter((el) => el.eventName == eName)[0];

  $("#poster-img").attr("src", event.poster);
  $("#event-name").text(event.eventName);
  $("#eCell").text(event.cellName);
  $("#eDescription").text(event.description);
  $("#evfees").text(`Rs. ${event.entryFees.nonCesa}`);
  //   $("#evfees").text(`Rs.${event.entryFees.cesa}`);

  event.facultyHead.map((e) => {
    $("#efaculty-head").append(`<li>${e}</li>`);
  });

  event.prizes.map((e, index) => {
    $("#prizesdiv").append(`<li class="prize-list">${index + 1}. Rs.${e}</li>`);
  });

  event.eventHeads.map((e) => {
    $("#ecoordinators").append(`<li>${e.name} : ${e.phoneNumber}</li>`);
  });

  event.rules.map((e) => {
    $("#erules-value").append(`<li>${e}</li>`);
  });

  if (eName == "Perplexo") {
    console.log("Welcome to Perplexo! ");

    $(".event-box").append(
      `<audio  autoplay>
      <source src="./../assets/glitch.mp3" type="audio/ogg">
    </audio>`
    );
    setTimeout(() => {
      $("#evFees").addClass("glitch");
      $("#event-name").addClass("glitch");
      $("#eDescription").addClass("glitch");
      $("#efaculty-head").addClass("glitch");
      $("#ecoordinators").addClass("glitch");
      $(".prize-list").addClass("glitch");

      setTimeout(() => {
        $("#evFees").removeClass("glitch");
        $("#eDescription").removeClass("glitch");
        $("#ecoordinators").removeClass("glitch");
        $("#event-name").removeClass("glitch");
        $(".erules").empty();
        $(".erules").text("NA");
        $("#efaculty-head").removeClass("glitch");
        $(".prize-list").removeClass("glitch");
        $("#prizesdiv").empty();
        $("#prizesdiv").append(`<li>1. NA</li>`);
        $("#prizesdiv").append(`<li>2. NA</li>`);
        $("#prizesdiv").append(`<li>3. NA</li>`);
        $("#eventPosterImg").attr("src", event.poster);
        $("#eDescription").text("Inspect things clearly. We are watching you!");
        $("#evfees").text(`NA`);
        $("#efaculty-head").text(`NA`);
        $("#evfees").text(`NA`);
        $("#ecoordinators").text("NA");
        $(".prizediv").empty();
        $("#audio").empty();
        $("#poster").empty();
        $("#poster").html(
          `<iframe class="vid-perp" src="https://www.youtube.com/embed/vUiW4MH1RPc?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow='autoplay'></iframe>`
        );
      }, 3000);
    }, 3000);
  }
};

loadEvent();

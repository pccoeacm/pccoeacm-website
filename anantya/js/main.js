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
    console.log(
      `%cGreeting Contestant\nYou have found extra points link please proceed further 🦸‍♂️`,
      "color:#1c08fe;font-family:system-ui;font-size:1rem;font-weight:bold"
    );
    console.log("Welcome to");

    console.log(
      `%c${event.eventName}`,
      "color:#fc00ff;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
    );

    console.log(`%c${event.description}`, "line-height:3");
    console.log("Prizes 💸 :%c" + event.prizes.join(","), "color:#fc00ff");
    console.log("Registration link:- " + "https://forms.gle/JgLXQyEyQXkjpiSu5");

    console.log("Event Heads");
    console.table(event.eventHeads);

    console.log("Fees 💰: %c" + event.entryFees.nonCesa, "color:#fc00ff");

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
        $("#erules-value").empty();
        $("#erules-value").append(`<li>NA</li>`);
        $("#efaculty-head").removeClass("glitch");
        $(".prize-list").removeClass("glitch");
        $("#prizesdiv").empty();
        $("#prizesdiv").append(`<li>1. 2000</li>`);
        $("#prizesdiv").append(`<li>2. 1500</li>`);
        $("#prizesdiv").append(`<li>3. 800</li>`);
        $("#eventPosterImg").attr("src", event.poster);
        $("#eDescription").html(
          `Is this really an error?<br>Why don't you Ctrl+Shift+J<br><span style="color:#fff00ad"><b>We are Perplexo. We choose the best!</b></span>`
        );
        $("#evfees").text(`80`);
        $("#efaculty-head").text(`NA`);
        $("#ecoordinators").text("NA");
        $(".prizediv").empty();
        $("#audio").empty();
        $("#poster").empty();
        $("#poster").html(
          `<iframe class="vid-perp" src="https://www.youtube.com/embed/mdrWfBpWGFw?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow='autoplay'></iframe>`
        );
      }, 3000);
    }, 3000);
  }

  if (eName == "IPL AUCTION") {
    // $(".button_sliding_bg").css({ cursor: "not-allowed", background: "gray" });

    $(".button_sliding_bg-2").text("Registrations Closed!");
    $(".btn-reg-5").removeClass("button_sliding_bg-2");
    $(".btn-reg-5").addClass("button_sliding_bg-ipl");
    $(".register-button").removeAttr("href");
  }
  if (eName == "Table Tennis") {
    // $(".button_sliding_bg").css({ cursor: "not-allowed", background: "gray" });

    $(".button_sliding_bg-2").text("Registrations Closed!");
    $(".btn-reg-5").removeClass("button_sliding_bg-2");
    $(".btn-reg-5").addClass("button_sliding_bg-ipl");
    $(".register-button").removeAttr("href");
  }
  if (eName == "Chess Tournamate") {
    // $(".button_sliding_bg").css({ cursor: "not-allowed", background: "gray" });

    $(".button_sliding_bg-2").text("Registrations Closed!");
    $(".btn-reg-5").removeClass("button_sliding_bg-2");
    $(".btn-reg-5").addClass("button_sliding_bg-ipl");
    $(".register-button").removeAttr("href");
  }
  if (eName == "BGMI") {
    // $(".button_sliding_bg").css({ cursor: "not-allowed", background: "gray" });

    $(".button_sliding_bg-2").text("Registrations Closed!");
    $(".btn-reg-5").removeClass("button_sliding_bg-2");
    $(".btn-reg-5").addClass("button_sliding_bg-ipl");
    $(".register-button").removeAttr("href");
  }
};

loadEvent();

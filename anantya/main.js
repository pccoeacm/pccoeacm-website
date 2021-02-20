let f = true;
let introDone = localStorage.getItem("introDone");

if (introDone) {
    $(".overlay").fadeOut()
    $(".container").fadeIn()
    introDone = false
}


window.addEventListener("click", () => {

    if (!introDone) {
        $("#audio")[0].play()
        introDone = true;
        localStorage.setItem("introDone", true)
        $("#audio")[0].volume = 0.2
        setTimeout(() => {
            $("#audio")[0].volume = 0.1
        }, 5000);
    }
    $(".overlay").fadeOut()
    $(".container").fadeIn()

    $("#click")[0].play()

    // window.removeEventListener("click")

})

async function beep(e) {
    await $("#beep")[0].play()

}

function routeChange(e) {
    //console.log(e.dataset.route)
    $("#beep")[0].play()
    setTimeout(() => {
        location.href = "/events/#" + e.dataset.route

    }, 1000);
}



async function load() {

    let res = await fetch("https://raw.githubusercontent.com/pccoeacm/data-store/main/events.json");
    let data = await res.json()

    //console.log(data)
    $("#cards").html("")
    data.forEach(el => {
        $(".cards").append(`
     <div class="card" data-route=${el.eventName.split(" ").join("_")} onclick="routeChange(this)">
                    <div class="card-title">${el.eventName}</div>
                    <div class="card-body">
                    ${el.description.substr(0, 100)}...
                    </div>
                </div>
        

        `)
    });
}

load()

function changeImg() {
    if (f) {
        $("#logo").attr("src", "./assets/logo.png")
        $("#logo").attr("height", "205px")
        f = false
    }
    else {

        $("#logo").attr("src", "./assets/8bit-anantya21 (1).png")
        $("#logo").attr("height", "200px")
        f = true
    }

}




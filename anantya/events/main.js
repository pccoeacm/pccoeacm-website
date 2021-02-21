$("#users").html("loading...")

const eName = location.href.split("#")[1]

async function load() {

    let res = await fetch("https://raw.githubusercontent.com/pccoeacm/data-store/main/events.json");
    let data = await res.json()
    let event = data.filter(el => el.eventName == eName.split("_").join(" "))[0]

    if (event.eventName == "Perplexo") {
        $("#e-name").text("Perplexo")
        $("#e-tagLine").text("NA")
        $("#e-cellName").text("Anonymous")
        $("#e-desc").text("NA")
        $("#e-fees").text("NA")
        $("#e-faculty").text("NA")

        $("#e-poster").attr("src", event.poster);

        $("#e-prizes").append("NA")


        $("#e-co-ordinators").append("NA")


        $("#e-rules").append("NA")

        $("#btn-normal").hide()


        console.log(`%cGreeting Contestant\nYou have found extra points link please proceed further 🦸‍♂️`,
            "color:red;font-family:system-ui;font-size:1rem;font-weight:bold")
        console.log(`%c${event.eventName}`,
            "color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold")

        console.log(`%c${event.description}`, "line-height:3")

        console.log("Fees 💰: %c" + event.entryFees.nonCesa, "color:red")
        console.log("Event Heads")
        console.table(event.eventHeads)

        console.log("Prizes 💸 :%c" + event.prizes.join(","), "color:red")

        console.log("You are among the very few that will start on the Perplexo Leaderboard with extra points.\nVerify here: https://forms.gle/dLeFm6JpojVF7iWd6")

    }
    else {
        $("#btn-perplexo").hide()
        $("#e-name").text(event.eventName)
        $("#e-tagLine").text(event.tagLine)
        $("#e-cellName").text(event.cellName)
        $("#e-desc").text(event.description)
        $("#e-fees").text(`Rs. ${event.entryFees?.nonCesa}`)
        $("#e-faculty").text(` ${event.facultyHead}`)

        $("#e-poster").attr("src", event.poster);

        event.prizes.map(e => {
            $("#e-prizes").append(`<li>Rs. ${e}</li>`)
        })

        event.eventHeads.map(e => {

            $("#e-co-ordinators").append(`<li>${e.name} : ${e.phoneNumber} </li>`)
        })

        event.rules.map(e => {
            $("#e-rules").append(`<li>${e} </li>`)
        })
    }



    //console.log(event)


}
function nope() {
    $("#nope")[0].play()
}

load()




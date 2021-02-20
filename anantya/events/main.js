// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => //console.log(json))

$("#users").html("loading...")

const eName = location.href.split("#")[1]

async function load() {

    let res = await fetch("https://raw.githubusercontent.com/pccoeacm/data-store/main/events.json");
    let data = await res.json()
    let event = data.filter(el => el.eventName == eName.split("_").join(" "))[0]

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

    //console.log(event)


}

load()




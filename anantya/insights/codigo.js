async function load() {
    let data = await fetch("https://www.hackerrank.com/rest/contests/codigo21-round-1/leaderboard?offset=0&limit=100")
    data = await data.json()
    $("#board").html("")
    data.models.forEach(e => {
        $("#board").append(`<li>${e.rank}. ${e.hacker} : ${e.score}</li>`)
    });
}

load()
setInterval(() => {
    load()
}, 10000);

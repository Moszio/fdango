// Your code here
const movieTitle = document.querySelector(`#title`)
const movieRuntime = document.querySelector(`#runtime`)
const movieShowtime = document.querySelector(`#showtime`)
const moviePoster = document.querySelector(`#poster`)
const movieDescription = document.querySelector(`#film-info`)
const movieSideMenu = document.querySelector(`#films`)
const movieTickets = document.querySelector(`#ticket-num`)
const buyTicketBtn = document.querySelector(`#buy-ticket`)
let remainingTicket = 3



buyTicketBtn.addEventListener(`click`, () => {
    if(remainingTicket > 0){
    remainingTicket--
    movieTickets.textContent = remainingTicket

    console.log(remainingTicket)
    }
})




const request = async () => {
    let req = await fetch(`http://localhost:3000/films/1`)
    let res = await req.json()
    console.log(`res`, res)

    movieTitle.textContent = res.title
    movieRuntime.textContent = res.runtime
    movieShowtime.textContent = res.showtime
    movieDescription.textContent = res.description
    moviePoster.src = res.poster
    movieTickets.textContent = remainingTicket

}


const request2 = async () => {
    let req = await fetch(`http://localhost:3000/films`)
    let res = await req.json()
    console.log(`res`, res)

    movieSideMenu.innerHTML = ``
    res.forEach((film) => {
        let li = document.createElement(`li`)
        li.textContent = film.title
        movieSideMenu.append(li)
    })
}






request2()
request()
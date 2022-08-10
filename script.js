const yearEl = document.querySelector('.year')
const hours = document.getElementById('hour')
const days = document.getElementById('day')
const minutes = document.getElementById('minute')
const seconds = document.getElementById('second')

const nextYear = new Date().getFullYear() + 1
yearEl.innerText = nextYear
const newYear = new Date(`Jan 1, ${nextYear} 00:00:00`).getTime()

updateCountdown()

function updateCountdown(){
    const now = new Date().getTime()
    const gap = newYear - now
    
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const d = Math.floor(gap/day)
    const h = Math.floor((gap % day)/hour)
    const m = Math.floor((gap % hour)/minute)
    const s = Math.floor((gap % minute)/second)

    days.innerText = d
    hours.innerText = h
    minutes.innerText = m
    seconds.innerText = s
    setTimeout(updateCountdown, 1000)
}
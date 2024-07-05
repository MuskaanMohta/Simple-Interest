let button = document.getElementById("button")
let result = document.getElementById("result")
let calculate = () => {
    let p = Number(document.getElementById("principal").value)
    let r = Number(document.getElementById("rate").value)
    let t = Number(document.getElementById("time").value)
    let duration = document.getElementById("duration").value
    
    console.log(p,r,t,duration)

    let SI = duration == "year" ? (p*r*t)/100 : (p*r*t)/1200
    let amt = p + SI

    result.innerHTML = `<div>Principal Amount:<span>₹${p.toFixed(2)}</span></div>
    <div>Total Interest:<span>₹${SI.toFixed(2)}</span></div>
    <div>Total Amount:<span>₹${amt.toFixed(2)}</span></div>`
}
button.addEventListener("click",calculate)
window.addEventListener("load",calculate)
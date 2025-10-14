const lighter = document.querySelector(".lighter");

const colors = ["white", "blue", "red"]
const colorsDom = colors.map((color) => {
    const currentColor = document.createElement("div")
    currentColor.classList.add("circle")
    if (color == "white") {
        currentColor.classList.add("white")
    }
    lighter.appendChild(currentColor)
    return (currentColor)
})



console.log(colorsDom)



const btn = document.createElement("button");
btn.classList.add("switch")
btn.innerText = "Переключить";
lighter.appendChild(btn);
let colorIndex = 0;
console.log(colors[colorIndex])

let interval

function settingInterval() {
    console.log(colorIndex)
    colorsDom[colorIndex].classList.remove(colors[colorIndex])
    colorIndex = (colorIndex + 1);
    if (colorIndex === colors.length) {
        colorIndex = 0
    }
    colorsDom[colorIndex].classList.add(colors[colorIndex])
}

btn.addEventListener("click", () => {
    if (interval) {
        clearInterval(interval)
    }
    
    interval = setInterval(() => settingInterval(), 1000)
    
    
})
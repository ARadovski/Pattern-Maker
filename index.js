// Make the pop and shift buttons work as well
const myEmojis = []
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

const caleidoscope = document.createElement('style')
let emojiString = ""


function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
        emojiString += `${myEmojis[i]}`
    }
}

renderEmojis()

pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
    // caleidoscope.innerHTML = `
    
    document.head.innerHTML += `
        <style>
            body {
                background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' height='10px' width='100%25'%3e%3ctext id='emojis' x='0px' y='10px' fill='black' font-size='100'%3e%3canimate attributeName='y' values='0px; 70px; 0px' dur='10s' repeatCount='indefinite'/%3e ${emojiString} %3c/text%3e%3c/svg%3e");
                }
        </style>
            
    `
    // document.body.style["background-color"] = red
})

unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

popBtn.addEventListener("click", function() {
    myEmojis.pop()
    renderEmojis()
})

shiftBtn.addEventListener("click", function() {
    myEmojis.shift()
    renderEmojis()
})
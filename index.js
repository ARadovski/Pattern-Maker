
const myEmojis = []
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

document.querySelector('emoji-picker').addEventListener('emoji-click', event => {
    console.log(event.detail.unicode)
    emojiInput.value += event.detail.unicode  
});

function renderEmojis() {
    let emojiString = ""
    emojiContainer.innerHTML = ""

    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
        emojiString += `${myEmojis[i]}`
    }

    document.head.innerHTML += `
        <style>
            .container {
                background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' height='10px' width='100%25'%3e%3ctext id='emojis' x='0px' y='10px' fill='black' font-size='100'%3e%3canimate attributeName='y' values='0px; 70px; 0px' dur='10s' repeatCount='indefinite'/%3e ${emojiString} %3c/text%3e%3c/svg%3e");
                }
        </style>           
    `
}

pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }s
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

// Emoji picker

const pickerStyle = document.createElement('style');
style.textContent = `
    :root {
        border-radius: 20px;
    }`
picker.shadowRoot.appendChild(style);

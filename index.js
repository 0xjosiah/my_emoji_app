const myEmojis = ['🎮','⛷️','🚵‍♂️']
const emojiContainer = document.getElementById('emojiContainer')
const emojiInput = document.getElementById('emoji-input')
const pushBtn = document.getElementById('push-btn')
const unshiftBtn = document.getElementById('unshift-btn')
const shiftBtn = document.getElementById('shift-btn')
const popBtn = document.getElementById('pop-btn')

document.body.onload = renderEmojis

function renderEmojis() {
    emojiContainer.innerHTML = ''
    for (let i = 0; i < myEmojis.length; i++) {
        const newSpan = document.createElement("span")
        newSpan.textContent = myEmojis[i]
        emojiContainer.append(newSpan)
    }
}

function changeEmojis(action) {
    if (action === 'shift' || action === 'pop') {
        myEmojis[action]()
        renderEmojis()
    } else if (emojiInput.value){
        myEmojis[action](emojiInput.value)
        renderEmojis()
        emojiInput.value = ''
    }
}

pushBtn.addEventListener('click', function() {
    changeEmojis('push')
})

unshiftBtn.addEventListener('click', function() {
    changeEmojis('unshift')
})

shiftBtn.addEventListener('click', function () {
    changeEmojis('shift')
})

popBtn.addEventListener('click', function() {
    changeEmojis('pop')
})
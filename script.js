const share = document.querySelector("#share");
const popupElement = document.querySelector("#popup")

function popup() {
    
    if (popupElement.style.display === 'flex') {
        popupElement.style.display = 'none';
        document.querySelector("path").style.fill = 'hsl(217, 19%, 35%)';
        share.style.backgroundColor = 'hsl(210, 46%, 95%)';
    } else {
        popupElement.style.display = 'flex';
        document.querySelector("path").style.fill = 'hsl(210, 46%, 95%)';
        share.style.backgroundColor = 'hsl(214, 17%, 51%)';
    }
}

document.addEventListener('click', (event) => {
    if (event.target === share) {
        popup()
    } else {
        document.querySelector('#popup').style.display = 'none'
        document.querySelector("path").style.fill = 'hsl(217, 19%, 35%)';
        share.style.backgroundColor = 'hsl(210, 46%, 95%)';
    }
})
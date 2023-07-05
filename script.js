const share = document.querySelector("#share");

function popup() {
    
    if (document.querySelector("#popup").style.display === 'flex') {
        document.querySelector("#popup").style.display = 'none';
        document.querySelector("path").style.fill = 'hsl(217, 19%, 35%)';
        share.style.backgroundColor = 'hsl(210, 46%, 95%)';
    } else {
        document.querySelector("#popup").style.display = 'flex';
        document.querySelector("path").style.fill = 'hsl(210, 46%, 95%)';
        share.style.backgroundColor = 'hsl(214, 17%, 51%)';
    }
}

share.onclick = popup;

//Looping through the image gallery

function prepareGallery() {
    const gallery = document.getElementById("imageGallery");
    const links = gallery.getElementsByTagName("a");
    for (let i=0; i < links.length; i++) {
        links[i].onclick = function() {
            showPic(this);
            return false;
        }
    }
}


//Replacing placeholder image and description with pictures and titles from the image gallery

function showPic(whichpic) {
    let source = whichpic.getAttribute("href");
    let placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    let text = whichpic.getAttribute("title");
    let description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}


document.addEventListener("DOMContentLoaded", prepareGallery)
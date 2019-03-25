/*function countBodyChildren() {
    let body_element = document.getElementsByTagName("body")[0];
    alert(body_element.nodeType);
}*/

//window.onload = countBodyChildren;
//alert (description.firstChild.nodeValue);

//the following function is good when the script starts to become more complex and more and more functions are added
/*const addLoadEvent = func => {
    let oldonload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func()
        }
    }
}*/




const showPic = whichpic => {
    let source = whichpic.getAttribute("href");
    let placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    let text = whichpic.getAttribute("title");
    let description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}

const prepareGallery = () => {
    if (!document.getElementsByTagName) {
        return false;
    }
    if (!document.getElementById) {
        return false;
    }
    if (!document.getElementById("imageGallery")) {
        return false;
    }
    const gallery = document.getElementById("imageGallery");
    const links = gallery.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            showpic(this);
            return false;
        }
    }
}


let link = window.location.href
let position = link.indexOf("?")
let link2 = link.substring(position + 1)
let cuStrings = decodeURIComponent(link2).split("&")
for ( let i = 0; i < cuStrings.length; i++) {
    let rezult = cuStrings[i].replace("=", ": " ) + "<br/>";
 document.write(rezult); 
}

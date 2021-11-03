//remove main
let main = document.getElementById("main");
main.remove();



//add newHeader with h1 element
const newHeader = document.createElement("h1");
document.body.append(newHeader);
console.log(newHeader.nodeName);
newHeader.nodeName = "victory";
console.log(newHeader.nodeName);
newHeader.id = "victory";
newHeader.innerHTML = "YOUR NAME is the champion."
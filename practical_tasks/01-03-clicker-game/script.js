let counter = 0;
function clicker() {

    counter++;

    let counterLine = document.getElementById("result");
    counterLine.textContent = `${counter} clicks so far`;
}


setTimeout(function () {
    alert(`During 10 seconds you clicked ${counter} times`)
}, 10000);


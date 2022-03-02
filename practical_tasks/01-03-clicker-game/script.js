let counter = 0;

function clicker() {

    counter++;
    if (counter === 1) {//timer start on first click!

        const gameTime = setTimeout(game, 7000);
        function game() {
            alert(`During 7 seconds you clicked ${counter} times`);
            counter = 0;
            counterLine.textContent = "Here you will see your result";
        }
    }

    let counterLine = document.getElementById("result");
    counterLine.textContent = `${counter} clicks so far`;
}


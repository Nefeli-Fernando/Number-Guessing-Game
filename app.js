
let randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);
//title.innerText = "The Answer is - " + randomNumber + "!";

function submitInputOnAction() {
    let txtAnswer = document.getElementById("txtAnswer");
    let title = document.getElementById("title");

    let userAnswer = Number(txtAnswer.value);

    if (userAnswer === randomNumber) {
        Swal.fire({
            title: "You guessed it right!",
            icon: "success",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url('https://media.giphy.com/media/lgcUUCXgC8mEo/giphy.gif') center/cover no-repeat",
            backdrop: `
                rgba(0,0,123,0.4)
                url("https://media.giphy.com/media/lgcUUCXgC8mEo/giphy.gif")
                center
                no-repeat
            `
        });
    } else {
        if(randomNumber > userAnswer) {
            Swal.fire({
                title: "You guessed it wrong! Try again",
                text: "The Answer is - " + randomNumber + "!",
                icon: "error",
                width: 600,
            padding: "3em",
            color: "#111022",
            background: "#fff url('https://media.giphy.com/media/lgcUUCXgC8mEo/giphy.gif') center/cover no-repeat",
            backdrop: `
                rgba(0,0,123,0.4)
                url("https://media.giphy.com/media/lgcUUCXgC8mEo/giphy.gif")
                center
                no-repeat
            `
        });
    }
    }}
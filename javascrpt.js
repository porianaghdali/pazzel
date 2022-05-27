
document.getElementById("num").value = ("");

let button = document.querySelector(".submit");
button.addEventListener("click", createDiv);
let containerRow = document.querySelector(".row");






function createDiv() {
    document.querySelector(".row").innerHTML = "<span>";


    let q = document.getElementById("num").value;
    if (q == "" || q == NaN) {
        alert("enter a number")
    }
    else {
        let input = Number(q);




        var max = input;
        var random = [];
        var i;


        for (var i = 0; i < max; i++) {
            var temp = Math.ceil(Math.random() * max);
            if (random.indexOf(temp) == -1) {
                random.push(temp);
            }
            else i--;
        }


        for (i = 0; i < max; i++) {
            let div = document.createElement("div");
            let p = document.createElement("p");
            p.className = "pin"
            div.appendChild(p);
            div.className = "dive ";
            let div16 = document.createElement("div");
            div16.className = "dive  d-invisible";
            let x = random[i];


            if (x != max) {


                p.innerText = x;
                containerRow.appendChild(div);
            }
            else {
                div.innerText = ("yes");
                containerRow.appendChild(div16);
            }
        }
    } document.getElementById("num").value = ("");
}
const el = document.getElementById("goBtn");
el.addEventListener("click", ev => {
    const inp = document.getElementById("numInput");
    //inputList(inp);
    const len = Number(inp.value);
    randomUser(len);
});

function inputList(inp) {
    let ol = document.querySelector("#list");
    clearList(ol);

    for (i = 0; i < inp.value; i++) {
        ol.appendChild(
            document.createElement("li")
                .appendChild(document.createTextNode("Item #" + (i + 1))));
    }
}

function clearList(list) {
    let victims = document.querySelectorAll("li");
    console.log(victims.length);
    for (x of victims) {
        console.log(x.value);
        list.removeChild(x);
    }
}

function randomUser(len) {
    fetch(`https://randomuser.me/api?results=${len}`)
        .then((r) => r.json())
        .then((d) => {

            console.log("Got some data", d);
            let ol = document.querySelector("#list");

            /* d.results.forEach(results => {
                 ol.appendChild(
                     document.createElement("li")
                     .appendChild(document.createTextNode(
                         results.name.first + ' ' + results.name.first)));
             }); */

            let table = document.getElementById("table");
            let i = 0;
            d.results.forEach(client => {
                let row = table.insertRow(i++);
                if (i == 1) {
                    cell = row.insertCell(0)
                    cell.appendChild(document.createTextNode("Name"));
                    cell.classList.add("one");
                    cell = row.insertCell(1)
                    cell.appendChild(document.createTextNode("Cell Phone"));
                    cell.classList.add("two");
                    cell = row.insertCell(2)
                    cell.appendChild(document.createTextNode("DOB"));
                    cell.classList.add("three");
                    cell = row.insertCell(3)
                    cell.appendChild(document.createTextNode("Thumbnail"));
                    cell.classList.add("four");
                    cell = row.insertCell(4)
                    cell.appendChild(document.createTextNode("Flag"));
                    cell.classList.add("five");

                    row.classList.add("odd");
                    row = table.insertRow(i++);
                }
                for (let c = 0; c < 5; c++) {
                    if (i % 2 != 0) {
                        row.classList.add("odd");
                    } else {
                        row.classList.add("even");
                    }
                    if (c == 0) {
                        let cell = row.insertCell(c);
                        cell.appendChild(document.createTextNode(
                            client.name.first + ' ' + client.name.last));
                        cell.classList.add("one");
                    }
                    if (c == 1) {
                        let cell = row.insertCell(c);
                        cell.appendChild(document.createTextNode(
                            client.cell));
                        cell.classList.add("two");
                    }
                    if (c == 2) {
                        let cell = row.insertCell(c);
                        cell.appendChild(document.createTextNode(
                            client.dob.date.substring(0, 10)));
                        cell.classList.add("three");
                    }
                    if (c == 3) {
                        let cell = row.insertCell(c);
                        let srcImg = client.picture.thumbnail;
                        let pic = document.createElement("img");
                        pic.setAttribute("src", srcImg);
                        cell.appendChild(pic);
                        cell.classList.add("four");
                    }
                    if (c == 4) {
                        let flag = document.createElement("img");
                        let nationality = client.nat;
                        flag.setAttribute("src", "https://www.countryflags.io/" + nationality + "/flat/64.png");
                        let cell = row.insertCell(c);
                        cell.appendChild(flag)
                        cell.classList.add("five");
                    }
                }
            });
        });
}

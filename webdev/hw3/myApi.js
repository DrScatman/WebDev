const el = document.getElementById("goBtn");
el.addEventListener("click", ev => {
    const inp = document.getElementById("numInput");
    const key = String(document.getElementById("keyInput").value);
    const len = Number(inp.value);
    let key1 = key.split("|")[0];
    let key2 = key.split("|")[1];
    getRunningClients(key1, key2, len);
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

function getRunningClients(key1, key2, len) {
    let h1 = new Headers();
    h1.append('ApiClient', key1)
    let h2 = new Headers();
    h2.append('ApiClient', key2)
    let url = 'https://services.rspeer.org/api/botLauncher/connectedClients';

    fetch(url, { headers: h1 })
        .then((r) => r.json())
        .then((d) => {
            fetch(url, { headers: h2 })
                .then((r) => r.json())
                .then((d2) => {
                    d = d.concat(d2);
                    while (d.length > len) {
                        d.pop();
                    }

                    createTable(d);
                });
        });
}

function createTable(d) {
    let table = document.getElementById("table");
    let i = 0;
    d.forEach(client => {
        let row = table.insertRow(i++);
        if (i == 1 && table.children.length == 1) {
            cell = row.insertCell(0)
            cell.appendChild(document.createTextNode("Last Update"));
            cell.classList.add("one");
            cell = row.insertCell(1)
            cell.appendChild(document.createTextNode("Proxy IP"));
            cell.classList.add("two");
            cell = row.insertCell(2)
            cell.appendChild(document.createTextNode("Machine Name"));
            cell.classList.add("three");
            cell = row.insertCell(3)
            cell.appendChild(document.createTextNode("Script Name"));
            cell.classList.add("four");
            cell = row.insertCell(4)
            cell.appendChild(document.createTextNode("OSRS Email"));
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
                    client.lastUpdate.substring(11, 16)));
                cell.classList.add("one");
            }
            if (c == 1) {
                let cell = row.insertCell(c);
                cell.appendChild(document.createTextNode(
                    client.proxyIp));
                cell.classList.add("two");
            }
            if (c == 2) {
                let cell = row.insertCell(c);
                cell.appendChild(document.createTextNode(
                    client.machineName));
                cell.classList.add("three");
            }
            if (c == 3) {
                let cell = row.insertCell(c);
                cell.appendChild(document.createTextNode(
                    client.scriptName));
                cell.classList.add("four");
            }
            if (c == 4) {
                let cell = row.insertCell(c);
                cell.appendChild(document.createTextNode(
                    client.runescapeEmail));
                cell.classList.add("five");
            }
        }
    });
}


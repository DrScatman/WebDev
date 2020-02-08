// Sample Code for #part0
let zero = document.querySelector("#part00");
let hello = document.createTextNode("Hello world!");
zero.appendChild(hello);
/*--- begin answer part00 ---*/
let myname = "Jacob Miller";
/*--- end answer part00 ---*/
if (typeof myname !== "undefined") {
  let textBefore = document.createTextNode("My name is ");
  zero.appendChild(textBefore);
  let boldNode = document.createElement("b");
  let name = document.createTextNode(myname);
  zero.appendChild(boldNode);
  boldNode.appendChild(name);
  let textAfter = document.createTextNode(". This work is solely mine! ");
  zero.appendChild(textAfter);

  zero.appendChild(
    document.createTextNode(
      "I understand that " +
        "copying someone else's code and claiming to be my own work " +
        "or sharing my code with someone else is a "
    )
  );
  let honesty = document.createElement("b");
  honesty.appendChild(document.createTextNode("violation"));
  zero.appendChild(honesty);
  zero.appendChild(document.createTextNode(" of academic honesty."));
}

// Code for part 1
let atoms = [
  "Aluminum",
  "Barium",
  "Carbon",
  "Dubnium",
  "Erbium",
  "Fluor",
  "Gallium",
  "Hydrogen",
  "Helium",
  "Iron",
  "Krypton",
  "Lithium",
  "Magnesium",
  "Nitrogen",
  "Oxygen",
  "Palladium",
  "Radon",
  "Silicon",
  "Titanium",
  "Uranium",
  "Vanadium",
  "Xenon",
  "Zinc"
];

let N = atoms.length;
for (let k = 0; k < 50; k++) {
  const pos1 = Math.floor(Math.random() * N);
  const pos2 = Math.floor(Math.random() * N);
  let tmp = atoms[pos1];
  atoms[pos1] = atoms[pos2];
  atoms[pos2] = tmp;
}

/*--- begin answer part01 ---*/
let one = document.querySelector("#part01"); 


  let ol = document.createElement("ol");
  let liList;
atoms.forEach(a => {
  let li = document.createElement("li");
  let text = document.createTextNode(a);
  li.appendChild(text);
  ol.appendChild(li);
})
one.appendChild(ol);

/*--- end answer part01 ---*/

// Code for part 2
// Don't rename the following two variables!
/*--- begin answer part02 ---*/
const myDomesticTravel = { 
  destination : "Oceana, California",
  dateOfVisit : "March 2019",
  isAbroadd : false
};
const myInternationalTravel = {
  destination : "Exuma, Bahamas",
  dateOfVisit : "March 2020",
  isAbroadd : true
};

let two = document.querySelector("#part02"); 
let p1 = document.createElement("p");
let p2 = document.createElement("p");
p1.classList.add("domestic");
p2.classList.add("international");
let t1 = document.createTextNode(
  "I had fun this " + myDomesticTravel["dateOfVisit"] + 
  " spending time with family in " + myDomesticTravel["destination"]);
let t2 = document.createTextNode(
    "I had fun this " + myInternationalTravel["dateOfVisit"] + 
    " spending time with friends in " + myInternationalTravel["destination"]);

p1.appendChild(t1);
p2.appendChild(t2);
two.appendChild(p1);
two.appendChild(p2);

/*--- end answer part02 ---*/

// Code for part 3
let atomObjects = [
  { name: "Aluminum", weight: 26.982 },
  { name: "Barium", weight: 137.33 },
  { name: "Carbon", weight: 12.011 },
  { name: "Dubnium", weight: 268 },
  { name: "Erbium", weight: 167.26 },
  { name: "Fluor", weight: 18.988 },
  { name: "Gallium", weight: 69.723 },
  { name: "Hydrogen", weight: 1.008 },
  { name: "Helium", weight: 4.0026 },
  { name: "Iron", weight: 55.845 },
  { name: "Krypton", weight: 83.798 },
  { name: "Lithium", weight: 6.94 },
  { name: "Magnesium", weight: 24.305 },
  { name: "Nitrogen", weight: 14.007 },
  { name: "Oxygen", weight: 15.999 },
  { name: "Palladium", weight: 106.42 },
  { name: "Radon", weight: 222 },
  { name: "Silicon", weight: 28.085 },
  { name: "Titanium", weight: 47.867 },
  { name: "Uranium", weight: 238.03 },
  { name: "Vanadium", weight: 50.942 },
  { name: "Xenon", weight: 131.29 },
  { name: "Zinc", weight: 65.38 }
];
N = atomObjects.length;
for (let k = 0; k < 50; k++) {
  const pos1 = Math.floor(Math.random() * N);
  const pos2 = Math.floor(Math.random() * N);
  let tmp = atomObjects[pos1];
  atomObjects[pos1] = atomObjects[pos2];
  atomObjects[pos2] = tmp;
}

/*--- begin answer part03 ---*/
let three = document.querySelector("#part03");
let ol2 = document.createElement("ol");

atomObjects.forEach(atom => {
  let li = document.createElement("li");
  let weight = atom["weight"];
  let newWeight = weight.toFixed(1);
  let text = document.createTextNode(atom["name"] + " (weight: " + newWeight + ")");
  
  if (atom["weight"] > 150) {
    li.classList.add("heavy");
  } else {
    li.classList.add("light");
  }
  
  li.appendChild(text);
  ol2.appendChild(li);
});
three.appendChild(ol2);

/*--- end answer part03 ---*/

// Code for part 4
/*--- begin answer part04 ---*/
let four = document.querySelector("#part04");
let table = document.createElement("table");
let th1 = document.createElement("th");
let th2 = document.createElement("th");
let trH = document.createElement("tr");
let header1 = document.create

function tableCreate() {
  let four = document.querySelector("#part04");
  let tbl = document.createElement('table');
  tbl.style.width = '100%';
  tbl.setAttribute('border', '1');
  let tbdy = document.createElement('tbody');
  for (let i = 0; i < atomObjects.length; i++) {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let td2 = document.createElement('td');
    td.appendChild(document.createTextNode(atomObjects[i]["name"]));
    td2.appendChild(document.createTextNode(atomObjects[i]["weight"]));
    
    if (atomObjects[i]["weight"] > 150) {
      tr.classList.add("heavy");
    } else {
      tr.classList.add("light");
    }
    
    tr.appendChild(td);
    tr.appendChild(td2);
    tbdy.appendChild(tr);
  }

  let headerTd = document.createElement('td');
  let headerTd2 = document.createElement('td');
  headerTd.appendChild((document.createElement("th").appendChild(document.createTextNode("Atom"))));
  headerTd2.appendChild((document.createElement("th").appendChild(document.createTextNode("Weight"))));
  let headerRow = document.createElement('tr');
  headerRow.appendChild(headerTd);
  headerRow.appendChild(headerTd2);

  tbl.appendChild(headerRow);
  tbl.appendChild(tbdy);
  four.appendChild(tbl);
}
tableCreate();
/*--- end answer part04 ---*/

// Code for part 4
/*--- begin answer part04 ---*/
/*--- end answer part04 ---*/

// Code for part 5 (Extra credit)
/*--- begin answer part05 ---*/
/*--- end answer part05 ---*/

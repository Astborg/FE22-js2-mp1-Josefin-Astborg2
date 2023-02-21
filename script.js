


    const datorValDisplay = document.getElementById("datorn");
    const mittValDisplay = document.getElementById("mitt");
    const resultatDisplay = document.getElementById("resultat");
    const friaVal = document.querySelectorAll("button");
    const startaOmbtn = document.getElementById('button')
    const output = document.getElementById("output");
    const namnBtn = document.getElementById("namnBtn");
    const input = document.getElementById("input").value;

    let dScore = 0;
    let mScore = 0;
    let mittVal = "";
    let datorVal = "";
    let result = 0;
    
   
    async function highscoreList(obj) {
      try{
        const baseUrl ="https://highscorelist-84053-default-rtdb.europe-west1.firebasedatabase.app/";
        const url = baseUrl + "highscore.json";
        const response = await fetch(url);
        let data = await response.json(obj);
        let keysSorted = Object.keys(data).sort((a,b) =>a-b).reverse().slice(0,5)
        
        console.log(keysSorted)
        keysSorted.forEach((val) => {;
          const div2 = document.createElement("div");
          div2.innerHTML = `<div><strong>${val}</strong>`;
          document.body.appendChild(div2);
        });
    }catch(error){
        console.log(error)
    }
    }
    highscoreList()

namnBtn.addEventListener("click", (i) => {
  i.preventDefault();
  const input = document.getElementById("input").value;
  const div = document.getElementById("div");
  div.innerHTML = `Välkommen ${input}! Börja Spela!`;
});

function helaSpelet() {
  friaVal.forEach((frittVal) =>
    frittVal.addEventListener("click", (e) => {
      mittVal = e.target.id;
      mittValDisplay.innerHTML = mittVal;
      körDatorVal();
      resultat();
    })
  );
}
function körDatorVal() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    datorVal = "sten";
  }
  if (randomNumber === 2) {
    datorVal = "sax";
  }
  if (randomNumber === 3) {
    datorVal = "påse";
  }
  datorValDisplay.innerHTML = datorVal;
}

function resultat() {
  if (datorVal === mittVal) {
    result = "Det är jämt!";
    mScore += 1;
    dScore += 1;
  }
  if (datorVal === "sten" && mittVal === "påse") {
    result = "Du vann!";
    mScore += 1;
  }
  if (datorVal === "sten" && mittVal === "sax") {
    result = "Du förlora!";
    dScore += 1;
  }
  if (datorVal === "påse" && mittVal === "sax") {
    result = "Du vann!";
    mScore += 1;
  }
  if (datorVal === "påse" && mittVal === "sten") {
    result = "Du förlora!";
    dScore += 1;
  }
  if (datorVal === "sax" && mittVal === "sten") {
    result = "Du vann!";
    mScore += 1;
  }
  if (datorVal === "sax" && mittVal === "påse") {
    result = "Du förlora!";
    dScore += 1;
  }
  resultatDisplay.innerHTML = result;
  document.getElementById("d-poäng").innerText = dScore;
  document.getElementById("m-poäng").innerText = mScore;

 vemVann();
}

function vemVann() {
  if (dScore === 1) {
    document.getElementById("vunnit").innerText = "Datorn har vunnit! Starta om på knappen!";
   
    const baseUrl ="https://highscorelist-84053-default-rtdb.europe-west1.firebasedatabase.app/";
    const input = document.getElementById("input").value;
    async function saveScore(obj) {
    let playerid = `${mScore}`+`${input}`;
    const url = baseUrl + `highscore/${playerid}.json`;
  
      const init = {
        method: "PUT",
        body: JSON.stringify(obj),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      };
  
      const response = await fetch(url, init);
      const data = await response.json();
      console.log(data);
      Object.keys(data).sort((a,b) =>b-a)
   }
        

        let newScore = {
          namn: input,
          score: mScore 
        };
        saveScore(newScore);
    

let btn = document.createElement("button");
btn.appendChild(document.createTextNode("Starta om!"));
let page = document.getElementById("button");
page.appendChild(btn);

   }}

      

startaOmbtn.addEventListener('click',(i) => {


function startaOm() {
  window.parent.location = window.parent.location.href;

}
startaOm()
})
helaSpelet()



            
       
        
       



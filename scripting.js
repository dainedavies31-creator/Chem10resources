
document.addEventListener("DOMContentLoaded", init);

function init() {
  //runAnimation(document.querySelector('.contents'));
  initBoyle();
  initCharles();
  initAvogadro();
  initMoleConcept();
  initSTPVolume();
  let MMAC = new cardscroller(document.getElementById('molarMassAnimBox'));
};

/* =========================
   Global Fade Animation
========================= */
function runAnimation(divbox) {
    divbox.querySelectorAll('*').forEach((el, index) => {
    el.style.setProperty('--animdelay','${index}s')
  });
};


/* =========================
   Boyle's Law Demo
========================= */
function initBoyle() {
  const pressure = document.getElementById("pressure");
  const volumeValue = document.getElementById("volumeValue");
  const balloon = document.getElementById("balloon");

  if (!pressure || !balloon) return;

  pressure.addEventListener("input", () => {
    let P = pressure.value;
    let V = 200 / P;   // inverse relation

    volumeValue.textContent = V.toFixed(1);
    balloon.style.width = V + "px";
    balloon.style.height = V + "px";
  });
};

/* =========================
   Charles' Law Demo
========================= */
function initCharles() {
  const temp = document.getElementById("temp");
  const tempVolume = document.getElementById("tempVolume");
  const tempBalloon = document.getElementById("tempBalloon");

  if (!temp || !tempBalloon) return;

  temp.addEventListener("input", () => {
    let T = temp.value;
    let V = T / 2;   // direct relation

    tempVolume.textContent = V.toFixed(1);
    tempBalloon.style.width = V + "px";
    tempBalloon.style.height = V + "px";
  });
};
/* =========================
   Avogadro's Law Demo
========================= */
function initAvogadro() {
  const moles = document.getElementById("moles");
  const moleVolume = document.getElementById("moleVolume");
  const moleBalloon = document.getElementById("moleBalloon");

  if (!moles || !moleBalloon) return;

  moles.addEventListener("input", () => {
    let n = moles.value;
    let V = n * 10;   // direct proportionality

    moleVolume.textContent = V.toFixed(1);
    moleBalloon.style.width = V + "px";
    moleBalloon.style.height = V + "px";
  });
};
/* =========================
   Mole Concept Calculator
========================= */
function initMoleConcept() {

  const select = document.getElementById("substanceSelect");
  const givenMass = document.getElementById("givenMass");
  const moleResult = document.getElementById("moleResult");
  const customBox = document.getElementById("customMolarBox");
  const customMolar = document.getElementById("customMolarMass");

  if (!select || !givenMass) return;

  function calculateMoles() {

    let M;

    if (select.value === "custom") {
      M = parseFloat(customMolar.value);
    } else {
      M = parseFloat(select.value);
    }

    let mass = parseFloat(givenMass.value);

    if (M > 0) {
      let moles = mass / M;
      moleResult.textContent = moles.toFixed(3);
    } else {
      moleResult.textContent = "—";
    }
  }

  select.addEventListener("change", () => {
      if (select.value === "custom") {
          customBox.style.display = "block"
      } else {
          customBox.style.display = "none";
              
      }



    calculateMoles();
  });

  givenMass.addEventListener("input", calculateMoles);
  customMolar.addEventListener("input", calculateMoles);

  calculateMoles();
};
/* =========================
   Molar Volume at STP
========================= */
function initSTPVolume() {

  const stpMoles = document.getElementById("stpMoles");
  const stpVolume = document.getElementById("stpVolume");

  if (!stpMoles) return;

  function calculateVolume() {
    let n = parseFloat(stpMoles.value);

    if (n >= 0) {
      let volume = n * 22.4;
      stpVolume.textContent = volume.toFixed(2);
    }
  }

  stpMoles.addEventListener("input", calculateVolume);

  calculateVolume();
};
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};
function centerCard(index) {

    const row = document.querySelector('.card-row');
    const cards = document.querySelectorAll('.card');
    const viewport = document.querySelector('.viewport');

    const card = cards[index];

    const viewportWidth = viewport.offsetWidth;
    const cardWidth = card.offsetWidth;

    const cardOffset = card.offsetLeft;

    const moveAmount = cardOffset - (viewportWidth / 2) + (cardWidth / 2);

    row.style.transform = `translateX(${-moveAmount}px)`;
};
class cardscroller{
    constructor(box){
        this.box=box;
        this.viewport=box.querySelector('.viewport');
        this.controls=box.querySelector('.controls');
        this.cards=this.viewport.children;
        const cardslist=this.cards;
        for (let i=0;i<cardslist.length;i++){
            let btn=document.createElement('button');
            btn.innerText=i+1;
            btn.addEventListener('click',()=>{
                this.centercard(this.cards[i]);
            });
            this.controls.appendChild(btn);
            
        };
    };
    centercard(card){
        const viewport = this.viewport;
        const row = viewport.querySelector('.card-row');
        const cards = row.querySelectorAll('.card');
        
        const viewportWidth = viewport.offsetWidth;
        const cardWidth = card.offsetWidth;

        const cardOffset = card.offsetLeft;

    const moveAmount = cardOffset - (viewportWidth / 2) + (cardWidth / 2);

    row.style.transform = `translateX(${-moveAmount}px)`;
    }
}
class tblconverter {
    constructor(tbl) {
        this.tbl = tbl;
        this.headers = [];
        const headerelements = tbl.children[1].children;
        for (let i; i<headerelements.length; i++) {
            this.headers.add(headerelements.textContent);
        };
        this.values =[];
        const valrows = tbl.children;
        for (let i = 2; i<valrows.length; i++) {
            let vals = [];
            const valelems = valrows[i];
            for (let i = 0; i<valelems.length; i++) {
                vals.add(valelems.textContent);
            };
            this.values.add(vals);
        };
    };
    
}

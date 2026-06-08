import { carboncompounds } from "./CarbonCompounds.js";
document.addEventListener("DOMContentLoaded", init);

function init() {
  let sim = new carboncompounds(document.getElementById('carboncompoundsbox'));
  sim.render('ethane');
  
};

export class carboncompounds {
  constructor(box){
    this.box=box;
    console.log('Sim initialised with box:'+box);
    //Clearing the error text.
    this.box.innerHTML="";
    //Rendering a sample compound.
    this.render('c5h12');
  };
  render(name){
    //Function to render the compound.
    this.box.innerHTML = "";
    console.log(name)
    this.makegrid(this.compounds[name]);
    //a statement for experimenting. 
    //Comment the next lines for normal functioning.
    this.makegrid(this.compounds['butane']);
  };
  makegrid(compound){
    for (let rownum=0;rownum<compound.length;rownum++) {
      let row = document.createElement('div');
      row.classList.add('alx');
      let rowelems=compound[rownum];
      if (rownum%2===0){
        for (let boxnum=0;boxnum<rowelems.length;boxnum++) {
          row.appendChild(
            (boxnum%2===0) 
            ? this.atom(compound[rownum][boxnum]) 
            : this.bond(compound[rownum][boxnum],'h')
          );
        };
      } else {
        for (let boxnum=0;boxnum<rowelems.length;boxnum++) {
          //let boxelems = 
          row.appendChild(
            (boxnum%2===0) 
            ? this.bond(compound[rownum][boxnum],'v') 
            : this.emptybox()
          );
        };
      };
      this.box.appendChild(row);
    };
  };
  emptybox() {
    //Making an empty space.
    let box = document.createElement('div');
    box.classList.add('emptybox');
    return box;
  };
  atom(element) {
    //Making space for the atom.
    let atom = document.createElement('div');
    
    //Checking if the value is an actual atom.
    let atomname = this.elements[element];
    if (atomname!=" ") {
      //Making valid space if real atom.
      atom.classList.add('atom');
    } else {
      //Making empty space if not.
      atom.classList.add('emptyatom')
    }
    
    //Writing data to the atom.
    atom.innerHTML=atomname;
    
    //Completing setup
    return atom;
  };
  bond(number,align) {
    console.log(number)
    //Creating space for the bond.
    let bondbox = document.createElement('div');
    if (align==='v') {bondbox.classList.add('vbox')}
    else {bondbox.classList.add('hbox')};
    
    //Creating a box to help align the bond in center.
    let innerbox=document.createElement('div');
    innerbox.classList.add('bondbox')
    if (align==='v') {innerbox.classList.add('alx')}
    else {innerbox.classList.add('aly')};
    
    //Adding bond(s) to the inner box.
    for (let i=0;i<number;i++) {
      let bond = document.createElement('div');
      if (align==='v') {bond.classList.add('vbond')}
      else {bond.classList.add('hbond')};
      innerbox.appendChild(bond);
    };
    
    //Completing the setup.
    bondbox.appendChild(innerbox);
    return bondbox;
  }
  elements={
    ch3:'CH<sub>3</sub>',
    ch2:'CH<sub>2</sub>',
    ch:'CH',
    c:'C',
    oh:'OH',
    cho:'CHO',
    co:'CO',
    cooh:'COOH',
    o:'O',
    h:'H',
    '1':'Bond1',
    ' ':' ',
  }
  compounds={
    methane:[
    [' ',' ','h',' ',' '],
    [' ',' ',1,' ',' '],
    ['h',1,'c',1,'h'],
    [' ',' ',1,' ',' '],
    [' ',' ','h',' ',' ']
    ],
    ethane:[
    ['ch3',1,'ch3',],
    ],
    propane:[
    ['ch3',1,'ch2',1,'ch3'],
    ],
    butane:[
    ['ch3',1,'ch2',1,'ch2',1,'ch3']
    ],
    pentane:[
    ['ch3',1,'ch2',1,'ch2',1,'ch2',1,'ch3']
    ],
    isobutane:[
    [' ',' ','ch3',' ',' '],
    [' ',' ',1,' ',' '],
    ['ch3',1,'ch',1,'ch3'],
    ],
    neopentane:[
    [' ',' ','ch3',' ',' '],
    [' ',' ',1,' ',' '],
    ['ch3',1,'c',1,'ch3'],
    [' ',' ',1,' ',' '],
    [' ',' ','ch3',' ',' ']
    ],
    ethene:[
    ['ch2',2,'ch2']
    ],
    propene:[
    ['ch2',2,'ch',1,'ch3']
    ],
    but1ene:[
    ['ch2',2,'ch',1,'ch2',1,'ch3']
    ],
    ethyne:[
    ['ch',3,'ch']
    ],
    propyne:[
    ['ch',3,'c',1,'ch3']
    ],
    methanol:[
    ['ch3',1,'oh']
    ],
    ethanol:[
    ['ch3',1,'ch2',1,'oh']
    ],
    propanol:[
    ['ch3',1,'ch2',1,'ch2',1,'oh']
    ],
    methanal:[
    ['h',1,'cho']
    ],
    ethanal:[
    ['ch3',1,'cho']
    ],
    propanal:[
    ['ch3',1,'ch2',1,'cho']
    ],
    propanone:[
    ['ch3',1,'co',1,'ch3']
    ],
    butanone:[
    ['ch3',1,'co',1,'ch2',1,'ch3']
    ],
    methanoicacid:[
    ['h',1,'cooh']
    ],
    ethanoicacid:[
    ['ch3',1,'cooh']
    ],
    propanoicacid:[
    ['ch3',1,'ch2',1,'cooh']
    ],
    chloromethane:[
    ['ch3',1,'cl']
    ],
    chloroethane:[
    ['ch3',1,'ch2',1,'cl']
    ],
  };
};
class quiz {
    constructor(box){
        this.box=box;
        
    }
}

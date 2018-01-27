var menupoint = [];
var szam = 1;
var padding = 1;
var count = 0;
var next = false;
var data;
var graph;
var graph2;


var work = 0;
var notMoved = 0;
var married = 0;
var people;
function preload(){
  data = loadJSON("data1.json");
}

function setup() {

createCanvas(1000,500);

for(var i = 0; i < 5; i++){
  menupoint[i] = new Menu(padding,szam);
  padding+=25;
  szam++;
}

 people = data.people;
for(var i = 0; i< people.length; i++){
 if(people[i].workwhat != null || people[i].workwhere != null){
   work++;  
 }
  if(people[i].marriedto != null){
   married++;
 }
  if(people[i].birth == people[i].livesin || (people[i].livesin == null && people[i].birth != null)){
    notMoved++;
  }
} 

}

function draw() {

  background(0);

  for(var i = 0; i < 5; i++){
  menupoint[i].show();
}

stroke(255);
strokeWeight(2);
line(160,0,160,500);
noStroke();

if(next == false){
textFont("Impact",40);
text("\t \t Welcome to my first \n data visualization project!", 250,150);
textFont("Arial",20);
text("Press any key to continue!",500,250);
}
if(count == 1){
    graph = new Graph(work,count);
    graph.show();
  }
  if(count == 2){
    graph2 = new Graph2(10287.2,2571.8,5143.6);
    graph2.show();
  }
  if(count == 3){
    graph = new Graph(married,count);
    graph.show();
  }
 if(count == 4){
    graph = new Graph(notMoved,count);
    graph.show();
  }


if(count >= 6){
  textFont("Impact",40);
  text("Thanks for your attention!", 250,250);
}
}

function Menu(y,t){  
    this.x = 0;
    this.y = y;
    this.txt = t;
   
   
 this.show = function(){ 
    if(this.txt == 1){
      if(next == true && count==1){
      fill(255);
      }else{
        fill(76, 144, 255);
      }
      textFont("Impact",20);
      text("Employment",this.x+10,this.y+25);

    }
    if(this.txt == 2){
      if(next == true && count==2){
      fill(255);
      }else{
        fill(76, 144, 255);
      }
      textFont("Impact",18);  
      text("Job",this.x+10,this.y+25);

    }
    if(this.txt == 3){
      if(next == true && count==3){
      fill(255);
      }else{
        fill(76, 144, 255);
      }
      textFont("Impact",20);
      text("Marriage",this.x+10,this.y+25);

    }
    if(this.txt == 4){
     if(next == true && count==4){
      fill(255);
      }else{
        fill(76, 144, 255);
      }
     textFont("Impact",20);
     text("Migration",this.x+10,this.y+25);

    }
    if(this.txt == 5){
     if(next == true && count==5){
      fill(255);
      }else{
        fill(76, 144, 255);
      }
      textFont("Impact",18);
      text("Moved",this.x+10,this.y+25);
      fill(76, 144, 255);
    }
 }
  
}

function keyPressed(){
  next = true;
  count++;
}


function Graph(adat,num){
 this.dta = adat;
 this.point = num;

this.percent1 = (this.dta*100)/people.length;
this.percent2 = 100-this.percent1;
this.w = map(this.percent1,0,100,160,width-161);
this.w2 = map(this.percent2,0,100,160,width-161);
this.percent1 = round((this.dta*100)/people.length);
this.percent2 = round(100-this.percent1);

 
 
 this.show = function(){

 rect(161,50,this.w,100);
fill(247, 86, 12);
rect(161,250,this.w2,100);
fill(76, 144, 255);

fill(255);
textFont("Impact",40);
text(this.percent1+"%",170,115);
text(this.percent2+"%",170,315);

fill(76, 144, 255);
rect(175,468,30,30);

fill(255);
textFont("Impact",20);
switch(this.point){
case 1: text("Employed",210,490);
break;
case 3: text("Married",210,490);
break;
case 4: text("Moved",210,490);
break;
}
fill(247, 86, 12); 
rect(410,468,30,30);
 

fill(255);
textFont("Impact",20);
switch(this.point){
case 1: text("Unemployed",445,490);
break;
case 3: text("Unmarried",445,490);
break;
case 4:text("Stayed",445,490);
break;
}

 }
}

function Graph2(adat1,adat2,adat3){

  this.dta1 = adat1;
  this.dta2 = adat2;
  this.dta3 = adat3;
  this.x = 200;
  
this.percent1 = (this.dta1*100)/work;
this.percent2 = (this.dta2*100)/work;
this.percent3 = (this.dta3*100)/work;
this.percent4 = 100-(this.percent1+this.percent2+this.percent3);
this.h = map(this.percent1,0,100,0,200);
this.h2 = map(this.percent2,0,100,0,200);
this.h3 = map(this.percent3,0,100,0,200);
this.h4 = map(this.percent4,0,100,0,200);
this.percent1 = round((this.dta1*100)/work);
this.percent2 = round((this.dta2*100)/work);
this.percent3 = round((this.dta3*100)/work);
this.percent4 = round(100-(this.percent1+this.percent2+this.percent3));
  
 this.show = function(){

rect(this.x,500,150,-this.h);
fill(247, 86, 12);
rect(this.x+200,500,150,-this.h2);
fill(14, 239, 130);
rect(this.x+400,500,150,-this.h3);
fill(172, 0, 206);
rect(this.x+600,500,150,-this.h4);
fill(76, 144, 255);

fill(255);
textFont("Impact",40);
text(this.percent1+"%",this.x+30,500-this.h);
text(this.percent2+"%",this.x+230,500-this.h2);
text(this.percent3+"%",this.x+430,500-this.h3);
text(this.percent4+"%",this.x+630,500-this.h4);
fill(76, 144, 255);
 }
}
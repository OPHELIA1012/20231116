var sound1
function preload(){
  sound1 = loadSound("mixkit-tech-house-vibes-130.mp3") //先把音樂檔載入到sound1程式碼中
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#ccd5ae")
  analyzer = new p5.Amplitude();
  analyzer.setInput(sound1)
}

var x = 30;  //宣告一個畫方框的x軸變數(var 宣告變數為一個全域變數)
var y = 30;   //宣告一個畫方框的y軸變數(var 宣告變數為一個全域變數)
var r_b = 60
var w = 60; //宣告一個畫方框的寬度變數(var 宣告變數為一個全域變數)
var r_s = 60

var w = 60

function draw() {
  background("#ccd5ae");
  rectMode(CENTER)  //設定方框中心點為座標點
  noFill()  //不充滿顏色
  if(sound1.isPlaying()){ //音樂有撥放時
    fc=map(analyzer.getLevel(),0,1,0,100)
  }
  else{ //音樂未撥放時
    fc=map(mouseX,0,width,0,100)
  }
  for (var y=30;y<=height+30;y=y+w){
    for(var x=30;x<=width+30;x=x+w){
    stroke("#e9edc9")
    strokeWeight(4)//線條寬度
    ellipse(x,y,w+mouseX/15)//畫方框，設定框線顏色、線條粗細

    stroke("#fefae0")
    strokeWeight(3)
    rect(x,y,w+mouseY/10) //畫一個方框

    ellipse(x,y,r_b)  //畫一個圓
    ellipse(x+w/2,y+w/2,r_s+mouseX/10)
}
}
}
//按下滑鼠播放音樂
function mousePressed(){
  if(sound1.isPlaying()){
    sound1.stop();
  }else{
    sound1.play();
  }
}
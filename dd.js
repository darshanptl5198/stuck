var Correct = new Audio('./Voice/Correct.mp3');
var Wrong = new Audio('./Voice/Wrong.mp3');
var Correct1 = new Audio('./Voice/Right.mp3');

var q1="બાળકોએ પખી  નેવગખડં માં ફરું જો."; 
var q2="પખી નેપખા થી ઇ થઇ હતી.";
var q3="નવજોત અનેહરભજન જદ થી વાટકા માં પાણી લય આયા.";
var q4="પીટર મ થી પખી ં પર હાથ ફરયો.";
var q5="પખી  ઉડ ગ."; 

var EngNumber =["1","2","3","4","5","6","7","8","9","0"];
var gujNumber =["૧","૨","૩","૪","૫","૬","૭","૮","૯","0"];

function engtoguj(engValue){
engValue =engValue+"";
gujValue ="";
for(i=0;i<engValue.length;i++){
gujValue += gujNumber[EngNumber.indexOf(engValue.charAt(i))];
}
return gujValue;
 // console.log(gujValue[i])
 }
function random_item(items) {
var rendom = items[Math.floor(Math.random() * items.length)];
items.splice(items.indexOf(rendom), 1);
return rendom;
}
function randomNumber(max,min,not){
random1 = Math.floor(Math.random() * 1000);
 while (random1>max ||random1==0 || random1<min || random1==not ) {
 random1 = Math.floor(Math.random() * 1000);
}
return random1;
}
document.getElementById('master').innerHTML="";
document.getElementById("master").innerHTML="<div class='que'id='que'></div><div class='opt' id='opt'></div><div id='hope'><img id='result' src='images/karo.gif'></div><div class='tryy' id='master1'></div><div class='tryy' id='master2'></div>";
var sen_arr = ["q1","q2","q3","q4","q5"];
const lambai = sen_arr.length;
var no_arr =[1,2,3,4,5]
function disable(){
console.log(document.getElementById('master1'))
}
for(i=0;i<5;i++){
var rendomStr = random_item(sen_arr);
document.getElementById('master1').innerHTML += '<div class="puro">'+eval(rendomStr);
for(j=1;j<=no_arr.length;j++){
// console.log(rendomStr.replace("q",""))
if(j==parseInt(rendomStr.replace("q",""))){
document.getElementById('master1').innerHTML += '<div class="jom"><div vat-check="right" id="a'+j+i+'" class="no"> '+j+' </div></div>';
}else{
document.getElementById('master1').innerHTML += '<div class="jom"><div vat-check="wrong" id="a'+j+i+'" class="no"> '+j+' </div></div>';
console.log("a"+j+i)
}
}
document.getElementById('master1').innerHTML +="<br></div>";
}
clicker();
function dsb(){
// var g=document.getElementById(s).style.backgroundColor = "red";
}
const lennor = sen_arr.length;
//mastermind();
function mastermind(){
var lenner = sen_arr.length;
var ratio = parseFloat(((lennor-lenner)/lennor)*100).toFixed(2);
var myVar = setInterval(myTimer, 50);
function myTimer() {
 var compare =
parseInt(document.getElementById("progressbar").style.width);
compare +=1;
if(compare>=ratio){clearInterval(myVar);}
else{
document.getElementById("progressbar").style.width=compare +"%"}
}
 if(document.querySelectorAll(".completed").length===1){
Correct1.play();
myfun();
 }
else if(lenner===1){
document.getElementById("progressbar").classList.add("completed");
Q1f();
 }
 else{
Q1f();
 }
}
function clicker() {
const imgss = document.querySelectorAll(".no");
imgss.forEach(elem => {
elem.addEventListener("click", start);
});
function start() {
// var j= event.target.tagName;
// console.log(j);
// if(j=="IMG"){
// x = event.target.parentNode;
// }
// else{
// }
x =event.target;
// var x = document.getElementById(event.target.getAttribute("vatid"));
var y = x.getAttribute("vat-check");
if (y == "right") {
x.style.opacity="0.4"
x.style.boxShadow="0px 0px 0px white";
x.style.border="3px solid lightgreen";
document.getElementById("result").src="images/goodwork.gif";
// dsb();
Correct.play();
x.classList.add("count");
} else {
x.style.opacity="0.4"
x.style.boxShadow="0px 0px 0px white";
x.style.border="3px solid red";
document.getElementById("result").src="images/wrong.gif";
x.removeEventListener("click", start);
// var Wrong = new Audio('./Voice/Wrong.mp3');
 Wrong.play();
}
counter();
}
function counter() {
const counts = document.querySelectorAll(".count");
const answers = document.querySelectorAll(".answer");
// console.log(answers.length);
// console.log(counts.length);
if (counts.length === answers.length) {
const imgss = document.querySelectorAll(".no");
imgss.forEach(elem => {
elem.removeEventListener("click", start);
});
// document.getElementById("gif").classList.add("hide");
setTimeout(function() {
// location.reload();
mastermind();
}, 2000);
}
}
}
const svggg = document.querySelectorAll(".svgIco svg");
svggg[1].addEventListener("click", function() {
setTimeout(function() {
location.reload();
}, 100);
});
svggg[2].addEventListener("click", userBtn);
svggg[0].addEventListener("click", hideShowIntro);
function hideShowIntro() {
// document.getElementById("intro").classList.toggle("opacity");
}
var full = true;
function userBtn() {
if (full) {
openFullscreen();
} else {
closeFullscreen();
}
}
function my(){
document.getElementById("master").style.display="none";
document.getElementById("master1").style.display="none";
document.getElementById("progressbar").style.display="none";
}
var elem = document.documentElement;
/* View in fullscreen */
function openFullscreen() {
if (elem.requestFullscreen) {
elem.requestFullscreen();
} else if (elem.webkitRequestFullscreen) { /* Safari */
elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { /* IE11 */
elem.msRequestFullscreen();
}
full = false;
}
/* Close fullscreen */
function closeFullscreen() {
if (document.exitFullscreen) {
document.exitFullscreen();
} else if (document.webkitExitFullscreen) { /* Safari */
document.webkitExitFullscreen();
} else if (document.msExitFullscreen) { /* IE11 */
document.msExitFullscreen();
}
full = true;
}
var demo = document.getElementById('instruct')
function click(){
document.getElementById("master1").style.display = "none";
document.getElementById("master").style.display = "none";
document.getElementById("instruct").style.display="block";
}
function cls(){
document.getElementById("instruct").style.display="none";
document.getElementById("master1").style.display = "block";
document.getElementById("master").style.display = "block";
document.getElementById("progressbar").style.display="block";
}
var a1=document.getElementById("myfun1");
function myfun(){
a1.style.display="block";
}
function YES(){
Correct1.pause();
Correct1.currentTime = 0;
a1.style.display="none";
document.getElementById("progressbar").style.width=0 +"%"
document.getElementById("progressbar").classList.remove("completed");
mix_arr = new
Array("કં-1","ફણસ-1","આમળા-1","કર-1","ળો ૂ -2","ફણસી-2","ગાજર-2","ચણા-2","આુ-2","મીઠો લીમડો-3","પાલક-3","લેવર-4","કમળ ું કાડં -4","કચનારલો-4");
document.getElementById("opt").innerHTML="";
document.getElementById("que").innerHTML="";
document.getElementById("master1").innerHTML="";
document.getElementById("master2").innerHTML="";
document.getElementById("master3").innerHTML="";
document.getElementById("master4").innerHTML="";
mastermind();
}
function BACK(){
window.history.back(-1);
}
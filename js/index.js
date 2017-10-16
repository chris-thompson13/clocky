
var hours = 0;
var sec = 0;
var mins = 0;
var statement = ""
var setName = ""
var body = document.getElementById('bid');
var buttons2 = document.getElementsByClassName('mins')
console.log("test")
var loop = 0


for (i=0; i<mins.length; i++){
  console.log("test")

  if (59-i <= mins){
    console.log(i)
    var test2 = buttons2[(59-i)]
    test2.classList.remove('hr');
    test2.classList.add('hr2');

  }
}



function updateHrs(){
  if (loop < 59){
    loop++
  }
  var test2 = buttons2[(59-mins)]
  test2.classList.remove('hr');
  test2.classList.add('hr2');

}


function logtime(){
    var time = new Date();
     hours = time.getHours();
     mins = time.getMinutes();
     sec = time.getSeconds();





   if (sec > 15){
     if (body.classList.contains('day')){

     body.classList.remove('day')
     body.classList.add('day2')
     console.log("test3")

   }
}
if (sec > 30){
  if (body.classList.contains('day2')){

  body.classList.remove('day2')
  body.classList.add('day3')
  console.log("test3")

}
}
if (sec > 45){
  if (body.classList.contains('day3')){

  body.classList.remove('day3')
  body.classList.add('night')
  console.log("test3")

}
}



     if (hours <12) {
        statement = "good morning"
     }
     if (hours >= 12 && hours < 17) {
        statement = "good afternoon"
     }
     if (hours >= 17){
        statement = "good evening"
     }

    var userTime = (statement + ' its ' + hours + ':' + mins);

    if (hours == 0){
      userTime =(statement + ' its ' + 12 + ':' + mins)
    }

    console.log(userTime);




  // add li to ul

 var buttons = document.getElementsByClassName('test');

if (sec !== 0){
  var fly = buttons[(59 -sec)];
  if (fly !== undefined){
  if (fly.classList.contains('test')){
    fly.classList.remove('test');

  fly.classList.add('mbtnVisible');
}
}
  if (sec == 59){



  window.location.reload();


  }


var fly2 = buttons2[(59-mins)]
if (fly2 !== undefined){

if (fly2.classList.contains('mins')){

fly2.classList.remove('mins');
fly2.classList.add('mbtnVisible2');
}
}


var buttons3 = document.getElementsByClassName('hr')
if (hours >= 12){
var fly3 = buttons3[(24-hours)]
if (fly3 !== undefined){
if (fly3.classList.contains('hr')){
fly3.classList.remove('hr');
fly3.classList.add('hr2');
}
}

} else {
 fly3 = buttons3[(12-hours)]

 if (fly3 !== undefined){
 if (fly3.classList.contains('hr')){
 fly3.classList.remove('hr');
 fly3.classList.add('hr2');
 }
}
}
if (hours == 0 || hours == 12){
   fly3 = buttons3[(0)]
   if (fly3 !== undefined){
   if (fly3.classList.contains('hr')){
   fly3.classList.remove('hr');
   fly3.classList.add('hr2');
   }
  }



}
}

var h1 = document.getElementById('timeOfDay')
h1.textContent = statement

}
setTimeout(function(){
  logtime()
  setInterval(logtime,100);




}, 1000);

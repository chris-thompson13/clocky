
var hours = 0;
var sec = 0;
var mins = 0;
var statement = ""








function logtime(){
    var time = new Date();
     hours = time.getHours();
     mins = time.getMinutes();
     sec = time.getSeconds();

     if (hours > 18 || hours < 6){
       var body = document.getElementById('bid')
       body.classList.remove('day')
       body.classList.add('night')

     } else {
       newBody.classList.remove('night')
       newBody.classList.add('day')
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
var head =document.getElementById('now')
head.textContent = userTime
if (sec !== 0){
  var fly = buttons[(59 -sec)];
    fly.classList.remove('test');

  fly.classList.add('mbtnVisible');

  if (sec == 59){



  window.location.reload();


  }

  var buttons2 = document.getElementsByClassName('mins')
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
if (hours == 0){
   fly3 = buttons3[(0)]
   if (fly3 !== undefined){
   if (fly3.classList.contains('hr')){
   fly3.classList.remove('hr');
   fly3.classList.add('hr2');
   }
  }


}
}

}
setTimeout(function(){
  logtime()
  alert(statement);
  setInterval(logtime,1000);

}, 1000);

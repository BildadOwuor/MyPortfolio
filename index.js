function dateFunction() {
   var timeStamp = new Date();
   var utcdate = timeStamp.toUTCString();
   document.getElementById('date').innerHTML = utcdate;
   // console.log(utcdate);
}
dateFunction();

// end of dte function.

// languages function.


// const languages=["C","Java","JavaScript","c#"];
// for (x of names){
//      return x;
//  }
//  document.getElementById('language').innerHTML=x;
// function onClick() {
//    let a = document.getElementById('language').innerHTML.valueOf;
// }


function responsive() {
   let a = screen.width,
      b = screen.availHeight;
   switch (a) {
      case a >= 1366:
         document.getElementsByTagName('body').style.width = '80%';
         break;
      case a <= 1920:
         document.getElementsByTagName('body').style.width = '80%';
         break;
   }
}

function testMe() {
   var textBox = document.getElementById('language');
   var textValue = textBox.value;
   var emailAddress = document.getElementById('emailaddress').value;
   if (textValue == 'All') {
      return emailAddress + 'All';
   } else if (textValue == 'JavaScript') {
      return emailAddress + 'JavaScript';
   } else if (textValue == 'C#') {
      return emailAddress + 'C#';
   } else if (textValue == 'Java') {
      return emailAddress + 'Java';
   } else if (textValue == 'C') {
      return emailAddress + 'C';
   } else {
      return emailAddress + 'No Language selected.';
   }
}

function getIntouch(emailAddress, textValue) {
   var feedBack = new Array([emailAddress, textValue]);
   console.log(feedBack);
}


// var person={
//    Email:"Email",
//    language:"language",
//    inTouch: function (){
//       return this.Email+""+this.language;
//    }
// }
// console.log(inTouch);
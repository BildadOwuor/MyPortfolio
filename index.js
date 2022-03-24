$(document).ready(function () {


   "use strict";


   function dateFunction() {
      var timeStamp = new Date();
      var utcdate = timeStamp.toLocaleDateString();
      document.getElementById('date').innerHTML = 'Visited on' + " " + utcdate;
      // console.log(utcdate);
   }
   dateFunction();

   // end of date function.

   // getting user input and matching the email with the language selected
   //2. Error detected. To be asked.
   let emailAddress = $("#emailaddress").val();
   let textValue = $("#language").val();
   var getIntouch = $("#btn1");
   getIntouch.on("click", function () {
      var feedBack = new Array([emailAddress, textValue]);
      console.log(feedBack);
   });

   var myBlogs = $("#more");
   // myBlogs.text("Visit www.bildadowuor.co.ke");

   var learnMore = $("#toggleButton");
   learnMore.on("click", function () {
      myBlogs.toggle(500);

      if (learnMore.text() == "See Less") learnMore.text("See More");
      else learnMore.text("See Less");
   });


   // var blogs = "https://medium.com/me/stories/public";
   // $.get(blogs, function () {
   //    displayblogs();
   // });
   // var viewBlogs=$("#article-three").text(blogs);



   // var breakdown = $("body").text("Sorry we're updating our site");
   // breakdown.css("font-weight", "bold");
   // breakdown.css("margin","25%");
   // breakdown.css("width","auto");
   // breakdown.css("height","auto");
   // breakdown.css("font-size", "20px");


   function greetings() {
      const time = new Date();
      const current = time.toLocaleTimeString("en-US", {
         hour: "2-digit",
         minute: "2-digit",
         hour12: false
      });
      if (current < '12:00') {
         document.getElementById('greetings').innerHTML = 'Good Morning';
      } else if ('16:00' > current > '12:00') {
         document.getElementById('greetings').innerHTML = 'Good Afternoon';
      } else if ('19:00' > current >= '16:00') {
         document.getElementById('greetings').innerHTML = 'Good Evening';
      } else if (current >= '19:00') {
         document.getElementById('greetings').innerHTML = 'Good Night';
      } else {
         document.getElementById('greetings').innerHTML = 'Have a nice Day';
      }

   }
   greetings();

   var heyjquery = $("#test");
   heyjquery.text("This is jQuery");

   heyjquery.hover(function () {
      // entering make it white
      $(this).css("color", "white");
   }, function () {
      // for leaving reverse it 
      $(this).css("color", "black");
   });
   // 3. searchResult on the DOM
   // $("#searchBar").on("submit", function(){

   // var search =$(document);
   // $.get(search)
   // .success(function(r){
   //    displayResult();
   // });
   // .fail(function (_err){
   //    console.log("Failed to query DOM");
   // });
   // .done(function(){

   // });
   // return false;
   // });

   // var search = $("#search").val();
   // var searcher = $("#searchIcon");
   // searcher.on("click", function () {
   //    search.display();
   // });

   // var searchResult = $(document).text();
   // $.each(searchResult, function () {
   //    var newResult = $(search);

   //    searchResult.append(newResult);
   // });
   

});

// TO ASK

// 1. using search button to search information from the DOM elements?
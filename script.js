
// this file willl include the following four functions
//  a local storage. getitem function
//  a moment function
//  

var saveBtn = $("<button>");

  // var row = $(".row");
  //    console.log(row)

     $(".saveBtn").on("click", function () {


     // understanding .val()
     // The .val() method is primarily used to get the values of form elements such as input, select and textarea. When called on an empty collection, it returns undefined.

  var value = $(this).siblings(".text").val();

  var time = $(this).parent().attr("id");

  //using $(This) to get the text content (i.e. using This.siblings)
  localStorage.setItem(time, value);
  
  var save = JSON.parse(localStorage.getItem) 
  ("saveBtn")

   // Understanding .each() 
  // The .each() method is designed to make DOM looping constructs concise and less error-prone. When called it iterates over the DOM elements that are part of the jQuery object. Each time the callback runs, it is passed the current loop iteration, beginning from 0. More importantly, the callback is fired in the context of the current DOM element, so the keyword this refers to the element.

     }); 

     // The .each function and var currentTime... need to be wrapped up into a updaterFunction 
   
   
     function updateTime() {

  var currentTime = moment().hours();
  

  $(".time-block").each(function () {
    
    var hour = $(this).attr("id"); 
    hour = parseInt(hour); 

    console.log(hour);
    console. log(currentTime);

    if (hour < currentTime) {
      $(this).addClass("past");
    } else if (currentTime === hour) {

      $(this).removeClass("past");
      $(this).addClass("present");
    } else if (hour > currentTime) {
    
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
  
      
    }
   
  
});

};


// use get local storage and display it in the proper text area
//$(#specific TIME ID).text(localstorage.getItem(hour))

// also grab text from the TextArea tag and put both the hour selected and the text area into local storage using ->

// localStorage.setItem(VARIABLE FOR HOUR, VARIABLE FOR TEXTAREA CONTENT)

// on click, hour update, and local storage 

// using local storage to GET information from local storage so that when you refresh the page the stuff you put in goes back into whatever text area they were previously saved in.

// localStorage.getItem(variable for hour)

// using .text to put the value on to the page in the appropriate textarea. 

// .addClass Adds the specified class(es) to each element in the set of matched elements.

// .attr Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element

// .text Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements.


// var save = JSON.parse(localStorage.getItem("saveBtn")

// // The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string.



// This is to load any saved data from localStorage


$(document).ready( function (){ ; 
updateTime ();

   
$("#currentDay").text(moment().format("dddd MMM D YYYY"));

$("#8 .text").val(localStorage.getItem("8"))
$("#9 .text").val(localStorage.getItem("9"))
$("#10 .text").val(localStorage.getItem("10"))
$("#11 .text").val(localStorage.getItem("11"))
$("#12 .text").val(localStorage.getItem("12"))
$("#1 .text").val(localStorage.getItem("1"))
$("#2 .text").val(localStorage.getItem("2"))
$("#3 .text").val(localStorage.getItem("3"))
$("#4 .text").val(localStorage.getItem("4"))
$("#5 .text").val(localStorage.getItem("5"))

}); 

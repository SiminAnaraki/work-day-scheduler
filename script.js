//get the current day of the month using the dayjs library
var today = dayjs().format("D")
function suffixe(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  };

//format the current date and display it  
var time = dayjs().format("dddd, MMMM DD")
$("#currentDay").text(time +suffixe(today));

//get the current hour in 24-hour format
var hour = dayjs().format("H")

//iterate over each row for adding proper bg-color based on dayjs()
$(".row").each(function(){
    var taksTime= $(this).children("textarea").attr("id")
    if(taksTime===hour){$(this).children("textarea").addClass("present")}
      else if(taksTime<hour){$(this).children("textarea").addClass("past")}
      else {$(this).children("textarea").addClass("future")}
    })

//set values for each textarea from localStorage
$("#09").val(localStorage.getItem("09"))
$("#10").val(localStorage.getItem("10"))
$("#11").val(localStorage.getItem("11"))
$("#12").val(localStorage.getItem("12"))
$("#13").val(localStorage.getItem("13"))
$("#14").val(localStorage.getItem("14"))
$("#15").val(localStorage.getItem("15"))
$("#16").val(localStorage.getItem("16"))
$("#17").val(localStorage.getItem("17"))

//event handler for the click event on ".saveBtn"
$(".saveBtn").on("click",save)
function save(event){
    event.preventDefault();
    var newTask = $(this).siblings('textarea').val()
    whenToDo =$(this).siblings('textarea').attr("id")
    localStorage.setItem(whenToDo,newTask)

    //display the message if the new task is not empty
    if (newTask){
    $("#message").delay(300).fadeIn()
    $("#message").delay(1500).fadeOut()
  }
}

   
    


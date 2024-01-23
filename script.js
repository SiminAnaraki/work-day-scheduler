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
var time = dayjs().format("dddd, MMMM DD")
$("#currentDay").text(time +suffixe(today));
var hour = dayjs().format("H")
console.log(hour)
$(".row").each(function(){
    var saj = $(this).children("textarea").attr("id")
    console.log(saj)
   if(saj===hour){$(this).children("textarea").addClass("present")}
    else if(saj<hour){$(this).children("textarea").addClass("past")}
    else {$(this).children("textarea").addClass("future")}

   })

$("#09").val(localStorage.getItem("09"))
$("#10").val(localStorage.getItem("10"))
$("#11").val(localStorage.getItem("11"))
$("#12").val(localStorage.getItem("12"))
$("#13").val(localStorage.getItem("13"))
$("#14").val(localStorage.getItem("14"))
$("#15").val(localStorage.getItem("15"))
$("#16").val(localStorage.getItem("16"))
$("#17").val(localStorage.getItem("17"))


$(".row").on("click",".saveBtn, .saveBtn i",save)

function save(event){
    event.preventDefault();
    if ($(event.target).hasClass("saveBtn") || $(event.target).parent().hasClass("saveBtn")) {
    var newTask = $(event.target).siblings('textarea').val()
    whenToDo =$(event.target).siblings('textarea').attr("id")
    localStorage.setItem(whenToDo,newTask)
    $("#message").removeClass("d-none")
}}
$(".saveBtn").on("mouseleave",function(){
    $("#message").delay(1000).addClass("d-none")
})

   
    


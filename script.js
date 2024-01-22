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


$(".row").on("click",".saveBtn",save)
function save(event){
    var tar = $(event.target)
    var newTask = tar.siblings('textarea').val().trim()
    console.log(newTask)
    whenToDo =$(event.target).siblings('textarea').attr("id")
    console.log(whenToDo)
    localStorage.setItem(whenToDo,newTask)
}

   
    


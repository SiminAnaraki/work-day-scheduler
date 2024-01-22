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

var hour = dayjs().format("H")
console.log(hour)
for(var i=9 ;i<18;i++){
    var saj = $(`#${i}`).attr("id")
    console.log(saj)
   if(saj===hour){$(`#${i}`).addClass("present")}
    else if(saj<hour){$(`#${i}`).addClass("past")}
    else {$(`#${i}`).addClass("future")}

   }

$("#currentDay").text(time +suffixe(today));
$("#9").val(localStorage.getItem("9"))
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

   
    


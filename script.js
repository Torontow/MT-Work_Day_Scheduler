$(document).ready(function(){

var today = moment().format("dddd, MMMM Do YYYY");
var currentHour = moment().format("H");
var timesArray = [9,10,11,12,1,2,3,4,5];
$("#currentDay").text(today);
for (var i = 0; i < timesArray.length; i++) {
        var hour = $("<div>").addClass("col-1").attr("id",[i]).text(timesArray[i] + ":00");
        var todo = $("<textarea>").addClass("description col").attr("time",(i+9));
        var slotHour = todo.attr("time");
        if (slotHour === currentHour) {
                todo.addClass("present");
        } else if (slotHour < currentHour) {
                todo.addClass("past");
        } else if (slotHour > currentHour) {
                todo.addClass("future");
        }



        var save = $("<div>").addClass("saveBtn col-1").attr("id",[i]);
        var row = $("<div>").addClass("row hour").attr("id",[i]);
        row.append(hour).append(todo).append(save);
        $("#scheduler").append(row);
        
}






});









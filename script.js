$(document).ready(function(){

var timesArray = [9,10,11,12,1,2,3,4,5];

for (var i = 0; i < timesArray.length; i++) {
        var hour = $("<div>").addClass("col-1").attr("id",[i]).text(timesArray[i] + ":00");
        var task = $("<textarea>").addClass("description col").attr("id",[i]);
        var save = $("<div>").addClass("saveBtn col-1").attr("id",[i]);

        var row = $("<div>").addClass("row hour").attr("id",[i]);
        row.append(hour).append(task).append(save);
        
        $("#scheduler").append(row);

}






});









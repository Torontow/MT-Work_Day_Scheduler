$(document).ready(function(){

var timesArray = [9,10,11,12,1,2,3,4,5];

for (var i = 0; i < timesArray.length; i++) {

        var row = $("<div>");
        row.addClass("row hour");
        row.attr("id",[i]);
        row.text(timesArray[i] + ":00");
        // var hour = $("<div>").addClass("col-1").attr("id",[i]);
        // console.log(hour);
        // var task = $("<textarea>").addClass("description col").attr("id",[i]);
        // var save = $("<div>").addClass("saveBtn col-1").attr("id",[i]);




        $("#scheduler").append(row);
        // $("#scheduler").append(hour).append(task).append(save);

}

});









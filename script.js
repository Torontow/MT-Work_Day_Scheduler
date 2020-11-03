$(document).ready(function () {
        // moment.js date for top of page
        var today = moment().format("dddd, MMMM Do YYYY");

        var currentHour = parseInt(moment().format("HH"));
        var timesArray = [9, 10, 11, 12, 1, 2, 3, 4, 5];
        var todo;
        var save;
        var hour;

        // Puts today's day and date in the scheduler header
        $("#currentDay").text(today);

        // builds the scheduler layout
        for (var i = 0; i < timesArray.length; i++) {

                // local variables to build layout
                hour = $("<div>").addClass("col-1").attr("id", [i]).text(timesArray[i] + ":00");
                todo = $("<textarea>").addClass("description col").attr("time", (i + 9)).attr("id", [i]);

                save = $("<button>").addClass("saveBtn col-1").attr("id", [i]).html("<i class='fas fa-save'></i>");
                // builds the rows onto scheduler
                var row = $("<div>").addClass("row hour").attr("id", [i]);
                row.append(hour).append(todo).append(save);
                $("#scheduler").append(row);

                // styles the text areas dependent on what time it is
                var slotHour = todo.attr("time");
                console.log(slotHour);
                console.log("it is " + currentHour + " o'clock");
                if (slotHour < currentHour) {
                        todo.addClass("past");
                } else if (slotHour > currentHour) {
                        todo.addClass("future");
                } else {
                        todo.addClass("present");
                }

        }


        // render the schedule function
        function renderScheduler() {
                $("textarea").each(function () {
                        var inputId = $(this).attr("id");
                        $(this).val(localStorage.getItem(inputId));
                });
        };

        // store items function
        $(".saveBtn").on("click", function (event) {
                event.preventDefault();
                var saveIndex = $(this).attr("id");
                var scheduleInput = $(this).siblings("textarea").val();
                localStorage.setItem(saveIndex, scheduleInput);

        })

        renderScheduler();
        // end of document ready function
});









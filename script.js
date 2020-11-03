$(document).ready(function () {

        // Prints today's date in the scheduler header.
        var today = moment().format("dddd, MMMM D, YYYY");
        function date() {
                $("#currentDay").text(today);
        }
        // Dynamically builds the scheduler layout.
        var timesArray = [9, 10, 11, 12, 1, 2, 3, 4, 5];
        for (var i = 0; i < timesArray.length; i++) {
                // Builds the grid itself.
                var hour = $("<div>").addClass("col-1").attr("id", [i]).text(timesArray[i] + ":00");
                var slot = $("<textarea>").addClass("description col").attr("time", (i + 9)).attr("id", [i]);
                var save = $("<button>").addClass("saveBtn col-1").attr("id", [i]).html("<i class='fas fa-save'></i>");
                var row = $("<div>").addClass("row hour").attr("id", [i]);
                row.append(hour).append(slot).append(save);
                $("#scheduler").append(row);
                // Styles <textarea> differently, depending on what time of day it is. 
                var currentHour = parseInt(moment().format("HH"));
                var slotHour = slot.attr("time");
                if (slotHour < currentHour) {
                        slot.addClass("past");
                } else if (slotHour > currentHour) {
                        slot.addClass("future");
                } else {
                        slot.addClass("present");
                }
        }
        // Adds a "clear" button to the scheduler.
        $("#scheduler").append($("<button>").addClass("btn-block btn-lg btn-secondary")
                .attr("id", "clear").text("Clear My Schedule"));

        // Renders the schedule with locally-stored user input, if any.
        function renderScheduler() {
                $("textarea").each(function () {
                        var inputId = $(this).attr("id");
                        $(this).val(localStorage.getItem(inputId));
                });
        };
        // Saves user input to local storage.
        $(".saveBtn").on("click", function () {
                var saveIndex = $(this).attr("id");
                var scheduleInput = $(this).siblings("textarea").val();
                localStorage.setItem(saveIndex, scheduleInput);
        })
        // Clears all previously saved user input from local storage and from the DOM.
        $("#clear").on("click", function () {
                localStorage.clear();
                renderScheduler();
        });

        date();
        renderScheduler();
});









$("button").click(function() {
    let waterTemp = $("input").val();
    if (waterTemp >= 212) {
        $("p").text("Boiling!");
    } else if (waterTemp > 32) {
        $("p").text("ok to drink ");
         } else if (waterTemp < 32) {
        $("p").text(" not ok to drink ");


    }
});
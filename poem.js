
$(document).ready(function () {
  //Adds a handler for the Toggler ID
  $("#toggler").click(function () {
    //Toggles the visibility for the card with the form in it.
    $(".card").toggle();
  });

  //Adds a handler for when the name field is changed.
  $("#name").change(function () {
    //Creates a variable with the value of the #name form field.
    var name = $("#name").val();
    $("h1").text("I, " + name + ",");
  });

  $("#Adjectives").change(function () {
    //Creates a variable with the value of the #name form field.
    var Adjectives = $("#Adjectives").val();
    $("h2").text(" " + Adjectives + ",");
  });

  $("#Lover").change(function () {
    //Creates a variable with the value of the #name form field.
    var Adjectives = $("#Lover").val();
    $("h3").text("Lover of  " + Adjectives + ",");
  });

  $("#Feeling").change(function () {
    //Creates a variable with the value of the #name form field.
    var Feeling = $("#Feeling").val();
    $("h4").text("Who feels " + Feeling + ",");
  });

  $("#See").change(function () {
    //Creates a variable with the value of the #name form field.
    var See = $("#See").val();
    $("h5").text("Who would like to see " + See + ",");
  });

  $("#City").change(function () {
    //Creates a variable with the value of the #name form field.
    var City = $("#City").val();
    $("h6").text(
      "Am a FUTURE resident of " + City + ", Welcome you to my poem."
    );
  });

  $("#color").change(function () {
    var color = $("#color").val();
    var color_class = "";
    if (color == "red") color_class = "text-danger";
    if (color == "green") color_class = "text-success";

    $("h1").removeClass();
    if (color_class != "") $("h1").addClass(color_class);
  });
});
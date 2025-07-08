function confirmChoice() {
  var choice = confirm("Do you want to continue?");
  var message = choice ? "You pressed OK!" : "Are you sure you want to cancel?";
  alert(message);
}

let colorToggle = false;
function toggleColor() {
  var aboutDiv = document.getElementById("about");
  var projectDiv = document.getElementById("project");

  if (!colorToggle) {
    aboutDiv.classList.add("bg-lightblue");
    projectDiv.classList.add("bg-lightpink");
  } else {
    aboutDiv.classList.remove("bg-lightblue");
    projectDiv.classList.remove("bg-lightpink");
  }
  colorToggle = !colorToggle;
}

let fontToggle = false;
function toggleFontStyle() {
  var aboutDiv = document.getElementById("about");
  var projectDiv = document.getElementById("project");

  aboutDiv.classList.toggle("fancy-font");
  projectDiv.classList.toggle("fancy-font");
  fontToggle = !fontToggle;
}

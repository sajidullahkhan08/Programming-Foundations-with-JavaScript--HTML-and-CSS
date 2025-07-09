function addTask() {
  var input = document.getElementById("input");
  var newTask = input.value;

  if (newTask != "") {
    var item = document.createElement("li");

    item.innerHTML =
      '<input type="button" class="done" onclick="markDone(this.parentNode)" value="✓" /> ' +
      '<input type="button" class="remove" onclick="remove(this.parentNode)" value="✕" /> ' +
      '<input type="button" class="important" onclick="important(this.parentNode)" value="!" /> ' +
      newTask;

    document.getElementById("tasks").appendChild(item);

    // Clear input and update placeholder
    input.value = "";
    input.placeholder = "enter next task...";
  }
}

function markDone(item) {
  item.className = "finished";
}

function remove(item) {
  if (item.className === "finished") {
    item.remove();
  } else {
    alert("Please mark the task as done before removing it.");
  }
}

function important(item) {
  item.style.backgroundColor = "lightblue";
}

function doAbout() {
  var about = document.getElementById("divabout");
  about.innerHTML = "Author is Sajidullah Khan";
  about.className = "yellowbackground";
}

function clearAbout() {
  var about = document.getElementById("divabout");
  about.innerHTML = "";
}

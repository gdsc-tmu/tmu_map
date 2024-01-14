function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function setSelectedOptionSemester(value) {
  // Get the dropdown element
  var dropdown = document.getElementById('semesterDropdown');
  document.getElementById('dropdownButtonSemester').innerText = value;

  // Loop through options and set the selected one
  for (var i = 0; i < dropdown.options.length; i++) {
    if (dropdown.options[i].value === value) {
      dropdown.selectedIndex = i;
      break;
    }
  }
}

function setSelectedOptionDay(value) {
      // Get the dropdown element
      var dropdown = document.getElementById('dayDropdown');
      document.getElementById('dropdownButtonDay').innerText = value;

      // Loop through options and set the selected one
      for (var i = 0; i < dropdown.options.length; i++) {
        if (dropdown.options[i].value === value) {
          dropdown.selectedIndex = i;
          break;
        }
      }
}

function setSelectedOptionPeriod(value) {
      // Get the dropdown element
      var dropdown = document.getElementById('periodDropdown');
      document.getElementById('dropdownButtonPeriod').innerText = value;

      // Loop through options and set the selected one
      for (var i = 0; i < dropdown.options.length; i++) {
        if (dropdown.options[i].value === value) {
          dropdown.selectedIndex = i;
          break;
        }
      }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function semesterSelect() {
  document.getElementById("semesterSelect").classList.toggle("show");
}

function daySelect() {
  document.getElementById("daySelect").classList.toggle("show");
}

function periodSelect() {
  document.getElementById("periodSelect").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


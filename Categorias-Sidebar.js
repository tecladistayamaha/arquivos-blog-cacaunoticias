function openCustomTab(evt, cityName) {
  var i, tabcontent, tabbuttons;
  tabcontent = document.getElementsByClassName("custom-tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tabbuttons = document.getElementsByClassName("custom-tab-button");
  for (i = 0; i < tabbuttons.length; i++) {
    tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Open the default tab on load
document.getElementById("defaultOpenTab").click();

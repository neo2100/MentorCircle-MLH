function changeTab(evt, newTab) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    allTabDefault();
    if(newTab==='mentors_tab'){
        document.getElementsByClassName("v10_66")[0].style.color = "rgba(0,0,0,1)";
        document.getElementsByClassName("v10_66")[0].style["border-bottom"] = "5px solid rgba(0,0,0,1)";
    }
    else if(newTab==='my_profile_tab'){
        document.getElementsByClassName("v10_68")[0].style.color = "rgba(0,0,0,1)";
        document.getElementsByClassName("v10_68")[0].style["border-bottom"] = "5px solid rgba(0,0,0,1)";
    }
    else if(newTab==='notifications_tab'){
        document.getElementsByClassName("v10_119")[0].style.color = "rgba(0,0,0,1)";
        document.getElementsByClassName("v10_119")[0].style["border-bottom"] = "5px solid rgba(0,0,0,1)";
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(newTab).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function allTabDefault() {
    document.getElementsByClassName("v10_66")[0].style.color = "rgba(155,155,155,1)";
    document.getElementsByClassName("v10_68")[0].style.color = "rgba(155,155,155,1)";
    document.getElementsByClassName("v10_119")[0].style.color = "rgba(155,155,155,1)";
    
    document.getElementsByClassName("v10_66")[0].style["border-bottom"] = "none";
    document.getElementsByClassName("v10_68")[0].style["border-bottom"] = "none";
    document.getElementsByClassName("v10_119")[0].style["border-bottom"] = "none";
  }
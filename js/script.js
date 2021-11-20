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
    else if(newTab==='charities_tab'){
        document.getElementsByClassName("v10_119_")[0].style.color = "rgba(0,0,0,1)";
        document.getElementsByClassName("v10_119_")[0].style["border-bottom"] = "5px solid rgba(0,0,0,1)";
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(newTab).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function allTabDefault() {
    document.getElementsByClassName("v10_66")[0].style.color = "rgba(155,155,155,1)";
    document.getElementsByClassName("v10_68")[0].style.color = "rgba(155,155,155,1)";
    document.getElementsByClassName("v10_119")[0].style.color = "rgba(155,155,155,1)";
    document.getElementsByClassName("v10_119_")[0].style.color = "rgba(155,155,155,1)";
    
    document.getElementsByClassName("v10_66")[0].style["border-bottom"] = "none";
    document.getElementsByClassName("v10_68")[0].style["border-bottom"] = "none";
    document.getElementsByClassName("v10_119")[0].style["border-bottom"] = "none";
    document.getElementsByClassName("v10_119_")[0].style["border-bottom"] = "none";
  }

  function changeMentor(evt, direction) {
    if(direction==='right'){
        document.getElementById("mentor_1").style.display = "none";
        document.getElementById("mentor_2").style.display = "block";
    }
    else if(direction==='left'){
        document.getElementById("mentor_1").style.display = "block";
        document.getElementById("mentor_2").style.display = "none";
    }
  }

// When the user clicks on the button, open the modal
function openModal(evt, modalId) {
    document.getElementById(modalId).style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal(evt, modalId) {
    document.getElementById(modalId).style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var modal1 = document.getElementById("message_modal");
    var modal2 = document.getElementById("donation_modal");
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
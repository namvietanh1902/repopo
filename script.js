window.onscroll = ()=>{
    const header = document.querySelector("header");
    const sticky = header.offsetTop;
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        
      } else {
        header.classList.remove("sticky");
    
      }

};
let defaultsClick = document.querySelectorAll(".defaultClick");
for (let i = 0; i < defaultsClick.length; i++) {
  defaultsClick[i].click();
}

function openTab(evt, cityName) {

    const tabcontent = document.getElementsByClassName("tabcontent");
    console.log(tabcontent);
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    const tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active","");
    }
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
  }
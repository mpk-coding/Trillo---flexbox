//to prevent animation transitions firing off on window load
window.onload = function preload() {
  var layout = document.getElementsByClassName("preload")[0];
  layout.classList.remove("preload");
  //////////////////////////////////////////////////////////////

  //search__suggested truncated text tooltips
  var items = document.getElementsByClassName("search__list-item");
  //go through all list-item elements
  for (var i = 0; i < items.length; i++) {
    //check if they overflow their parent container
    if (0 > items[i].clientWidth - items[i].scrollWidth) {
      //if they overflow their parent container, get their text value and inject it into title html attribute
      items[i].addEventListener("mouseover", function (i) {
        tooltipText = this.innerText;
        this.setAttribute("title", tooltipText);
      });
    }
  }

  //clear search__input when not focused
  /*
  const searchInput = document.getElementsByClassName("search__input")[0];
  searchInput.addEventListener("blur", (event) => {
    event.target.value = "";
  });
  */
};
//------------------------------------------------------------

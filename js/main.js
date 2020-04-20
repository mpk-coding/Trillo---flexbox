//to prevent animation transitions firing off on window load
window.onload = function preload() {
  var layout = document.getElementsByClassName('preload')[0];
  layout.classList.remove('preload');

//search__suggested truncated text tooltips
  var items = document.getElementsByClassName('search__list-item');
  for (var i = 0; i < items.length; i++) {
    if (0 > items[i].clientWidth - items[i].scrollWidth) {
    items[i].addEventListener('mouseover', function (i) {
    tooltipText = this.innerText;
    this.setAttribute("title", tooltipText)
    });
    }
  }
}

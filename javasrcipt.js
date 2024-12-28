// Scroll-to-top Button
window.onscroll = function() {
  var scrollButton = document.getElementById("scroll-to-top");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};

// Scroll function
function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

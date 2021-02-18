"use strict";

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
  initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  $(".likeBtn").click(function (e) {
    e.preventDefault();
    //let name = $(this).text();
    //$(this).text(anagrammedName(name));
    ga("send", "event", "like", "click");
  });

  // your code here
}

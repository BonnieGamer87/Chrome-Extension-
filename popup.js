document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a');
    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        chrome.tabs.create({ url: this.getAttribute('href') });
      });
    });
  });
  
// infinte typing
var typed = new Typed(".auto-input", {
  strings: [
    "Programmer",
    "Web Developer",
    "Python Developer",
    "Java Developer",
  ],
  typeSpeed: 100,
  backSpeed: 30,
  loop: true,
});

// copy to clipboard
document.addEventListener('DOMContentLoaded', function() {
  var clipboard = new ClipboardJS('.copy-button', {
      target: function(trigger) {
          return trigger.previousElementSibling;
      }
  });

  clipboard.on('success', function(e) {
      e.clearSelection();
      alert('Code copied to clipboard!');
  });
});
document.addEventListener('DOMContentLoaded', function() {
  var foreignTicketRadio = document.getElementById('foreign-ticket');
  var foreignPackagesDiv = document.getElementById('foreign-packages');
  var localMessageDiv = document.getElementById('local-message');
  var purchaseBtn = document.getElementById('purchase-btn'); // Added

  foreignTicketRadio.addEventListener('change', function() {
    if (foreignTicketRadio.checked) {
      foreignPackagesDiv.style.display = 'block';
      localMessageDiv.style.display = 'none';
      purchaseBtn.disabled = true; // Disable button when radio is selected
    }
  });

  var localTicketRadio = document.getElementById('local-ticket');
  localTicketRadio.addEventListener('change', function() {
    if (localTicketRadio.checked) {
      foreignPackagesDiv.style.display = 'none';
      localMessageDiv.style.display = 'block';
      purchaseBtn.disabled = true; // Disable button when radio is selected
    }
  });

  // Function to enable/disable purchase button
  function togglePurchaseButton() {
    if (localTicketRadio.checked || foreignTicketRadio.checked) {
      purchaseBtn.disabled = false;
    } else {
      purchaseBtn.disabled = true;
    }
  }

  // Event listeners for radio buttons
  localTicketRadio.addEventListener("change", togglePurchaseButton);
  foreignTicketRadio.addEventListener("change", togglePurchaseButton);
});

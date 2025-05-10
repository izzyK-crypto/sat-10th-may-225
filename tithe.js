// Show the form after reading scriptures
function showForm() {
    document.getElementById('scriptures').style.display = 'none';
    document.getElementById('giving-form').style.display = 'block';
  }
  
  // Enforce custom checkbox selection logic
  document.querySelectorAll('input[name="activity"]').forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
      const allChecked = Array.from(document.querySelectorAll('input[name="activity"]:checked'));
      const isTitheChecked = allChecked.some(cb => cb.value === "Tithe");
  
      if (allChecked.length > 2) {
        this.checked = false;
        alert("You can only select a maximum of two options.");
      } else if (!isTitheChecked && allChecked.length > 1) {
        this.checked = false;
        alert("If Tithe is not selected, you can only choose one giving activity.");
      }
    });
  });
  
  // Handle form submission
  function handleSubmit() {
    const checkedActivities = Array.from(document.querySelectorAll('input[name="activity"]:checked'))
      .map(cb => cb.value);
    const phone = document.getElementById('phone').value;
  
    if (checkedActivities.length === 0) {
      alert("Please select at least one giving activity.");
      return false;
    }
  
    // Show thank you message
    const thankyou = document.getElementById('thankyou');
    thankyou.style.display = 'block';
    setTimeout(() => {
      thankyou.style.display = 'none';
    }, 5000);
  
    // Send to WhatsApp
    const message = `Giving for: ${checkedActivities.join(', ')}\nPhone: ${phone}`;
    const whatsappNumber = "256741306237"; // replace with your admin number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  
    // Placeholder for EasyPay integration
    // e.g., callEasyPayAPI(checkedActivities, phone);
  
    return false; // Prevent form from submitting
  }
  
  function goHome() {
    window.location.href = "index.html"; // replace with your actual homepage
  }

  function showForm() {
    document.getElementById('scriptures').style.display = 'none';
    document.getElementById('giving-form').style.display = 'block';
    document.getElementById('form-actions').style.display = 'block'; // show back button
  }
  
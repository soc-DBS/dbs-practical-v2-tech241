document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('transferForm');
  if (!form) return; // Safety check

  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Stay on page

    const staffNo = form.staffNo.value;
    const department = form.department.value;

    const token = localStorage.getItem('token');
    if (!token) {
      alert('No token found. Please log in again.');
      return;
    }

    try {
      const response = await fetch('/staff/transferStaff', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ staffNo, department })
      });

      if (response.ok) {
        alert('Staff transfer successful!');
        form.reset();
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Transfer failed.');
      }

    } catch (err) {
      alert('An error occurred: ' + err.message);
    }
  });
});

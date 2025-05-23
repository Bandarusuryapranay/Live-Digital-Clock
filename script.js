function updateClock() {
  const now = new Date();

  // Format time as HH:MM:SS
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;

  // Format date as Month Day, Year (e.g., May 23, 2025)
  const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = now.toLocaleDateString('en-US', optionsDate);

  // Format day of the week (e.g., Friday)
  const optionsDay = { weekday: 'long' };
  const dayString = now.toLocaleDateString('en-US', optionsDay);

  // Update DOM elements
  document.getElementById('time').textContent = timeString;
  document.getElementById('date').textContent = dateString;
  document.getElementById('day').textContent = dayString;
}

// Initial call to display immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);

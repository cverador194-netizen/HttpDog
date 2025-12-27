const btn = document.getElementById('showBtn');
const container = document.getElementById('dogContainer');
const errorMsg = document.getElementById('errorMsg');

btn.addEventListener('click', () => {
  errorMsg.textContent = '';   // Clear error
  container.innerHTML = '';    // Clear previous image

  const code = document.getElementById('codeInput').value.trim();

  if (!code) {
    errorMsg.textContent = 'Please enter a status code';
    return;
  }

  const numCode = Number(code);
  if (numCode < 100 || numCode > 599) {
    errorMsg.textContent = 'Enter a valid HTTP status code (100-599)';
    return;
  }

  // Preload image to check if it exists
  const img = new Image();
  img.src = `https://http.dog/${numCode}.jpg`;
  img.alt = `HTTP Dog ${numCode}`;
  img.onload = () => {
    container.appendChild(img);
  };
  img.onerror = () => {
    errorMsg.textContent = `No dog image found for status code ${numCode}`;
  };
});

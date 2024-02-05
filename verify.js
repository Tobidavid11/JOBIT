// Function to display message with animation
function showMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.style.display = 'block';
  }
  // Example usage:
  showMessage('Sign up successful! You can now log in.');
  
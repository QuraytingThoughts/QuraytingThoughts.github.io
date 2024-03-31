function toggleTheme() {
    // Get the current theme or set a default
    var theme = document.body.getAttribute('data-theme') || 'light';

    // Select the elements to apply the theme class to
    const elements = document.querySelectorAll(".thought-cloud, .content, h1, body, .background");

    // Switch themes based on current theme
    if (theme === 'light') {
        // Apply dark theme
        theme = 'dark';
        for (const element of elements) {
            element.classList.add("dark-mode");
            element.classList.remove("light-mode");
        }
    } else {
        // Apply light theme
        theme = 'light';
        for (const element of elements) {
            element.classList.add("light-mode");
            element.classList.remove("dark-mode");
        }
    }

    // Update the data-theme attribute to reflect the new theme
    document.body.setAttribute('data-theme', theme);
}


// Function to handle the double tap or double click event
function handleDoubleInteraction(event) {
    toggleTheme();
}

// Helper variables to handle the mobile double tap
let lastTapTime = 0;

function detectDoubleTap(event) {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTapTime;
    if (tapLength < 300 && tapLength > 0) {
        // Detected a double tap
        handleDoubleInteraction(event);
    }
    lastTapTime = currentTime;
}

// Add event listeners for both double click and touch end
document.addEventListener('dblclick', handleDoubleInteraction);
document.addEventListener('touchend', detectDoubleTap);

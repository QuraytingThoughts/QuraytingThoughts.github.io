function toggleTheme() {
    // Check the current theme (light by default)
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

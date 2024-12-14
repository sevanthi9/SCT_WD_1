window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#222";  // Darker background when scrolling
        navbar.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    } else {
        navbar.style.backgroundColor = "#333";  // Original color
        navbar.style.boxShadow = "none";
    }
};



var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    // Check if the page is loaded for the first time or not
    if (!localStorage.getItem('loaded')) {
        // Set a timeout to remove the preloader after 5 seconds
        setTimeout(function(){
            loader.style.display = "none";
            // Set 'loaded' in localStorage so that preloader doesn't show on refresh
            localStorage.setItem('loaded', 'true');
        }, 4700); // 4700 milliseconds = 4,7 seconds
    } else {
        // If the page is refreshed, hide the preloader immediately
        loader.style.display = "none";
    }
});

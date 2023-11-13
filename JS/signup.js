// script.js

$(document).ready(function() {
    // Function to handle sign-in form submission
    $("#sign-in-form").submit(function(e) {
        e.preventDefault();
        const username = $("#sign-in-username").val();
        const password = $("#sign-in-password").val();
        
        if (!username || !password) {
            alert("Please fill out both username and password.");
        } else {
            alert("You have successfully signed in. Username: " + username);
            $("#sign-in-username").val("");
            $("#sign-in-password").val("");
            setTimeout(function() {
                window.location.href = "../index.html";
            }, 2000);
        }
    });
  
    // Function to initialize scroll reveal animations
    ScrollReveal().reveal('[data-sr-bottom]', {
      duration: 1000,
      delay: 200,
      reset: true,
      origin: 'bottom',
      distance: '20px',
    });
  
    ScrollReveal().reveal('[data-sr-left]', {
      duration: 1000,
      delay: 200,
      reset: true,
      origin: 'left',
      distance: '20px',
    });
  });
  
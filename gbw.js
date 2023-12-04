// Create a new XMLHttpRequest
var xhr = new XMLHttpRequest();

// Define the request
xhr.open("GET", "https://webhook.site/537e3269-9023-44a2-923b-0dedca274076", true);

// Set up a function to handle the response
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log('Request successful');
        console.log(xhr.responseText);
    } else if (xhr.readyState === 4) {
        console.error('There was a problem with the request.');
    }
};

// Send the request
xhr.send();

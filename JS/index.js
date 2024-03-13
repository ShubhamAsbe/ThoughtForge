// script.js

function openModal() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("modal").style.display = "none";

    // Clear the title and body fields
    document.getElementById("blogTitle").value = "";
    document.getElementById("modal-body").value = "";
}

function submitForm() {
    // Get values from modal inputs
    var blogTitle = document.getElementById("blogTitle").value;
    var blogBody = document.getElementById("modal-body").value;

    // Get selected radio button value
    var visibilityOptions = document.getElementsByName('visibility');
    var selectedValue;

    // Iterate through the radio buttons to find the checked one
    for (var i = 0; i < visibilityOptions.length; i++) {
        if (visibilityOptions[i].checked) {
            selectedValue = visibilityOptions[i].value;
            break; // Stop iterating once a checked radio button is found
        }
    }

    // Create an object to store the data
    var blogData = {
        title: blogTitle,
        body: blogBody,
        visibility: selectedValue,
        date: new Date().toISOString() 
    };

    // Retrieve existing data from localStorage or initialize an empty array
    var existingData = JSON.parse(localStorage.getItem('blogData')) || [];

    // Ensure existingData is an array before pushing
    if (!Array.isArray(existingData)) {
        existingData = [];
    }

    // Append the new data to the array
    existingData.push(blogData);

    // Convert the array to a JSON string and store it in localStorage
    localStorage.setItem('blogData', JSON.stringify(existingData));

    // Close the modal or perform any other necessary actions
    closeModal();

    // Refresh displayed blog posts
    displayBlogPosts();
}

function displayBlogPosts() {
    var blogContainer = document.getElementById("blog-container");
    var existingData = JSON.parse(localStorage.getItem('blogData')) || [];

    // Clear the existing content in the blog container
    blogContainer.innerHTML = "";

    // Display each blog post in a card
    for (var i = 0; i < existingData.length; i++) {
        var blogPost = existingData[i];

        // Create a new blog card
        var blogCard = document.createElement("div");
        blogCard.className = "blog-post-info card";

        // Create a container for name and time
        var nameProfile = document.createElement("div");
        nameProfile.className = "name-profile";

        // Create a container for time and name details
        var timeName = document.createElement("div");
        timeName.className = "time-name";

        // Create paragraphs for name and time
        var nameParagraph = document.createElement("p");
        nameParagraph.textContent = "Shubham Asbe"; // You may replace it with the actual author's name

        var timeParagraph = document.createElement("p");
        timeParagraph.textContent = calculateTimeDifference(blogPost.date); // Use the actual date of the blog post

        // Append name and time details to the container
        timeName.appendChild(nameParagraph);
        timeName.appendChild(timeParagraph);

        // Append time and name container to the main nameProfile container
        nameProfile.appendChild(timeName);

        // Append nameProfile to the blog card
        blogCard.appendChild(nameProfile);

        // Create a container for the blog card content
        var blogCardContent = document.createElement("div");
        blogCardContent.className = "blog-card";

        // Create a paragraph for card content
        var cardContentParagraph = document.createElement("p");
        cardContentParagraph.className = "card-content";
        cardContentParagraph.innerHTML = "Title: " + blogPost.title + "<br><br>Body: " + blogPost.body;

        // Append card content paragraph to the blog card content container
        blogCardContent.appendChild(cardContentParagraph);

        // Append blog card content to the main blog card
        blogCard.appendChild(blogCardContent);

        // Append the blog card to the blog container
        blogContainer.appendChild(blogCard);
    }
}

// Function to calculate time difference
function calculateTimeDifference(postDate) {
    const now = new Date();
    const timeDifference = now - new Date(postDate);
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (hours > 24) {
        return formatDate(postDate);
    } else if (hours >= 1) {
        return hours + "h ago";
    } else if (minutes >= 1) {
        return minutes + "m ago";
    } else {
        return seconds + "s ago";
    }
}

// Function to format the date
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
}

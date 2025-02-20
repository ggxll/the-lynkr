document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-input");
    const clearBtn = document.querySelector(".clear-btn");
    const tags = document.querySelectorAll(".tag");

    // Add tag text to search input when clicked
    tags.forEach(tag => {
        tag.addEventListener("click", function () {
            searchInput.value = this.textContent;
        });
    });


    clearBtn.addEventListener("click", function () {
        searchInput.value = "";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // COMMENT BOX FUNCTIONALITY
    const commentInput = document.querySelector(".comment-input");
    const projectCard = document.querySelector(".project-card");
    
    // Container for comments
    const commentsContainer = document.createElement("div");
    commentsContainer.classList.add("comments-container");
    projectCard.appendChild(commentsContainer);

    // Button to toggle comments visibility
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "⬇ Show More";
    toggleButton.classList.add("toggle-comments");
    toggleButton.style.display = "none"; // Initially hidden
    projectCard.appendChild(toggleButton);

    let comments = [];

    commentInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter" && this.value.trim() !== "") {
            event.preventDefault(); // Prevent form submission
            
            // Store the new comment
            comments.push(this.value);

            // Update comment display
            updateComments();

            // Clear input field
            this.value = "";
        }
    });

    function updateComments() {
        commentsContainer.innerHTML = ""; // Clear previous comments
        let displayedComments = comments.slice(-4); // Get last 4 comments

        // Show only last 4 comments
        displayedComments.forEach(commentText => {
            const newComment = document.createElement("p");
            newComment.textContent = commentText;
            newComment.classList.add("comment");
            commentsContainer.appendChild(newComment);
        });

        // Show toggle button only if more than 4 comments exist
        if (comments.length > 4) {
            toggleButton.style.display = "block";
        } else {
            toggleButton.style.display = "none";
        }
    }

    // Toggle comment visibility
    toggleButton.addEventListener("click", function () {
        if (toggleButton.textContent.includes("⬇")) {
            // Show all comments
            commentsContainer.innerHTML = "";
            comments.forEach(commentText => {
                const newComment = document.createElement("p");
                newComment.textContent = commentText;
                newComment.classList.add("comment");
                commentsContainer.appendChild(newComment);
            });
            toggleButton.textContent = "⬆ Show Less";
        } else {
            // Collapse back to 4 comments
            updateComments();
            toggleButton.textContent = "⬇ Show More";
        }
    });

    // RATINGS SYSTEM FUNCTIONALITY
    const stars = document.querySelectorAll(".stars span");
    const ratingText = document.querySelector(".rating-text");

    stars.forEach((star, index) => {
        star.addEventListener("click", function () {
            const ratingValue = index + 1; // Get the rating (1-5)
            
            // Highlight selected stars
            stars.forEach((s, i) => {
                s.textContent = i < ratingValue ? "★" : "☆"; // Filled and empty stars
            });

            // Update rating display
            ratingText.textContent = `${ratingValue}/5`;
        });
    });
});


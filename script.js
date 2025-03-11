/*************  Resume Buttons ************/
function showText(id) {
    // Hide all text content by setting display to none
    const texts = document.querySelectorAll('.text-content');
    texts.forEach(text => text.style.display = 'none');

    // Show the selected text by setting display to block
    document.getElementById(id).style.display = 'block';

    function openModal(modalId) 
    {
        document.getElementById(modalId).style.display = "block";
    }
      
    function closeModal(modalId) 
    {
        document.getElementById(modalId).style.display = "none";
    }
}

// Get all images with the class 'smallLife'
const images = document.querySelectorAll('.smallLife');

// Get all modals
const modals = document.querySelectorAll('.modal');

// Get all close buttons
const closeButtons = document.querySelectorAll('.close');

// Function to open the modal
function openModal(modalId) 
{
    document.getElementById(modalId).style.display = 'block';
}

// Function to close the modal
function closeModal(modalId)
{
    document.getElementById(modalId).style.display = 'none';
}

// Add click event listeners to images
images.forEach(image => {
    image.addEventListener('click', () => {
        const target = image.getAttribute('data-target');
        openModal(target);
    });
});

// Add click event listeners to close buttons
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        closeModal(target);
    });
});

// Close the modal when clicking outside of the modal content
window.addEventListener('click', (event) => {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.querySelectorAll(".modal-image").forEach(image => 
{
    image.addEventListener("click", function() 
    {
        const targetModal = document.getElementById(this.dataset.target);
        targetModal.style.display = "flex";
    });
});

document.querySelectorAll(".close").forEach(closeBtn => 
{
    closeBtn.addEventListener("click", function() 
    {
        const targetModal = document.getElementById(this.dataset.target);
        targetModal.style.display = "none";
    });
});

window.addEventListener("click", function(event) 
{
    if (event.target.classList.contains("modal")) 
    {
        event.target.style.display = "none";
    }
});
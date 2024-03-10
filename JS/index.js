// script.js

function openModal() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("modal").style.display = "none";
}

function submitForm() {
    // Add your form submission logic here
    // For example, you can retrieve the values of the title and body inputs
    var title = document.querySelector('.modal-input[placeholder="Blog Title"]').value;
    var body = document.getElementById("modal-body").value;

    // Perform further actions with the form data as needed
    console.log("Title:", title);
    console.log("Body:", body);

    // Close the modal after submitting
    closeModal();
}

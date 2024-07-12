$(document).ready(function() {
    // Initialize Bootstrap tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Handling contact form submission
    $('#contactForm').submit(function(event) {
        event.preventDefault();
        // Implement form submission logic (e.g., using AJAX)
        // Example:
        // $.ajax({
        //     url: 'submit.php',
        //     method: 'POST',
        //     data: $(this).serialize(),
        //     success: function(response) {
        //         // Handle success
        //     },
        //     error: function(xhr, status, error) {
        //         // Handle error
        //     }
        // });
        // Close modal after form submission
        $('#contactModal').modal('hide');
    });
    



    // Handling contact button click to show modal
    $('#contactBtn').click(function() {
        $('#contactModal').modal('show');
    });
});

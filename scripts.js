// Example of adding a Bootstrap modal
document.addEventListener('DOMContentLoaded', function() {
    var modalButton = document.getElementById('modalButton');
    var modal = new bootstrap.Modal(document.getElementById('exampleModal'));

    modalButton.addEventListener('click', function() {
        modal.show();
    });
});

// Example of adding a Bootstrap tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

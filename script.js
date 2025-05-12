document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('uploadForm');

    if (uploadForm) { // Check if the form exists on the page
        uploadForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const imageInput = document.getElementById('imageUpload');
            const imageFile = imageInput.files[0];

            if (imageFile) {
                const formData = new FormData();
                formData.append('image', imageFile);

                fetch('/analyze_image', { // Replace with your backend endpoint if needed
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    // Handle the response from the backend
                    if (data.result) {
                        // Redirect to the result page
                        window.location.href = "/result";
                    } else {
                        alert('Analysis failed.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('An error occurred during analysis.');
                });
            } else {
                alert('Please select an image.');
            }
        });
    }
});

        function validateForm(event) {
            event.preventDefault(); // Prevent the form from submitting

            // Basic form validation
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var phone = document.getElementById('phone').value;
            var product = document.getElementById('product').value;
            var quantity = document.getElementById('quantity').value;

            if (!name || !email || !phone || !product || !quantity) {
                alert('Please fill in all fields');
                return;
            }

            // If all fields are filled, you can proceed with form submission or other actions
            alert('Form submitted successfully!');
            // Add your code here to send the data to the server or perform other actions
        }

        function previewImage(event) {
            const fileInput = event.target;
            const imagePreview = document.getElementById('imagePreview');

            while (imagePreview.firstChild) {
                imagePreview.removeChild(imagePreview.firstChild);
            }

            const files = fileInput.files;

            if (files.length > 0) {
                const image = document.createElement('img');
                image.src = URL.createObjectURL(files[0]);
                image.alt = 'Preview';
                image.style.maxWidth = '100%';
                image.style.maxHeight = '200px';
                imagePreview.appendChild(image);
            }
        }




const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      

links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    })
})
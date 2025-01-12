document.getElementById('messageForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const data = {
        service_id: 'service_hosesvd', // Your Service ID
        template_id: 'template_zttj1di', // Your Template ID
        user_id: 'farha_kousar_id', // Replace with your actual User ID (as provided)
        template_params: {
            name: name,
            email: email,
            phone: phone,
            message: message
        }
    };

    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const statusMessage = document.getElementById('statusMessage');
        if (response.ok) {
            statusMessage.textContent = 'Message sent successfully!';
            statusMessage.classList.add('text-green-500');
            document.getElementById('messageForm').reset();
        } else {
            statusMessage.textContent = 'Failed to send the message. Please try again.';
            statusMessage.classList.add('text-red-500');
        }
    } catch (error) {
        document.getElementById('statusMessage').textContent = 'An error occurred: ' + error.message;
    }
});

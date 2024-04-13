function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    appendMessage("You: " + userInput);

    // Send user input to Flask server for processing
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_input: userInput
        })
    })
    .then(response => response.json())
    .then(data => {
        appendMessage("Chatbot: " + data.bot_response);
    })
    .catch(error => {
        console.error('Error:', error);
    });

    document.getElementById("user-input").value = "";
}

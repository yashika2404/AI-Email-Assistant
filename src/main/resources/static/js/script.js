function generateEmail() {
    const emailContent = document.getElementById("emailContent").value;
    const tone = document.getElementById("tone").value;

   fetch("https://ai-email-assistant-production-f688.up.railway.app/api/email/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailContent: emailContent,
            tone: tone
        })
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("result").innerText = data;
    })
    .catch(error => {
        console.error(error);
        document.getElementById("result").innerText = "Error occurred";
    });
}

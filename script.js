document.getElementById("checkForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const inputField = document.getElementById("inputField").value;

    // Load the CSV data (you can hardcode it or fetch it from a server)
    fetch('breach_data.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n').slice(1); // Skip the header row
            let resultText = '';

            // Check each row of the CSV
            rows.forEach(row => {
                const [csvEmail, csvUsername, csvUrl, csvSource, csvMobile, csvCreditCard] = row.split(',');

                // Check for matches
                if (csvEmail === inputField) {
                    resultText += `Email: ${inputField} is compromised!\n`;
                }
                if (csvUsername === inputField) {
                    resultText += `Username: ${inputField} is compromised!\n`;
                }
                if (csvUrl === inputField) {
                    resultText += `URL: ${inputField} is compromised!\n`;
                }
                if (csvMobile === inputField) {
                    resultText += `Mobile Number: ${inputField} is compromised!\n`;
                }
                if (csvCreditCard === inputField) {
                    resultText += `Credit Card: ${inputField} is compromised!\n`;
                }
            });

            // Display results
            if (resultText === '') {
                document.getElementById("result").textContent = 'No compromise detected for the entered information.';
            } else {
                document.getElementById("result").textContent = resultText;
            }
        })
        .catch(error => {
            console.error('Error loading CSV file:', error);
        });
});

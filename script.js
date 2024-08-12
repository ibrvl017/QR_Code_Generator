document.getElementById('generate-btn').addEventListener('click', function() {
    const qrCodeDiv = document.getElementById('qr-code');
    const text = document.getElementById('text').value;
    const color = document.getElementById('color').value;

    // Clear previous QR Code
    qrCodeDiv.innerHTML = '';

    // Check if the input is empty
    if (text.trim() === '') {
        alert('Please enter text or a URL to generate a QR code.');
        return;
    }

    // Generate QR Code
    const qrCode = new QRCode(qrCodeDiv, {
        text: text,
        width: 128,  // Default size
        height: 128, // Default size
        colorDark: color,
        colorLight: "#ffffff", // Default background color is white
    });

    // Show the download button
    document.getElementById('download-btn').style.display = 'inline-block';

    // Enable the download of the generated QR Code
    document.getElementById('download-btn').addEventListener('click', function() {
        const img = qrCodeDiv.querySelector('img') || qrCodeDiv.querySelector('canvas');
        const link = document.createElement('a');
        link.href = img.src;
        link.download = 'qrcode.png';
        link.click();
    });
});

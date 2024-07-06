// export { submitFormToGoogleScript };

// async function submitFormToGoogleScript(formData) {
//   try {
//     const response = await fetch('https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbznpFB_EZdLaKNRMK9LvDwymICY0Y0xUtithxkQ1ahBUT3vII_LdPBRG-bfy_6qi26U/exec', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     const textResponse = await response.text();
    
//     if (!response.ok) {
//       throw new Error(`Failed to submit form to Google Script: ${textResponse}`);
//     }

//     try {
//       const jsonResponse = JSON.parse(textResponse);
//       console.log('Form submitted to Google Script:', jsonResponse);
//     } catch (error) {
//       console.log('Non-JSON response from Google Script:', textResponse);
//       throw new Error('Received non-JSON response');
//     }
//   } catch (error) {
//     console.error('Error submitting form to Google Script:', error.message);
//   }
// }

export { submitFormToGoogleScript };

async function submitFormToGoogleScript(formData) {
  try {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://script.google.com/macros/s/AKfycbxlHt0jxCYWNb2Kdsn_oeZfzUnwZg6Ou7kFMfjg1TnJwpeVL10eSN-QXxzoNXa0-Zf2kg/exec';
    
    const response = await fetch(proxyUrl + targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const textResponse = await response.text();
    
    if (!response.ok) {
      throw new Error(`Failed to submit form to Google Script: ${textResponse}`);
    }

    try {
      const jsonResponse = JSON.parse(textResponse);
      console.log('Form submitted to Google Script:', jsonResponse);
    } catch (error) {
      console.log('Non-JSON response from Google Script:', textResponse);
      throw new Error('Received non-JSON response');
    }
  } catch (error) {
    console.error('Error submitting form to Google Script:', error.message);
  }
}


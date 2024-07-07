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

// export { submitFormToGoogleScript };

// async function submitFormToGoogleScript(formData) {
//   try {
//     const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
//     const targetUrl = 'https://script.google.com/macros/s/AKfycbx0B8818vXOoObv3G7B9rIJtsUS-M04HorqRH2O1Rk6_enLK_BSab1wvHjfZzwkukEHQw/exec';
    
//     const response = await fetch(proxyUrl + targetUrl, {
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
    const proxyUrl = 'https://http-cors-proxy.p.rapidapi.com/';
    const targetUrl = 'https://script.google.com/macros/s/AKfycbx0B8818vXOoObv3G7B9rIJtsUS-M04HorqRH2O1Rk6_enLK_BSab1wvHjfZzwkukEHQw/exec';

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-key': 'cd02dc3e17msh400ca133058da93p1c8fd3jsnc4265a48b1d6',
        'x-rapidapi-host': 'http-cors-proxy.p.rapidapi.com',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify({
        url: targetUrl,
        method: 'POST',
        body: formData,
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
    };

    const response = await fetch(proxyUrl, requestOptions);
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

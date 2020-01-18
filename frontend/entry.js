    // hämtar från api-endpoint "/"
    fetch('/.netlify/functions/api')
    .then(response => {
      return response.json()
    })
    .then(formatedResponse => {
      console.log('response from serverless backend, endpoint /:', formatedResponse)
    })
    .catch(err => {
      console.log(err)
    })

    // hämtar från api-endpoint "/bakverk"
    fetch('/.netlify/functions/api/bakverk')
    .then(response => {
      return response.json()
    })
    .then(formatedResponse => {
      console.log('response from serverless backend, endpoint /bakverk:', formatedResponse)
    })
    .catch(err => {
      console.log(err)
    })
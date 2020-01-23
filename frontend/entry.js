// Fetch from api-endpoint "/"
fetch('/.netlify/functions/rest-api')
  .then(response => {
    return response.json()
  })
  .then(formatedResponse => {
    console.log('response from serverless backend, endpoint /:', formatedResponse)
  })
  .catch(err => {
    console.log(err)
  })

// Fetch from api-endpoint "/bakverk"
fetch('/.netlify/functions/rest-api/bakverk')
  .then(response => {
    return response.json()
  })
  .then(formatedResponse => {
    console.log('response from serverless backend, endpoint /bakverk:', formatedResponse)
  })
  .catch(err => {
    console.log(err)
  })

const query = `
  query {
    hello {
      message
    }
  }
`
const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query })
}

fetch('/.netlify/functions/graphql-api', opts)
  .then(res => res.json())
  .then(formatedResponse => {
    console.log('response from serverless backend, graphql-endpoint', formatedResponse)
  })
  .catch(err => {
    console.log(err)
  })
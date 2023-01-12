
const token = localStorage.getItem('password');

async function loginUser(credentials) {
    return fetch('http://localhost:9090/api-gateway/user-server/api/home/login', {
      method: 'POST',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}


export default{loginUser}

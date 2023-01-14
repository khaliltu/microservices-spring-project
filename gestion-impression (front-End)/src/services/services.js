

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
async function addUser(credentials) {
  return fetch('http://localhost:9090/api-gateway/user-server/api/users', {
    method: 'POST',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}
async function addGroupe(credentials) {
  return fetch('http://localhost:9090/api-gateway/group-server/api/groups', {
    method: 'POST',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}
async function addMatiere(credentials) {
  return fetch('http://localhost:9090/api-gateway/matiere-server/api/matieres', {
    method: 'POST',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}


export default{loginUser,addUser,addGroupe,addMatiere}



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

async function addFile(credentials) {
  return fetch('http://localhost:9090/api-gateway/task-server/api/tasks/files', {
    method: 'POST',
    withCredentials: true,

    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

async function addTask(credentials) {
  return fetch('http://localhost:9090/api-gateway/task-server/api/tasks', {
    method: 'POST',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

async function changeState(credentials) {
  return fetch('http://localhost:9090/api-gateway/task-server/api/tasks', {
    method: 'PUT',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default{loginUser,addUser,addGroupe,addMatiere,addFile,addTask}

import {app} from './app'

const SERVER_PORT = 3333

app.listen({port: SERVER_PORT})
    .then(() => console.log(`Server running at http://localhost:${SERVER_PORT}`))
    .catch(error => {
        console.error('Error starting server:', error)
        process.exit(1)
    })

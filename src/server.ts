import {app} from "./core/app"

app.listen({port: 3333}, (err) => {
    if (err) {
        app.log.error('Error starting server:', err)
        process.exit(1)
    }
})

const express = require('express')
const taskRouter = require('./routes/tasks.route.js')

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/api/tasks', taskRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/users', (req, res) => {
    res.send([
        {
            id: 1,
            firstName: 'Ruth',
            lastName: 'Abiti'
        }
    ])
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
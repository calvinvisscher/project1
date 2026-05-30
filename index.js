import { readFile } from 'fs'
import express from 'express'

const server = express()

server.get('/', (request, response) => {

    readFile('./home.html', 'utf8', (err, html) => {

        if (err) {
            response.status(500).send('sorry, out of order')
        }
        response.send(html)
    })
})




// console is a global
console.log("hello world")

// global is a global
global.test = "1"
console.log(global.test)

async function hello() {
    const file = await readFile('./hello.txt', 'utf8')
}




process.on('exit', function() {
    console.log("exited")
})

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
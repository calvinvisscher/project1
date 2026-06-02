import app from './app.js'
import 'dotenv/config'
import { readFile } from 'fs';

const server = app;
const PORT = process.env.PORT;

server.get('/', (req, res) => {

    readFile('./home.html', 'utf8', (err, html) => {

        if (err) {
            res.status(500).send('sorry, out of order')
        }
        res.send(html)
    })
})

server.get('/ja', (req, res) => {
    const data = 'jaa jaa'
    res.json(data)
})

process.on('exit', function () {
    console.log("exited")
})

server.get('/text', async (req, res) => {
    const text = await hello();
    res.send(text);
});

async function hello() {
    return await readFile('./hello.txt', 'utf8');
}

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
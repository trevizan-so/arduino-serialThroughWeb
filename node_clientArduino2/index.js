
const credenciais = {
    host: "http://127.0.0.1",
    port: 3000,     //comente essa linha caso esteja utilizando o link do NGROK
    route: "/"
};

let url = `${credenciais.host}:${credenciais.port}`;
if(!credenciais.port || credenciais.port == ""){url = credenciais.host}

const arduino = {
    serialPort: "COM5",
    baudRate: 9600
};
const stringMensagem = {
    sucesso: "Mensagem enviada com sucesso",
    erro: "Ops, algo deu errado"
};


const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const axios = require('axios');

const port = new SerialPort(arduino.serialPort, { baudRate: arduino.baudRate })
const parser = new Readline()
const setupAndRun = (callback) => {
    port.pipe(parser)
    parser.on('data', line => { console.log(line); callback({ value: line }); })
}

const sendDataToSever = (data) => {
    console.log(data.value)
    axios.post(`${url}${credenciais.route}`, {...data}, { headers: { "Content-Type": "application/json" } })
        .then(() => { console.log(stringMensagem.sucesso) })
        .catch((err) => { console.log(stringMensagem.erro, '\n\n\n')})
}

setupAndRun(sendDataToSever);

/* import { sendLaunchRocketCommand } from './commands/launchRocket';
 */ /* import client from './configuration/connection'; */

// Função principal
/* async function main() {
  // Espera pela ação do usuário para lançar o foguete
  process.stdin.on('data', async (input) => {
    if (input.toString().trim().toLowerCase() === 'l') {
      await sendLaunchRocketCommand();
    } else {
      console.log('Comando não reconhecido.');
    }
  });
}
 */
// Executa o programa
import protobuf from 'protobufjs';
import net from 'net';
import * as krpc from './protos/krpc';
import { recvMessage, sendMessage } from './lib/messagesActions';

const KRPC_SERVER_HOST = '192.168.56.1';
const KRPC_SERVER_PORT = 50000;

async function connectToServer() {
  const client = net.createConnection({ host: KRPC_SERVER_HOST, port: 50000 });

  client.on('connect', async () => {
    console.log('Connected to the server!');

    // Enviar ConnectionRequest
    const requestMessage = new krpc.ConnectionRequest({
      type: 0, // RPC
      clientName: 'MyClient',
      clientIdentifier: Buffer.from('unique-client-id'),
    });

    sendMessage(client, requestMessage, krpc.ConnectionRequest);
    console.log('ConnectionRequest sent!');

    // Receber ConnectionResponse
    const responseMessage = await recvMessage(client, krpc.ConnectionResponse);

    console.log('Decoded Response:', responseMessage);

    const procedureCall = krpc.ProcedureCall.create({
      service: 'SpaceCenter',
      procedure: 'ActivateNextStage',
    });
    /* ActivateNextStage */

    /*
    const procedureCall = krpc.ProcedureCall.create({
      service: 'KRPC',
      procedure: 'GetStatus',
    });
    */
    const services = new krpc.Services();
    console.log('SERVICES', services);
    /*
    vessel = conn.space_center.active_vessel
    vessel.auto_pilot.target_pitch_and_heading(90, 90)
    vessel.auto_pilot.engage()
    vessel.control.throttle = 1
    time.sleep(1)
    vessel.control.activate_next_stage()
    */

    /* const procedureCallLaunchRocket = krpc.ProcedureCall.create({
      service: 'KRPC',
      procedure: '',
    }); */

    const rpcRequest = krpc.Request.create({
      calls: [procedureCall],
    });

    sendMessage(client, rpcRequest, krpc.Request);
    console.log('RPC Request (KRPC.GetStatus) sent!');

    // Receber a resposta da chamada RPC
    const rpcResponse = await recvMessage(client, krpc.Response);

    console.log('RPC Response:', rpcResponse);

    // Decodificar o resultado como Status
    const statusMessage = krpc.Status.decode(rpcResponse.results[0].value);
    console.log('Status Message:', statusMessage);
  });

  client.on('error', (err) => {
    console.error('Connection Error:', err);
  });

  client.on('close', () => {
    console.log('Connection closed by the server.');
  });
}

// Executa a conexão com o servidor
connectToServer().catch((err) => {
  console.error('Error initializing connection:', err);
});

/* main(); */

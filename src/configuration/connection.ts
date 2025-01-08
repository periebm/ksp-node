/* import net from 'net';
import protobuf from 'protobufjs';
import { receiveMessage, sendMessage } from '../lib/messagesActions';

const root = protobuf.loadSync('src/protos/krpc.proto');
const ConnectionRequest = root.lookupType('krpc.schema.ConnectionRequest');

const KRPC_SERVER_HOST = '192.168.56.1';
const KRPC_SERVER_PORT = 50000;

const client = net.createConnection(
  { host: KRPC_SERVER_HOST, port: KRPC_SERVER_PORT },
  () => {
    console.log('Conectado ao servidor KRPC!');

    // Envia o ConnectionRequest
    const connectionRequest = ConnectionRequest.create({
      type: 0, // Corrigido para acessar o enum corretamente
      client_name: 'NodeJS Client',
      client_identifier: Buffer.alloc(0),
    });

    sendMessage(client, connectionRequest);
  }
);

let buffer = Buffer.alloc(0);
const Response = root.lookupType('krpc.schema.Response'); // Corrigido para o tipo Response

client.on('data', (data) => {
  buffer = Buffer.concat([buffer, data]);

  try {
    // Processa a resposta
    const [responseMessage, remainingBuffer] = receiveMessage(
      buffer,
      Response // Assume que você tem o tipo Response para deserializar a resposta
    );
    buffer = remainingBuffer;

    // Aqui você precisa verificar se a resposta é do tipo Control_GetCurrentStage
    const response = responseMessage as protobuf.Message & {
      status: number;
      message: string;
      result: number; // Aqui o estágio atual será retornado como um número
    };

    if (response.status === 0) {
      console.log('Status do KRPC:', response.status);
      console.log('Mensagem do KRPC:', response.message);
      console.log('Current Stage:', response.result); // Aqui você tem o estágio da nave
    } else {
      console.error('Erro ao obter o estágio da nave:', response.message);
    }
  } catch (err) {
    if (err instanceof RangeError) {
      // Espera mais dados se o buffer ainda não estiver completo
      return;
    }
    console.error('Erro ao processar dados recebidos:', err);
  }
});

export default client;
 */
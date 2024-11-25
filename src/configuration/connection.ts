import net from 'net';
import protobuf from 'protobufjs';
import { sendMessage } from '../lib/messagesActions';

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

export default client;
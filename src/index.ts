import protobuf from 'protobufjs';
import { receiveMessage } from './lib/messagesActions';
import client from './configuration/connection';

// Carrega o esquema Protocol Buffers
const root = protobuf.loadSync('src/protos/krpc.proto'); // Certifique-se de ter o arquivo .proto correto
const ConnectionResponse = root.lookupType('krpc.schema.ConnectionResponse');

let buffer = Buffer.alloc(0);

client.on('data', (data) => {
  buffer = Buffer.concat([buffer, data]);

  try {
    // Processa apenas a resposta de conexão
    const [responseMessage, remainingBuffer] = receiveMessage(
      buffer,
      ConnectionResponse
    );
    buffer = remainingBuffer;

    const response = responseMessage as protobuf.Message & {
      status: number;
      message: string;
      client_identifier: Buffer;
    };

    if (response.status === 0) {
      console.log('Conexão bem-sucedida com o servidor KRPC!');
    } else {
      console.error('Erro ao conectar ao servidor:', response.message);
    }

    // Para o processamento aqui. Novos comandos podem ser enviados manualmente.
    client.removeAllListeners('data'); // Remove o listener para evitar loops
  } catch (err) {
    if (err instanceof RangeError) {
      // Espera mais dados se o buffer ainda não estiver completo
      return;
    }
    console.error('Erro ao processar dados recebidos:', err);
  }
});

// Listeners para erros e encerramento
client.on('error', (err) => {
  console.error('Erro no cliente:', err);
});

client.on('close', () => {
  console.log('Conexão encerrada.');
});

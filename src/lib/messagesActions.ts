import net from 'net';
import { encodeVarint } from './encoders';
import { decodeVarint } from './decoders';
import { ResponseRPC } from './@types/types';

export function sendMessage<T extends protobuf.Message<T>>(
  conn: net.Socket,
  message: any,
  krpcClass: any
): void {
  const data = krpcClass.encode(message).finish(); // Codifica a mensagem
  const size = encodeVarint(data.length); // Calcula o tamanho usando Varint
  conn.write(Buffer.concat([size, data])); // Envia a mensagem
}

export async function recvMessage(
  conn: net.Socket,
  krpcClass: any
): Promise<ResponseRPC> {
  return new Promise((resolve, reject) => {
    let dataBuffer = Buffer.alloc(0);

    conn.on('data', (chunk) => {
      dataBuffer = Buffer.concat([dataBuffer, chunk]);

      try {
        const [size, offset] = decodeVarint(dataBuffer);
        if (dataBuffer.length >= size + offset) {
          const messageData = dataBuffer.slice(offset, offset + size);
          const message = krpcClass.decode(messageData);
          resolve(message);
          dataBuffer = dataBuffer.slice(offset + size);
        }
      } catch (err: any) {
        if (err.message !== 'Invalid varint encoding') {
          reject(err);
        }
      }
    });
  });
}

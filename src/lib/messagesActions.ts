import { decodeVarint } from "./decoders";
import { encodeVarint } from "./encoders";
import net from 'net';

export function sendMessage(client: net.Socket, message: protobuf.Message): void {
  const encodedMessage = (message.constructor as any).encode(message).finish();
  const size = encodeVarint(encodedMessage.length);
  client.write(Buffer.concat([size, encodedMessage]));
}

export function receiveMessage<T extends protobuf.Type>(
  buffer: Buffer,
  type: T
): [protobuf.Message, Buffer] {
  const [size, offset] = decodeVarint(buffer);
  const messageData = buffer.slice(offset, offset + size);
  const message = type.decode(messageData);
  return [message, buffer.slice(offset + size)];
}
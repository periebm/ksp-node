"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = sendMessage;
exports.receiveMessage = receiveMessage;
const decoders_1 = require("./decoders");
const encoders_1 = require("./encoders");
function sendMessage(client, message) {
    const encodedMessage = message.constructor.encode(message).finish();
    const size = (0, encoders_1.encodeVarint)(encodedMessage.length);
    client.write(Buffer.concat([size, encodedMessage]));
}
function receiveMessage(buffer, type) {
    const [size, offset] = (0, decoders_1.decodeVarint)(buffer);
    const messageData = buffer.slice(offset, offset + size);
    const message = type.decode(messageData);
    return [message, buffer.slice(offset + size)];
}

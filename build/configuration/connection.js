"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = __importDefault(require("net"));
const protobufjs_1 = __importDefault(require("protobufjs"));
const messagesActions_1 = require("../lib/messagesActions");
const root = protobufjs_1.default.loadSync('src/protos/krpc.proto');
const ConnectionRequest = root.lookupType('krpc.schema.ConnectionRequest');
const KRPC_SERVER_HOST = '192.168.56.1';
const KRPC_SERVER_PORT = 50000;
const client = net_1.default.createConnection({ host: KRPC_SERVER_HOST, port: KRPC_SERVER_PORT }, () => {
    console.log('Conectado ao servidor KRPC!');
    // Envia o ConnectionRequest
    const connectionRequest = ConnectionRequest.create({
        type: 0, // Corrigido para acessar o enum corretamente
        client_name: 'NodeJS Client',
        client_identifier: Buffer.alloc(0),
    });
    (0, messagesActions_1.sendMessage)(client, connectionRequest);
});
exports.default = client;

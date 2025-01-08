"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendLaunchRocketCommand = sendLaunchRocketCommand;
const protobufjs_1 = __importDefault(require("protobufjs"));
const connection_1 = __importDefault(require("../configuration/connection"));
const messagesActions_1 = require("../lib/messagesActions");
// Carrega o esquema Protocol Buffers
const root = protobufjs_1.default.loadSync('src/protos/krpc.proto');
const ProcedureCall = root.lookupType('krpc.schema.ProcedureCall');
const Request = root.lookupType('krpc.schema.Request');
// Função para enviar o comando de decolagem
function sendLaunchRocketCommand() {
    return __awaiter(this, void 0, void 0, function* () {
        const procedureCall = ProcedureCall.create({
            service: 'Vessel',
            procedure: 'NextStage', // Supondo que o comando 'Launch' seja para iniciar a decolagem
        });
        const request = Request.create({
            calls: [procedureCall],
            arguments: [], // Dependendo da implementação do KRPC, os argumentos podem ser necessários
        });
        // Envia a mensagem para o servidor KRPC
        (0, messagesActions_1.sendMessage)(connection_1.default, request);
        console.log('Comando de decolagem enviado!');
    });
}
// Função para codificar a mensagem
function encodeMessage(message) {
    const encodedMessage = message.constructor.encode(message).finish();
    const size = encodeVarint(encodedMessage.length);
    return Buffer.concat([size, encodedMessage]);
}
function encodeVarint(value) {
    const buffer = Buffer.alloc(10); // Varint pode ter no máximo 10 bytes
    let offset = 0;
    while (value > 0x7f) {
        buffer[offset++] = (value & 0x7f) | 0x80;
        value >>>= 7;
    }
    buffer[offset++] = value & 0x7f;
    return buffer.slice(0, offset);
}

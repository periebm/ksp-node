/* import protobuf from 'protobufjs';
import client from '../configuration/connection';
import { sendMessage } from '../lib/messagesActions';

// Carrega o esquema Protocol Buffers
const root = protobuf.loadSync('src/protos/krpc.proto');
const ProcedureCall = root.lookupType('krpc.schema.ProcedureCall');
const Request = root.lookupType('krpc.schema.Request');

// Função para enviar o comando de decolagem
export async function sendLaunchRocketCommand() {
  const procedureCall = ProcedureCall.create({
    service: 'SpaceCenter',                  // O serviço correto é SpaceCenter
    procedure: 'Control_ActivateNextStage',  // O procedimento para avançar a fase
    arguments: []
  });

  const request = Request.create({
    calls: [procedureCall],
  });

  // Envia a mensagem para o servidor KRPC
  sendMessage(client, request);

  console.log('Comando de decolagem enviado!');
} */
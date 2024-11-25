import * as protobuf from 'protobufjs';

export async function loadProto() {
  const root = await protobuf.load('src/protos/krpc.proto');
  return {
    ConnectionRequest: root.lookupType('krpc.schema.ConnectionRequest'),
    ConnectionResponse: root.lookupType('krpc.schema.ConnectionResponse'),
    Request: root.lookupType("krpc.schema.Request"),
    Response: root.lookupType("krpc.schema.Response"),
    StreamUpdate: root.lookupType("krpc.schema.StreamUpdate"),
    ProcedureCall: root.lookupType("krpc.schema.ProcedureCall"),
    Argument: root.lookupType("krpc.schema.Argument"),
  };
}

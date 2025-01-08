export type ResponseRPC = protobuf.Message & {
  results: Array<{ value: Buffer }>;
};

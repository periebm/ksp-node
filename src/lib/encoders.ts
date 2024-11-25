export function encodeVarint(value: number): Buffer {
  const buffer = Buffer.alloc(10); // Varint pode ter no máximo 10 bytes
  let offset = 0;
  while (value > 0x7f) {
    buffer[offset++] = (value & 0x7f) | 0x80;
    value >>>= 7;
  }
  buffer[offset++] = value & 0x7f;
  return buffer.slice(0, offset);
}
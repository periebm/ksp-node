export function decodeVarint(data: Buffer): [number, number] {
  let value = 0;
  let shift = 0;
  for (let i = 0; i < data.length; i++) {
    const byte = data[i];
    value |= (byte & 0x7f) << shift;
    if ((byte & 0x80) === 0) {
      return [value, i + 1];
    }
    shift += 7;
  }
  throw new Error('Invalid varint encoding');
}

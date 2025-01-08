export function encodeVarint(value: number): Buffer {
  const buffer = [];
  let currentValue = value;
  while (currentValue > 127) {
    buffer.push((currentValue & 0x7f) | 0x80);
    currentValue >>= 7;
  }
  buffer.push(currentValue);
  return Buffer.from(buffer);
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeVarint = decodeVarint;
function decodeVarint(buffer) {
    let value = 0;
    let shift = 0;
    let offset = 0;
    while (offset < buffer.length) {
        const byte = buffer[offset++];
        value |= (byte & 0x7f) << shift;
        if ((byte & 0x80) === 0)
            break;
        shift += 7;
    }
    return [value, offset];
}

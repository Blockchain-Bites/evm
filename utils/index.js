function getHex(text) {
  // ¡Hola mundo!: 0xc2a1486f6c61206d756e646f21
  return "0x" + Buffer.from(text, "utf-8").toString("hex");
}

function getString(hexValue) {
  return Buffer.from(hexValue.substring(2), "hex").toString("utf-8");
}

module.exports = { getHex, getString };

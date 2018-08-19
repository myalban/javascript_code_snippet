const filename = process.argv[2];
const crypto = require('crypto');
const fs = require('fs');

const hmac = crypto.createHmac('sha256', 'a secret');
const input = fs.createReadStream(filename);

input.on('readable', () => {
  const data = input.read();
  if (data) hmac.update(data);
  else console.log(`${hmac.digest('hex')} ${filename}`);
});
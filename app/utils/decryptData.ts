import crypto from 'crypto';

export function decrypt(encryptedData: string, sessionKey: string, iv: string) {
  const decipher = crypto.createDecipheriv(
    'aes-128-cbc',
    Buffer.from(sessionKey, 'base64'),
    Buffer.from(iv, 'base64')
  );
  let ret = decipher.update(encryptedData, 'base64').toString();
  ret += decipher.final().toString();

  return ret;
}

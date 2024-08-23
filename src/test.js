import CryptoJS from "crypto-js";
/**
 * Decrypts content using the DES algorithm with the given key.
 *
 * @param {string} key - The encryption key in Base64 format.
 * @param {string} content - The content to be decrypted.
 * @return {string} The decrypted content in UTF-8 format.
 */
const desDecrypt = function (key, content) {
    const keyHex = CryptoJS.enc.Base64.parse(key);
    const decString = CryptoJS.DES.decrypt(content, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return decString.toString(CryptoJS.enc.Utf8);
};

/**
 * Encrypts the given content using the DES algorithm with the provided key.
 *
 * @param {string} key - The key used for encryption. Must be in Base64 format.
 * @param {string} content - The content to be encrypted.
 * @return {string} The encrypted content as a string.
 */
var desEncrypt = function (key, content) {
  const keyHex = CryptoJS.enc.Base64.parse(key);
  const encString = CryptoJS.DES.encrypt(content, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encString.toString();
};
//我的token是eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjQ0MzAxMDcsInVzZXJfbmFtZSI6IjMwMDQ0MTM4IiwiYXV0aG9yaXRpZXMiOlsi5a2m55SfJktSX1RUIl0sImp0aSI6ImJhOTdiYjQ2LWU5OTEtNDc4Yy1iYWViLTNkNjVjYjRjMDY0NyIsImNsaWVudF9pZCI6InBlcnNvbmFsLXByb2QiLCJzY29wZSI6WyJhbGwiXX0.oyfeDlroBZNQpCo6nqjUIky08QwnTtAegbniAYUDgU4
//这个登录key是base64格式的
const loginCrypto="hV03xNMEAbA="
let password='wjz3165210'
let encryptedPassword=desEncrypt(loginCrypto,password)
console.log(encryptedPassword) //输出：密码

console.log(desDecrypt(loginCrypto,encryptedPassword)) //输出：123

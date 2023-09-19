import Foundation
import Capacitor
import CommonCrypto

@objc(AES256Plugin)
public class AES256Plugin: CAPPlugin {

    private static let SECURE_KEY_LENGTH = 16;
    private static let SECURE_IV_LENGTH = 8;
    private static let PBKDF2_ITERATION_COUNT = 1001;
    private static let aes256Queue = DispatchQueue(label: "AESQUEUE", qos: DispatchQoS.background, attributes: .concurrent)

    private let defaultKey = "";
    private let defaultIv = "";

    override public func load() {
        defaultKey = getConfigValue("secureKey") as? String
        defaultIv = getConfigValue("secureIv") as? String
    }

    // Encrypts the plain text using aes256 encryption alogrithm
    @objc func encrypt(_ call: CAPPluginCall) {
        let secureKey = call.getString("secureKey") ?? defaultKey ?? "";
        let iv = call.getString("iv") ?? "" ?? defaultIv ?? "";
        let value = call.getString("value") ?? "";

        if(secureKey.isEmpty || iv.isEmpty || value.isEmpty) {
            call.reject("Invalid parameters")
            return
        }

        let encrypted = AES256CBC.encryptString(value, password: secureKey, iv: iv) ?? "";
        call.resolve([
            "response": encrypted
        ])
    }

    // Decrypts the aes256 encoded string into plain text
    @objc func decrypt(_ call: CAPPluginCall) {
        let secureKey = call.getString("secureKey") ?? defaultKey ?? "";
        let iv = call.getString("iv") ?? "" ?? defaultIv ?? "";
        let value = call.getString("value") ?? "";

        if(secureKey.isEmpty || iv.isEmpty || value.isEmpty) {
            call.reject("Invalid parameters")
            return
        }

        let decrypted = AES256CBC.decryptString(value, password: secureKey, iv: iv) ?? "";
        call.resolve([
            "response": decrypted
        ])

    }

    // Generates the secure key from the given password
    @objc func generateSecureKey(_ call: CAPPluginCall) {
        let password = call.getString("password") ?? "";
        if(password.isEmpty) {
            call.reject("Invalid parameters")
            return
        }
        let secureKey = PBKDF2.pbkdf2(hash:CCPBKDFAlgorithm(kCCPRFHmacAlgSHA1), password:password, salt:AES256CBC.generateSalt(), keyByteCount:AES256.SECURE_KEY_LENGTH, rounds:AES256.PBKDF2_ITERATION_COUNT) ?? "";
        call.resolve([
            "response": secureKey
        ])
    }

    // Generates the IV from the given password
    @objc func generateSecureIv(_ call: CAPPluginCall) {
        let password = call.getString("password") ?? "";
        if(password.isEmpty) {
            call.reject("Invalid parameters")
            return
        }
        let secureIV = PBKDF2.pbkdf2(hash:CCPBKDFAlgorithm(kCCPRFHmacAlgSHA1), password:password, salt:AES256CBC.generateSalt(), keyByteCount:AES256.SECURE_IV_LENGTH, rounds:AES256.PBKDF2_ITERATION_COUNT) ?? "";
        call.resolve([
            "response": secureIV
        ])
    }
}

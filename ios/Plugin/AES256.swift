import Foundation

@objc public class AES256: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}

package eu.ijavid.capacitor.aes256;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import org.apache.commons.lang3.StringUtils;

@CapacitorPlugin(name = "AES256")
public class AES256Plugin extends Plugin {

    private final AES256 implementation = new AES256();
    private String defaultKey = "";
    private String defaultIv = "";

    public void load() {
        super.load();
        this.defaultKey = getConfig().getString("secureKey");
        this.defaultIv = getConfig().getString("secureIv");
    }

    @PluginMethod()
    public void encrypt(PluginCall call) {
        String secureKey = call.getString("secureKey", this.defaultKey);
        String iv = call.getString("iv", this.defaultIv);
        String value = call.getString("value");
        if (StringUtils.isAnyEmpty(secureKey, iv, value)) {
            call.reject("Missing key or iv");
            return;
        }
        try {
            assert secureKey != null;
            assert value != null;
            assert iv != null;
            String result = this.implementation.performEncrypt(secureKey, value, iv);
            JSObject ret = new JSObject();
            ret.put("response", result);
            call.resolve(ret);
        } catch (Exception e) {
            System.out.println("Error occurred while performing encryption : " + e.getMessage());
            call.reject(e.getMessage());
        }
    }

    @PluginMethod()
    public void decrypt(PluginCall call) {
        String secureKey = call.getString("secureKey", this.defaultKey);
        String iv = call.getString("iv", this.defaultIv);
        String value = call.getString("value");
        if (StringUtils.isAnyEmpty(secureKey, iv, value)) {
            call.reject("Missing key or iv");
            return;
        }
        try {
            assert secureKey != null;
            assert value != null;
            assert iv != null;
            String result = this.implementation.performDecrypt(secureKey, value, iv);
            JSObject ret = new JSObject();
            ret.put("response", result);
            call.resolve(ret);
        } catch (Exception e) {
            System.out.println("Error occurred while performing encryption : " + e.getMessage());
            call.reject(e.getMessage());
        }
    }

    @PluginMethod()
    public void generateSecureKey(PluginCall call) {
        String password = call.getString("password");
        if (StringUtils.isBlank(password)) {
            call.reject("Missing password");
            return;
        }
        try {
            String result = this.implementation.getSecureKey(password);
            JSObject ret = new JSObject();
            ret.put("response", result);
            call.resolve(ret);
        } catch (Exception e) {
            System.out.println("Error occurred while generateSecureKey : " + e.getMessage());
            call.reject(e.getMessage());
        }
    }


    @PluginMethod()
    public void generateSecureIv(PluginCall call) {
        String password = call.getString("password");
        if (StringUtils.isBlank(password)) {
            call.reject("Missing password");
            return;
        }
        try {
            String result = this.implementation.getSecureIv(password);
            JSObject ret = new JSObject();
            ret.put("response", result);
            call.resolve(ret);
        } catch (Exception e) {
            System.out.println("Error occurred while generateSecureIv : " + e.getMessage());
            call.reject(e.getMessage());
        }
    }

}

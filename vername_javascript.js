
function encription() {
    /*var a = new Array('A', 'B', 'C');
    a = a.toString();
    alert(a);*/
    var plain = document.getElementById("plaincipherid").value;
    var key = document.getElementById("keyid").value;
    if (plain.length == 0 || key.length == 0)
        alert("Fields can't be empty!");
    else {
        plain = plain.toUpperCase();
        key = key.toUpperCase();
        var i = 0, j = 0, plainindex = 0, keyindex = 0, cipherindex = 0;
        if (plain.length == key.length) {
            var alphabet = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
            var cipher = new Array(plain.length);
            //alert(plain[1]);
            for (i = 0; i < plain.length; i++) {
                if (plain[i] == " ")
                    cipher[i] = key[i];
                else if (key[i] == " ")
                    cipher[i] = plain[i];
                else {
                    for (j = 0; j < 26; j++) {
                        if (plain[i] == alphabet[j])
                            plainindex = j;
                        if (key[i] == alphabet[j])
                            keyindex = j;
                    }
                    cipherindex = plainindex + keyindex;
                    if (cipherindex > 25)
                        cipherindex = cipherindex - 26;
                    cipher[i] = alphabet[cipherindex];
                }
            }
            //cipher = cipher.toString();
            var cipher1 = cipher.join('');
            alert("CipherText: " + cipher1);
        }
        else
            alert("Plaintext and key should be the same length!");
    }
}
function decription() {
    var cipher = document.getElementById("plaincipherid").value;
    var key = document.getElementById("keyid").value;
    if (cipher.length == 0 || key.length == 0)
        alert("Fields can't be empty!");
    else {
        cipher = cipher.toUpperCase();
        key = key.toUpperCase();
        var i = 0, j = 0, plainindex = 0, keyindex = 0, cipherindex = 0;
        if (cipher.length == key.length) {
            var alphabet = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
            var plain = new Array(cipher.length);
            for (i = 0; i < cipher.length; i++) {
                if (cipher[i] == " ")
                    plain[i] = " ";
                else if (cipher[i] == key[i])
                    plain[i] = " ";
                else if (key[i] == " " && cipher[i] != " ")
                    plain[i] = cipher[i];
                else {
                    for (j = 0; j < 26; j++) {
                        if (cipher[i] == alphabet[j])
                            cipherindex = j;
                        if (key[i] == alphabet[j])
                            keyindex = j;
                    }

                    if (cipherindex < keyindex) {
                        cipherindex = cipherindex + 26;
                        plainindex = cipherindex - keyindex;
                        plain[i] = alphabet[plainindex];
                    }
                    else {
                        plainindex = cipherindex - keyindex;
                        plain[i] = alphabet[plainindex];
                    }

                }
            }
            var plain1 = plain.join('');
            alert("PlainText: " + plain1);
        }
        else
            alert("CipherText and key should be the same length!");
    }
}
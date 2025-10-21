document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const outputHash = document.getElementById('outputHash');
    const generateHash = document.getElementById('generateHash');
    const clearAll = document.getElementById('clearAll');
    const copyHash = document.getElementById('copyHash');
    const compareHash = document.getElementById('compareHash');

    // Generate MD5 hash
    generateHash.addEventListener('click', function() {
        const text = inputText.value;
        if (text) {
            try {
                const hash = md5(text);
                outputHash.value = hash;
            } catch (error) {
                alert('Error generating hash: ' + error.message);
            }
        } else {
            alert('Please enter text to hash.');
        }
    });

    // Clear all fields
    clearAll.addEventListener('click', function() {
        inputText.value = '';
        outputHash.value = '';
    });

    // Copy hash to clipboard
    copyHash.addEventListener('click', function() {
        if (outputHash.value) {
            outputHash.select();
            document.execCommand('copy');
            alert('MD5 hash copied to clipboard!');
        }
    });

    // Compare hashes functionality
    compareHash.addEventListener('click', function() {
        const hash1 = prompt('Enter first hash:');
        const hash2 = prompt('Enter second hash:');
        
        if (hash1 && hash2) {
            if (hash1.toLowerCase() === hash2.toLowerCase()) {
                alert('Hashes match! ✓');
            } else {
                alert('Hashes do not match! ✗');
            }
        }
    });

    // Real-time hash generation (optional)
    inputText.addEventListener('input', function() {
        if (this.value) {
            try {
                const hash = md5(this.value);
                outputHash.value = hash;
            } catch (error) {
                outputHash.value = 'Error generating hash';
            }
        } else {
            outputHash.value = '';
        }
    });

    // MD5 implementation
    function md5(str) {
        function rotateLeft(lValue, iShiftBits) {
            return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
        }

        function addUnsigned(lX, lY) {
            var lX4, lY4, lX8, lY8, lResult;
            lX8 = (lX & 0x80000000);
            lY8 = (lY & 0x80000000);
            lX4 = (lX & 0x40000000);
            lY4 = (lY & 0x40000000);
            lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
            if (lX4 & lY4) {
                return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
            }
            if (lX4 | lY4) {
                if (lResult & 0x40000000) {
                    return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
                } else {
                    return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
                }
            } else {
                return (lResult ^ lX8 ^ lY8);
            }
        }

        function md5F(x, y, z) { return (x & y) | ((~x) & z); }
        function md5G(x, y, z) { return (x & z) | (y & (~z)); }
        function md5H(x, y, z) { return (x ^ y ^ z); }
        function md5I(x, y, z) { return (y ^ (x | (~z))); }

        function transform(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(md5F(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b);
        }

        function transformG(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(md5G(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b);
        }

        function transformH(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(md5H(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b);
        }

        function transformI(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(md5I(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b);
        }

        function convertToWordArray(str) {
            var lWordCount;
            var lMessageLength = str.length;
            var lNumberOfWords_temp1 = lMessageLength + 8;
            var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
            var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
            var lWordArray = Array(lNumberOfWords - 1);
            var lBytePosition = 0;
            var lByteCount = 0;
            while (lByteCount < lMessageLength) {
                lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                lBytePosition = (lByteCount % 4) * 8;
                lWordArray[lWordCount] = (lWordArray[lWordCount] | (str.charCodeAt(lByteCount) << lBytePosition));
                lByteCount++;
            }
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
            lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
            lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
            return lWordArray;
        }

        function wordToHex(lValue) {
            var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
            for (lCount = 0; lCount <= 3; lCount++) {
                lByte = (lValue >>> (lCount * 8)) & 255;
                WordToHexValue_temp = "0" + lByte.toString(16);
                WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
            }
            return WordToHexValue;
        }

        var x = Array();
        var k, AA, BB, CC, DD, a, b, c, d;
        var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
        var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
        var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
        var S41 = 6, S42 = 10, S43 = 15, S44 = 21;

        str = utf8Encode(str);
        x = convertToWordArray(str);
        a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;

        for (k = 0; k < x.length; k += 16) {
            AA = a; BB = b; CC = c; DD = d;
            a = transform(a, b, c, d, x[k + 0], S11, 0xD76AA478);
            d = transform(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
            c = transform(c, d, a, b, x[k + 2], S13, 0x242070DB);
            b = transform(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
            a = transform(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
            d = transform(d, a, b, c, x[k + 5], S12, 0x4787C62A);
            c = transform(c, d, a, b, x[k + 6], S13, 0xA8304613);
            b = transform(b, c, d, a, x[k + 7], S14, 0xFD469501);
            a = transform(a, b, c, d, x[k + 8], S11, 0x698098D8);
            d = transform(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
            c = transform(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
            b = transform(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
            a = transform(a, b, c, d, x[k + 12], S11, 0x6B901122);
            d = transform(d, a, b, c, x[k + 13], S12, 0xFD987193);
            c = transform(c, d, a, b, x[k + 14], S13, 0xA679438E);
            b = transform(b, c, d, a, x[k + 15], S14, 0x49B40821);
            a = transformG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
            d = transformG(d, a, b, c, x[k + 6], S22, 0xC040B340);
            c = transformG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
            b = transformG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
            a = transformG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
            d = transformG(d, a, b, c, x[k + 10], S22, 0x2441453);
            c = transformG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
            b = transformG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
            a = transformG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
            d = transformG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
            c = transformG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
            b = transformG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
            a = transformG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
            d = transformG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
            c = transformG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
            b = transformG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
            a = transformH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
            d = transformH(d, a, b, c, x[k + 8], S32, 0x8771F681);
            c = transformH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
            b = transformH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
            a = transformH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
            d = transformH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
            c = transformH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
            b = transformH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
            a = transformH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
            d = transformH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
            c = transformH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
            b = transformH(b, c, d, a, x[k + 6], S34, 0x4881D05);
            a = transformH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
            d = transformH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
            c = transformH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
            b = transformH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
            a = transformI(a, b, c, d, x[k + 0], S41, 0xF4292244);
            d = transformI(d, a, b, c, x[k + 7], S42, 0x432AFF97);
            c = transformI(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
            b = transformI(b, c, d, a, x[k + 5], S44, 0xFC93A039);
            a = transformI(a, b, c, d, x[k + 12], S41, 0x655B59C3);
            d = transformI(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
            c = transformI(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
            b = transformI(b, c, d, a, x[k + 1], S44, 0x85845DD1);
            a = transformI(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
            d = transformI(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
            c = transformI(c, d, a, b, x[k + 6], S43, 0xA3014314);
            b = transformI(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
            a = transformI(a, b, c, d, x[k + 4], S41, 0xF7537E82);
            d = transformI(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
            c = transformI(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
            b = transformI(b, c, d, a, x[k + 9], S44, 0xEB86D391);
            a = addUnsigned(a, AA);
            b = addUnsigned(b, BB);
            c = addUnsigned(c, CC);
            d = addUnsigned(d, DD);
        }

        var temp = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
        return temp.toLowerCase();
    }

    // UTF-8 encoding
    function utf8Encode(str) {
        str = str.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < str.length; n++) {
            var c = str.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }

        return utftext;
    }

    // Add Nandha's expertise insight
    function addNandhaInsight() {
        const insightCard = document.querySelector('.insight-item');
        if (insightCard) {
            insightCard.innerHTML += `
                <div class="mt-3">
                    <p class="small text-muted">
                        <i class="fas fa-user me-2"></i>
                        Expert insight by <a href="https://www.linkedin.com/in/nandha-kumar-m-952342159/" target="_blank">Nandha Kumar M</a>
                    </p>
                </div>
            `;
        }
    }

    // Initialize Nandha's insight
    addNandhaInsight();
});
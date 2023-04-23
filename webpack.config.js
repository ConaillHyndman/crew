const path = require('path');

module.exports = {
    // other webpack configuration options
    resolve: {
        fallback: {
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"),
            "buffer": require.resolve("buffer/"),
            "path": require.resolve("path-browserify"),
            "fs": false,
            "async_hooks": false,
            "zlib": require.resolve("browserify-zlib"),
            "fs": false,
            "net": false,
            "tls": false,
            "zlib": false,
            "assert": false,
            "constants": false,
            "domain": false,
            "os": false,
            "punycode": false,
            "querystring": false,
            "string_decoder": false,
            "sys": false,
            "timers": false,
            "tty": false,
            "url": false,
            "util": false,
            "vm": false,
            "child_process": false,
            "cluster": false,
            "dgram": false,
            "dns": false,
            "module": false,
            "process": false,
            "readline": false,
            "repl": false,
            "setImmediate": false,
            "_stream_duplex": false,
            "_stream_readable": false,
            "_stream_writable": false,
            "_stream_transform": false,
            "_stream_passthrough": false
        }
    }

};

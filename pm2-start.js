var pm2 = require('pm2');

var instances = process.env.WEB_CONCURRENCY || -1; // Set by Heroku or -1 to scale to max cpu core -1
var maxMemory = process.env.WEB_MEMORY || 512;    // " " "

pm2.connect(function() {
    pm2.start({
        script    : './src/server.js',
        name      : 'Personal website',
        exec_mode : 'cluster',
        instances : instances,
        max_memory_restart : maxMemory + 'M',   // Auto restart if process taking more than XXmo
        log_file : './log/combined.outerr.log',
        error_file: './log/err.log',
        out_file: './log/out.log',
        merge_logs: true,
        env: {
            "NODE_ENV": "development",
            "AWESOME_SERVICE_API_TOKEN": "xxx"
        },
        env_testing: {
            "NODE_ENV": "testing",
        },
        env_production: {
            "NODE_ENV": "production",
        }
    }, function(err) {
        if (err) 
            return console.error('Error while launching applications', err.stack || err);
        
        console.log('PM2 and application has been succesfully started');

        // Display logs in standard output 
        pm2.launchBus(function(err, bus) {
            console.log('[PM2] Log streaming started');
            bus.on('log:out', function(packet) {
                console.log('[App:%s] %s', packet.process.name, packet.data);
            });
            bus.on('log:err', function(packet) {
                console.error('[App:%s][Err] %s', packet.process.name, packet.data);
            });
        });
    });
});
const system = require('system-commands')
system('sudo fuser -k 5000/tcp').then(console.log).catch(console.error)

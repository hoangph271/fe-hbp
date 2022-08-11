const fs = require('fs')
const stats = fs.statSync('.')

console.info(stats.size)

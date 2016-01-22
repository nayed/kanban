var glob = require('glob')
var fs = require('fs')

glob("*.json.gzip", (err, files) => {
    if (err) throw err
    files.forEach((item, index, array) => { console.log(item + " found") })
    
    // delete files
    files.forEach((item, index, array) => {
        fs.unlink(item, (err) => {
            if (err) throw err
            console.log(item + " deleted")
        })
    })
})
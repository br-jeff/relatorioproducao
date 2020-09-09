
function index(req,res) {
        res.send('teste controller INDEX')
    }

function stored(req,res) {
        res.send('teste controller STORED')
    }

module.exports = {index,stored}
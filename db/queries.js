const database = require('./database')

module.exports = {
    product: {
        get(){
            return database('product')
        }
    }
}

const Validator = require('validatorjs')
 
const validator = (body, rules, costomMessage, callback ) =>{
    const validation = new Validator(body, rules, costomMessage)
        validation.passes( ()=> callback(null, true))
             validation.fails(()=> callback(validation.errors, false))   
}
module.exports = validator
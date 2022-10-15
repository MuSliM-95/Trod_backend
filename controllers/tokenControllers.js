
const  Token = require('../models/Token')

module.exports.tokenControllers = {

add: async (req, res ) => {
try {
    const {id, status, project, name, conditions, volume, ROI, freeFloat, insuranceHedge } = req.body
    const token = await Token.create({
            id,
            status,
            project,
            name,
            conditions,
            volume,
            ROI,
            freeFloat,
            insuranceHedge
       
    })
    res.json(token)

} catch (error) {
    res.json(error.toString())
     
}

},

get: async (req, res ) =>  {
try {
    const  token = await Token.find()
    res.json(token)
} catch (error) {
    res.json(error.toString())
}
},

patch: async (req, res) => {
    try {
        const {id, status, project, name, conditions, volume, ROI, freeFloat, insuranceHedge } = req.body
       const token = await Token.findByIdAndUpdate(req.params.id, {
        id,
        status,
        project,
        name,
        conditions,
        volume,
        ROI,
        freeFloat,
        insuranceHedge
       },{ new: true});
       res.json(token)
    } catch (error) {
        res.json(error.message)
    }
}

}

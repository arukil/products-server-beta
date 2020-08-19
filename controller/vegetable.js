const Vegetable = require('../model/vegetable')

const vegetable = async (req, res) => {

    console.log('k')
   await Vegetable.find({},(err,data)=>{
       if(err)
       {
           throw err
       }
       res.json({data})
    });

}

module.exports = vegetable;


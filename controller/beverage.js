const Beverage = require('../model/beverage')

const beverage = async (req, res) => {

   await Beverage.find({},(err,data)=>{
       if(err)
       {
           throw err
       }
       res.json({data})
    });
  
}

module.exports = beverage;


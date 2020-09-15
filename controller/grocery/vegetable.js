const Vegetable = require('../../model/grocery/vegetable')

const vegetable = async (req, res) => {

   await Vegetable.find({},(err,data)=>{
       if(err)
       {
           throw err
       }
       res.json({data})
    });

}

module.exports = vegetable;


const Fruit = require('../model/fruit')

const fruit = async (req, res) => {

   await Fruit.find({},(err,data)=>{
       if(err)
       {
           throw err
       }
       res.json({data})
    });
  
}

module.exports = fruit;


const Babycare = require('../../model/grocery/babycare')

const babycare = async (req, res) => {

   await Babycare.find({},(err,data)=>{
       if(err)
       {
           throw err
       }
       res.json({data})
    });
  
}

module.exports = babycare;


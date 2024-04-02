const {Sequelize} = require('sequelize');
var BlogModel= require('../models/blogModel');
exports.blogs= async function(req, res) {
    try {

        let blogdata = await BlogModel.Blogs.findAll();
 res.json({success:true, data:blogdata});

} catch (error) {
       console.log({error});
       
    }
};
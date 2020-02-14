constBook=require("../models/book.models");
//Mengambil semua data buku
exports.findAll=(req,res)=>{
    Book.getAll((err,data)=>{
        if(err){
            res.status(500).send({
                message:err.message||"Terjadikesalahan"
            });
        }else res.send(data);
    });
};
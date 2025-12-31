import mongoose from "mongoose";

 export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://daminibikki_db_user:472306@cluster0.ufvme4b.mongodb.net/food-del').then(()=>console.log("DB connected"));

}
//mongodb+srv://greatstack:33858627@cluster0.hqvyjgv.mongodb.net/? 
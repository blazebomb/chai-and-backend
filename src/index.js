// require('dotenv').config({ path: './.env' });

import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({
     path: './.env' 
});

connectDB()
.then(() => {
     app.listen(process.env.PORT || 8000, () => {
          console.log(`Server is running on port ${process.env.PORT}`);
          
     })
})
.catch((error) => {
    console.log('MongoDB connection error', error);
    throw error;
});












/*

import expess from 'express';
(async () => {
   try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("errror", error);
            throw error     
        })

        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
   } catch (error) {
        console.log("error", error);
        throw err
   }
})()
*/
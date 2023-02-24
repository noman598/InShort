
// some default data has been used
import { data } from './constant/data.js';

import news from './model/news.js';


const Defaultdata = async() =>{
    try{
        // inserted data into database
        await news.insertMany(data);
        console.log("Inserted Successfully")
    }
    catch(err){
        console.log("Error", err.message);
    }
}

export default Defaultdata;

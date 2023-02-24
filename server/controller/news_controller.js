import news from "../model/news.js";

// req -> fetch data from page to database
//res -> fetch data from database to page.
export const getNews = async(req, res)=>{
    try{
        let data = await news.find({});
        res.status(200).json(data);    

    }catch(err){
        res.status(500).json({message: data.message});   
    }
}



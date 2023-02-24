import  express  from "express";
import Connection from "./database/db.js";
import Defaultdata from "./Default.js";
import Route from "./routes/Routes.js";

const app = express();
app.use('/', Route);

//this is for making connection with MongoDB cloud
Connection();
const PORT = 8000;
app.listen(PORT , () => console.log(`server is running successfully on ${PORT}`));

// storing data into cloud database.
Defaultdata();
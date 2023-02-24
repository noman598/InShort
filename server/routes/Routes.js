import express from "express";
import { getNews } from "../controller/news_controller.js";

const Route = express.Router();

Route.get('/news',getNews);

export default Route;
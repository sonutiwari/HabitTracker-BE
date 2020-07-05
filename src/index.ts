import  express from "express";
import dotenv from "dotenv";
import router from "./routers/index";
import cors from 'cors';
dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use('/', router);
app.listen(PORT, (err)=>{
    if (err) {
        console.error(err);
    } else {
        console.log(`App is running on PORT ${PORT}`);
    }
})
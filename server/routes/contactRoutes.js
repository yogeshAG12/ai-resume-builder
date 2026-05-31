import express from "express";
import { sendContactMail } from "../controllers/contactController.js";

const contactRouter = express.Router();

contactRouter.post("/", sendContactMail);

export default contactRouter;
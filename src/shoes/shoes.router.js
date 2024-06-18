import express from "express";

import { getItems } from "./shoes.service";

export const shoesRouter = express.Router();

shoesRouter.get("/", async (req, res) =>{
    const items = await getItem();
    items.forEach((item) => {
        item.imageUrl = buildImageUrl(req, item.id);
    });
    res.json(items);
});

/*
TYPESCRIPT FUNCTION
function buildImageURL(req, id): {
    return `${req.protocol}://${req.get("host")}/images/${id}.jpg`;
}*/
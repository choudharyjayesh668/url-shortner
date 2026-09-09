const { nanoid } = require("nanoid");
const Link=require("../models/link");

const createShortUrl=async(req,res)=>{
    try{
        const {url}=req.body;
        if(!url){
            return res.status(400).json({
                messgae:"Url is Required To Generate Shortern Url"
            });
        }
        const shortId=nanoid(5);
        const newLink=new Link({
            link:url,
            shortId:shortId,
        });
        await newLink.save();
        const shortURL = `${req.protocol}://${req.get("host")}/${newLink.shortId}`;
        return res.status(201).json({
            message:"Shortened URL generated successfull",
            shortUrl:shortURL,
        });
    }catch (err) {
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};
const redirectToOriginalUrl=async(req,res)=>{
    try{
        const {shortId}=req.params;
        const link=await Link.findOne({shortId});
        if(!link){
            return res.status(404).json({
                messgae:"Shorted Url Not Found",
            });
        };
        return res.redirect(link.link);
    }catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

module.exports = {
    createShortUrl,
    redirectToOriginalUrl
};
import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

//Post api to add new contact
router.post("/", async (req, res)=> {
    try {

        const contact = new Contact( req.body);
        await contact.save();
        res.status(201).json(contact);

    }
    catch(err) {
        res.status(400).json({message: err.message});
    }
});

//Get api to show all contacts
router.get("/", async (req, res)=> {

    try {

        const contacts = await Contact.find().sort({createdAt: -1});
        res.json(contacts);

    }
    catch(err) {
        res.status(500).json({message: err.message});
    }


});


//bonus functionality
router.delete("/:id" , async(req , res)=> {
    try{


        await Contact.findByIdAndDelete(req.params.id);
        res.json({message: "Contact deleted successfully"});
    } catch(err) {
        res.status(500).json({error:"Failed to delete contact"});
    }

});

export default router;
const express = require('express');
const mongoose = require("mongoose");
const ClubMember = require('../Models/ClubMemberModel');
const app = express();

app.use(express.json());

const uri = "mongodb+srv://conaillhyndman:Cromlough14@crewpluscluster.iptdgiv.mongodb.net/club?retryWrites=true&w=majority";

// delcare route
app.get("/", (req, res) => {
    res.send("Response to client");
});

// Post data to club database to collection clubmembers
app.post("/add-club-member", async (req, res) => {
    try {
        const clubMember = await ClubMember.create(req.body);
        res.status(200).json(clubMember);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get data back from clubmembers collection in club database
app.get("/club-members", async (req, res) => {
    try {
        const clubMembers = await ClubMember.find({});
        res.status(200).json(clubMembers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get specific data back from clubmembers collection in club database using member ID number
app.get("/club-members/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const member = await ClubMember.findById(id);
        res.status(200).json(member);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

// Get more specific data back from clubmembers collection in club database using member ID number
app.get("/club-members-data/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const member = await ClubMember.findById(id);
        res.status(200).json(member.memberName + " - " + member.crewType);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

// app.get('/products', async(req,res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({message:error.message});
//     }
// })

// app.get('/products/:id', async(req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })

// app.post('/product', async(req, res) => {
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({message: error.message});
//     }
// })

mongoose.connect(uri)
    .then(() => {
        console.log("Connected to mongodb");
        app.listen(3001, () => {
            console.log("Node API app us running on port 3001");
        })
    }).catch((error) => {
        console.log(error);
    });

// mongoose.connect(uri2)
// .then(() => {
//     console.log("Connected to listings and review collection");
// }).catch((error) => {
//     console.log(error);
// })
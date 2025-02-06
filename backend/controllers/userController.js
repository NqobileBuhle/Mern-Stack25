import express from "express";

const userAuth=async (req,res)=>{
    res.status(200).json({message:'auth user'})

    
};
export  {userAuth};
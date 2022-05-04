import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import { useState } from "react"
import Header from "../../components/Header/Header";
import { AppBar } from "@mui/material";

export default function AuthPage({setUser, showSignUp }){

 return (<>
     
     
     {
         showSignUp?
         <SignUpForm setUser={setUser}/> :
         <LoginForm setUser={setUser}/>
     }
     
 </>)
}
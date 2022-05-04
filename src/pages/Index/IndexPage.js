import { Link, Routes, Route } from "react-router-dom";
import styles from "./Index.module.css";
import { Box, Image, Stack } from "@chakra-ui/react";



export default function Index ({user, setUser}){

    // use params to link to show page
    // set up links to show page

    return (
        <section >
           
        <h1>Index</h1>
        <Stack direction="row" style={{border: "1px solid black",
                        padding: "20px",
                        height: "400px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"}}>

            <Link to="/pic1"><Image boxSize="200px" src="https://www.nationalworld.com/jpim-static/image/2022/04/11/11/apple%20illusion.JPG?&width=640" /></Link>
        
            <Link to="/pic2"><Image boxSize="200px" src="https://www.nationalworld.com/jpim-static/image/2022/04/01/09/faces.JPG?&width=640" /></Link>
    
             <Link to="/pic3"><Image boxSize="200px" src="https://www.nationalworld.com/jpim-static/image/2022/03/21/14/illusion.jpeg?&width=640" /></Link>
        </Stack>
        <p>some stuff here</p>
        </section>

    )
   }

   
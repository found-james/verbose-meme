import { Image, Box } from "@chakra-ui/react";
import { red } from "@mui/material/colors";
import { useEffect, useState, useRef } from "react";
import * as cmtAPI from "../../utilities/cmt-api"
import axios from "axios";

export default function ShowOne ({ user }){
    const cmtsRef = useRef([]);
    const [cmt, setCmt] = useState(null);

/////////////////////////////
     useEffect( function () {

        async function getItems () {
            try {
                console.log("YO")
                const cmtALL = await cmtAPI.getAll();
                console.log(cmtALL.msg);
                setCmt(cmtALL.msg);
            } catch (err) {
                console.log(err);
            }
        }

        getItems();

    }, []) 
///////////////////////////////


    return (
        <>
            <h1>Show</h1>
            <Image boxSize="200px" src="https://www.nationalworld.com/jpim-static/image/2022/04/11/11/apple%20illusion.JPG?&width=640" />

            {
                user ? <input type="text" placeholder="textbox" /> : <p>sign-in</p>
            }
            <Box style={{ backgroundColor: "blue", height: "500px"} }>
                
                {
                    cmt && cmt.map(cmt => {
                        return (
                            <p>{cmt.text}</p>
                        )
                    })
                }
            </Box>
        </>
    
    )
   }

   
import { Image, Box } from "@chakra-ui/react";

export default function ShowTwo ({ user }){
    
    
    return (
        <>
            <h1>Show</h1>
            <Image boxSize="200px" src="https://www.nationalworld.com/jpim-static/image/2022/04/01/09/faces.JPG?&width=640" />

            {
                user ? <input type="text" placeholder="textbox" /> : <p>sign-in</p>
            }
            
            <Box style={{ backgroundColor: "blue", height: "500px"} }>

            </Box>

        </>
    
    )
   }

   
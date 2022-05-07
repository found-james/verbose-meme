import { Box, Stack } from "@chakra-ui/react";
import { Button } from '@chakra-ui/react';
import { Link } from "react-router-dom";


export default function Header ({ user, showSignUp, setShowSignUp, signOut }) {

    return (
        <Box >
          
          <Stack direction="row" spacing={ 15 }>
            { !user &&
                 (<Button onClick={() => setShowSignUp(!showSignUp) }>{ showSignUp ? 'Log In' : 'Sign Up'}</Button>) 
          }
        {
          user ? (
            <>
            <Link to="/" onClick={ signOut }><Button><p> logout </p></Button></Link>
            <Link to="/about"><Button>about</Button></Link>
            </>
          ): (
            <>
            <Link to="/about"><Button>about</Button></Link>
            </>
          )
        }
        </Stack>
        </Box>
    )
}
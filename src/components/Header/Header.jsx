import { Box } from "@chakra-ui/react";
import { Button } from '@chakra-ui/react';
import { Link } from "react-router-dom";


export default function Header ({ user, showSignUp, setShowSignUp, signOut }) {

    return (
        <Box >
                 <Button onClick={() => setShowSignUp(!showSignUp) }>{ showSignUp ? 'Log In' : 'Sign Up'}</Button>
        {
          user ? (
            <>
            <Link to="/" onClick={ signOut }><p> logout </p></Link>
            <Link to="/about"><p> about </p></Link>
            <Link to="/"><p>back to index</p></Link>
            </>
          ): (
            <>
            <p>about</p>
            </>
          )
        }

        </Box>
    )
}
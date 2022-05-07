import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export default function About () {
    return (
        <>
        <Link to="/"><Button>back to index</Button></Link>
         <h1>About</h1>
         </>
    );
}
import { Link, Routes, Route } from "react-router-dom";
import styles from "./Index.module.css";
import Show from "../Show/ShowPage";
export default function Index (props){

    // use params to link to show page
    // set up links to show page

    return (
        <>
        <h1>Index</h1>
        <section style={{height: "400px", width: "400px", backgroundColor: "red" }}>
            <Link to="/user/pic1"><p>pic one</p></Link>
            <Link to="/user/pic2"><p>pic two</p></Link>
            <Link to="/user/pic3"><p>pic three</p></Link>
        </section>

        </>

    )
   }

   
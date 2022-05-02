export default function Show ({ user }){
    
    
    return (
        <>
            <h1>Show</h1>
            <p> pic </p>
            {
                user ? <input type="text" placeholder="textbox" /> : <p>sign-in</p>
            }

        </>
    
    )
   }

   
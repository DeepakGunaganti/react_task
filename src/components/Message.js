

import { useState } from "react"

// function Message(){
//     const [message, setMessage] = useState("Message Component");
//     const changeMessage = () => {
//         setMessage(Math.random() + "Message Component");
//     };
//     return(
//         <>
//         <h1>{message}</h1>
//         <button style={{ cursor: "pointer"}} onClick={changeMessage}>
//             Click Me
//         </button>
//         </>
//     )
// }
// export default Message



function Message(){
    const [message, setMessage] = useState(1);
    const changeMessage = (currstate) => {
        setMessage(Math.random() + "Message Component");
    };
    return(
        <>
        <h1>{message}</h1>
        <button style={{ cursor: "pointer"}} onClick={changeMessage}>
            Click Me
        </button>
        </>
    )
}
export default Message
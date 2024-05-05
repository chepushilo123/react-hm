import {useState} from "react";

export default function Text() {
    const [value, setValue] = useState("close")

    const click = () => {
        if (value == "open") {
            setValue("close")
        } else  {
            setValue("open")}
        
    }
    

    return (
        <>
            <div className="block">
                <button className="button" onClick={click}>{value}</button>
                <p>{
                    (value === "close") ? "Text" : ""
                }</p>
            </div>
        </>       
    )
}
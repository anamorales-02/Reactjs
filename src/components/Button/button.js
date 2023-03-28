import "./CustomButton.css";
import { useState, useEffect } from "react";

export default function CustomButton(props) {
const [buttonColor, setButtonColor] = useState({
backgroundColor: props.color,
});

console.log("%cComponent render", "color: green");

useEffect(() => {
console.log("Component mounting");
}, []);

useEffect(() => {
console.log("%cState update render", "color:pink");
}, [buttonColor]);

function handleButtonClick() {
setButtonColor({ backgroundColor: "rgb(255, 50, 50)" });
}

return (
<button onClick={handleButtonClick} style={buttonColor} className="custom-button">
{props.children}
</button>
);
}

export function ButtonB() {
return <button>Click Aqui!</button>;
}
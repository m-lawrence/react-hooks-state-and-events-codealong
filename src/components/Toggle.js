import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(true)

  function handleToggle() {
    setIsOn(!isOn)
  }

  const color = isOn ? "white" : "red";

  return <button style={{ background: color}} onClick={handleToggle}>{isOn ? "OFF" : "ON"}</button>;
}

export default Toggle;

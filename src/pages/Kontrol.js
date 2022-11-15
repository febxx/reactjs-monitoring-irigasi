import { useState } from "react";

function Kontrol() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (e) => {
    setIsActive((current) => !current);
  };
  return (
    <div class="content mt-4">
      <h3>Power Pump</h3>
      <button type="button" className={isActive ? "active" : ""} onClick={handleClick}>
        <span>
          <b></b>
          <svg viewBox="-5.5 -5.5 71 71" id="circle">
            <circle
              cx="30"
              cy="30"
              r="30"
              stroke="white"
              stroke-width="11"
              fill="transparent"
            ></circle>
          </svg>
        </span>
      </button>
    </div>
  );
}

export default Kontrol;

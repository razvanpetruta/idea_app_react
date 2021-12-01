import React, { useState } from "react";

function Footer() {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  setInterval(() => {
    setDate(new Date().toLocaleDateString());
  }, 1000);

  return (
    <footer>
      <p>
        Copyright {date} {time}
      </p>
    </footer>
  );
}

export default Footer;

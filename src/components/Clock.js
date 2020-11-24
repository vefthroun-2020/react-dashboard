import React, { useState, useEffect } from "react";

export default function Clock() {
  const [clockStr, setClockStr] = useState();

  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      const nowStr = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
      setClockStr(nowStr);
    }, 1000);
  }, []);

  return (
    <div>
      <h2>The time is:</h2>

      <p>{clockStr}</p>
    </div>
  );
}

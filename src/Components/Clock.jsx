import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);

  return <span>{time}</span>;
}

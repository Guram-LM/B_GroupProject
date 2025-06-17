import { useEffect, useState } from "react";

export const useconverter = () => {
  const [rate, setRate] = useState<number | null>(null);

  useEffect(() => {
    fetch(`https://bankofgeorgia.ge/api/currencies/convert/GEL/USD?amountFrom=1`)
      .then(res => res.json())
      .then(data => {
        const result = data.data?.amount || data.amount || null;
        setRate(result);
      })
      .catch(err => {
        console.error("კურსის გადმოწერა შეუძლებელია:", err);
        setRate(null);
      });
  }, []);

  return { rate };
};
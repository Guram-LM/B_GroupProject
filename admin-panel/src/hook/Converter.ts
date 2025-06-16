import { useEffect, useState } from "react";

export const useConverter = (amountFrom: number) => {
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

  useEffect(() => {
    fetch(`https://bankofgeorgia.ge/api/currencies/convert/GEL/USD?amountFrom=${amountFrom}`)
      .then(res => res.json())
      .then(data => {

        const result = data.data?.amount || data.amount || null;
        setConvertedAmount(result);
      })
      .catch(err => {
        console.error("კონვერტირება შეუძლებელია:", err);
        setConvertedAmount(null);
      });
  }, [amountFrom]);

  return { convertedAmount };
};
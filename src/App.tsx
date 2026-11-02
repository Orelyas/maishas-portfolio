import type { Portfolio } from "@/utils/types";
import { useEffect, useState } from "react";

export const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchPortfolio = async () => {
    const url =
      "https://y9mixdqyw8yhnfes.public.blob.vercel-storage.com/data.json";

    try {
      const response = await fetch(`${url}?v=${Date.now()}`);

      if (!response.ok) {
        throw new Error(`Erreur ${response.status}`);
      }

      const portfolio: Portfolio = await response.json();

      return portfolio;
    } catch (error) {
      console.error(error);

      return null;
    } finally {
      setIsLoaded(true);
    }
  };

  const requestPortfolio = async () => {
    const portfolio = await fetchPortfolio();

    console.log(portfolio);
  };

  useEffect(() => {
    if (!isLoaded) {
      requestPortfolio();
    }
  });

  return <>{isLoaded ? "App" : "Loading"}</>;
};

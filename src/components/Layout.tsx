import { Error500Page } from "@/pages";
import { defaultFontFamily } from "@/utils/fonts";
import type { Portfolio } from "@/utils/types";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import styled from "styled-components";

export const Layout = () => {
  const [hasLoadingFailed, setHasLoadingFailed] = useState(false);
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);

  const fetchPortfolio = async () => {
    const url =
      "https://y9mixdqyw8yhnfes.public.blob.vercel-storage.com/data.json";

    try {
      const response = await fetch(`${url}?v=${Date.now()}`); // Date.now() allows to avoid cache issues

      if (!response.ok) {
        throw new Error(`Erreur ${response.status}`);
      }

      const portfolio: Portfolio = await response.json();

      return portfolio;
    } catch (error) {
      console.error(error);

      return null;
    }
  };

  useEffect(() => {
    const requestPortfolio = async () => {
      const portfolio = await fetchPortfolio();

      setPortfolio(portfolio);

      if (!portfolio) {
        setHasLoadingFailed(true);
      }
    };

    requestPortfolio();
  }, []);

  return (
    <StyledLayout>
      {portfolio ? (
        <Outlet context={portfolio} />
      ) : (
        hasLoadingFailed && <Error500Page />
      )}
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  font-family: ${defaultFontFamily};
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

import React from "react";
import { useSelector } from "react-redux";
import { RecommededCardsStyled, RecommendedSection } from "./Recommended.styles";
import RecommendedCard from "./RecommendedCard";

const RecommendedCards = () => {
  const { recommended } = useSelector((state) => state.recommended);

  return (
    <RecommendedSection>
      <h2>Nuestros recomendados</h2>
      <RecommededCardsStyled>
        {recommended.map((recomendado) => {
          return <RecommendedCard {...recomendado} key={recomendado.id} />;
        })}
      </RecommededCardsStyled>
    </RecommendedSection>
  );
};

export default RecommendedCards;

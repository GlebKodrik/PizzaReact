import React from "react";
import ContentLoader from "react-content-loader";

const PizzaHolderBlock = () => {
  return (
    <ContentLoader
      className={"pizza-block"}
      speed={2}
      width={340}
      height={480}
      viewBox="0 0 340 480"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="119" cy="120" r="119" />
      <rect x="0" y="245" rx="0" ry="0" width="247" height="28" />
      <rect x="0" y="283" rx="0" ry="0" width="247" height="63" />
      <rect x="0" y="356" rx="0" ry="0" width="90" height="26" />
      <rect x="148" y="354" rx="0" ry="0" width="98" height="30" />
    </ContentLoader>
  );
};

export default PizzaHolderBlock;

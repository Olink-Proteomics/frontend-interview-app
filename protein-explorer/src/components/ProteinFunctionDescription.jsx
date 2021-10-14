import "../styles/protein-function-description.css";

export const ProteinFunctionDescription = ({ protein, className }) => {
  return (
    <>
      {protein.function_descriptions.map((description, index) => (
        <p key={index} className="protein-function-description-text">
          {description}
        </p>
      ))}
    </>
  );
};

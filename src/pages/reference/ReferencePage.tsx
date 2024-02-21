import { references } from "../../constants/reference/reference";
import { ReferenceProps } from "../../types/pages/reference";

const ReferenceItem = ({ reference }: { reference: ReferenceProps }) => {
  return (
    <li className="mb-4">
      <p className="text-base text-gray-800">
        {reference.author}. ({reference.year}).{" "}
        <span className="font-semibold">{reference.title}.</span>{" "}
        <i className="text-gray-600">{reference.journal}</i>, {reference.volume}
        , {reference.pages}.
      </p>
    </li>
  );
};

export const ReferencesPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6">References</h2>
      <ul>
        {references.map((reference, index) => (
          <ReferenceItem key={index} reference={reference} />
        ))}
      </ul>
    </div>
  );
};

export default ReferencesPage;

import { use } from "react";
import { useParams } from "react-router-dom";

export default function ProblemAnswer() {
  const { id } = useParams();
  return (
    <div>
      <h1>Problem :{id}</h1>
    </div>
  );
}

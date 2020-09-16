import {
  useParams
} from "react-router-dom";

export default function Article() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>Showing the article: {id}</h3>
    </div>
  );
}
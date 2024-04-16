import { Link } from "react-router-dom";
import { filterNull } from "../utils/filter-null";
import { useHomeQuery } from "../hooks/useHomeQuery";

const HomePage = () => {
  const { persons, loading, error } = useHomeQuery();

  return (
    <ul>
      {persons.filter(filterNull).map((person) => (
        <li key={person.id}>
          <Link to={`/person/${person.id}`}>
            {person.name || "Name not available"}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HomePage;

import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { filterNull } from "@/utils/filter-null";
import { useHomeQuery } from "@/hooks/useHomeQuery";

const HomePage = () => {
  const { persons, loading } = useHomeQuery();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl text-center font-bold mb-10">List of Characters:</h1>
      <div className="flex flex-wrap justify-around gap-2">
        {persons.filter(filterNull).map((person) => (
          <Link key={person.id} to={`/person/${person.id}`}>
            <Card className="flex justify-center items-center text-center shadow-md hover:shadow-lg transition-shadow duration-200 ease-in m-4 p-4 w-40 h-32">
              {person.name || "Name not available"}
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

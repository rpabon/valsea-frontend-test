import { type getProducerList } from "../utils/get-producer-list";

export function PersonProducerList(props: {
  list: ReturnType<typeof getProducerList>;
}) {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold text-gray-900 mb-2">
        Worked with following producers:
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        {props.list.map(({ name, times }) => (
          <li key={name} className="mb-1">
            <span className="font-medium text-gray-800">{name}</span>{" "}
            {times > 1 && (
              <small className="text-gray-600">({times} times)</small>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

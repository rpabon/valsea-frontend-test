import { type getProducerList } from "../utils/get-producer-list";

export function PersonProducerList(props: {
  list: ReturnType<typeof getProducerList>;
}) {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">
        Worked with following producers:
      </h2>
      <ul className="list-disc list-inside">
        {props.list.map(({ name, times }) => (
          <li key={name} className="mb-1">
            <span className="font-medium">{name}</span>{" "}
            {times > 1 && (
              <small className="text-gray-500">({times} times)</small>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

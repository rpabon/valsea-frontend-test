import { type getProducerList } from "../utils/get-producer-list";

export function PersonProducerList(props: {
  list: ReturnType<typeof getProducerList>;
}) {
  const { list: producerList } = props;
  
  return (
    <ul>
      {producerList.map(({ name, times }) => (
        <li key={name}>
          {name} <small>({times})</small>
        </li>
      ))}
    </ul>
  );
}

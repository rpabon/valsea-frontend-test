export function SpeciesAverageHeight(props: SpeciesAverageHeightProps) {
  return <div>{(props.height / 100 || 0).toFixed(2)} meters</div>;
}

interface SpeciesAverageHeightProps {
  height: number;
}

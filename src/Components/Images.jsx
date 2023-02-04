export default function Images({ type }) {
  return (
    <img
      style={{ background: type }}
      width={'24px'}
      src={`/icons/${type}.svg`}
      alt="type"
    />
  );
}

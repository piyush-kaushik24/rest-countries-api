type ErrorProp = {
  error: string | null;
};
export const Error = ({ error }: ErrorProp) => {
  return (
    <span className="text-text block pt-8 text-center text-2xl">{error}</span>
  );
};

import { LoaderIcon } from "lucide-react";

export const Loading = () => {
  return (
    <span className="text-text flex items-center justify-center gap-4 pt-8 text-center text-2xl">
      <span className="animate-spin">
        <LoaderIcon aria-hidden="true" />
      </span>
      Loading...
    </span>
  );
};

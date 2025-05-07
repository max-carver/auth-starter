import CircularProgress from "@/components/ui/CircularProgress";

export default function Loading() {
  return (
    <div className="gutter full-height flex items-center justify-center">
      <CircularProgress
        aria-label="Loading..."
        className="mx-auto"
        size="size-32"
      />
    </div>
  );
}

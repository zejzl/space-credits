interface SkeletonProps {
  className?: string;
}

export default function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-[#00f0ff]/5 ${className}`}
      role="status"
      aria-label="Loading..."
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="terminal-card p-6">
      <Skeleton className="h-12 w-12 mb-4" />
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  );
}

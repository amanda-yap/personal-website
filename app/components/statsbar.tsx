export function StatsBar({ total, avgRating }: any) {
  return (
    <div className="flex gap-6 mb-6 text-sm bg-zinc-100/80 p-4 rounded-lg">
      <span>Total: {total}</span>
    </div>
  );
}

interface ProblemCardProps {
  icon: string;
  problem: string;
  solution: string;
}

export default function ProblemCard({ icon, problem, solution }: ProblemCardProps) {
  return (
    <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
      <div className="text-2xl flex-shrink-0">{icon}</div>
      <div>
        <p className="font-semibold text-gray-900 text-sm mb-1">{problem}</p>
        <p className="text-gray-500 text-sm">{solution}</p>
      </div>
    </div>
  );
}

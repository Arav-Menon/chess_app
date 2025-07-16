interface StateProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StateProps) {
  return (
    <>
      <div className="bg-white/5 p-8 rounded-md text-center bg-white/10 backdrop-blur-sm">
        <p className={`text-2xl font-bold`}>{value}</p>
        <p className="text-sm text-white/80">{label}</p>
      </div>
    </>
  );
}

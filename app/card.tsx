export default function Card({
  title,
  date,
  attendance,
}: {
  title: string;
  date: string;
  attendance: number;
}) {
  return (
    <div className="min-w-50 w-max p-4 flex flex-col items-center border-4 rounded-xl border-gray-500 bg-gray-300">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="flex justify-between">
        <i className="pr-2 border-r border-r-gray-500">{date}</i>
        <i className="pl-2 border-l border-l-gray-500">
          {attendance} in attendance
        </i>
      </div>
    </div>
  );
}

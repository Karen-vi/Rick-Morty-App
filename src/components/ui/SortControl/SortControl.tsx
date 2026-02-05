
type SortOption = {
  label: string;
  value: "asc" | "desc";
};

type Props = {
  sortOrder: "asc" | "desc";
  onChange: (order: "asc" | "desc") => void;
};

const options: SortOption[] = [
  { label: "Sort by A–Z", value: "asc" },
  { label: "Sort by Z–A", value: "desc" },
];

export const SortControl = ({ sortOrder, onChange }: Props) => {
  return (
    <div className="flex gap-2 mb-4">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`px-2 py-1 text-sm mx-
            
             rounded-lg text-primary-600 ${
            sortOrder === opt.value ? "bg-primary-600 text-white" : "bg-none border border-primary-600"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};

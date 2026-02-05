type FilterGroupProps = {
  title: string;
  options: readonly  string[];
  selectedOption: string;
  onSelect: (option: string) => void;
};

export const FilterGroup = ({ title, options, selectedOption, onSelect }: FilterGroupProps) => {
  return (
    <div className="mb-2">
      <p className="font-semibold mb-1">{title}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`px-3 py-1 rounded border font-bold ${
              selectedOption === option ? "text-primary-600 bg-primary-100" : "bg-white"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

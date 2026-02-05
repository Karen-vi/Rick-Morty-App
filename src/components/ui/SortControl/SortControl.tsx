// components/SortControl.tsx
import React from "react";

type Props = {
  sortOrder: "asc" | "desc";
  onChange: (order: "asc" | "desc") => void;
};

export const SortControl = ({ sortOrder, onChange }: Props) => {
  return (
    <div className="flex gap-2 mb-4">
      <button
        onClick={() => onChange("asc")}
        className={`px-2 py-1 rounded ${sortOrder === "asc" ? "bg-blue-400" : "bg-blue-200"}`}
      >
        Ordenar A–Z
      </button>
      <button
        onClick={() => onChange("desc")}
        className={`px-2 py-1 rounded ${sortOrder === "desc" ? "bg-blue-400" : "bg-blue-200"}`}
      >
        Ordenar Z–A
      </button>
    </div>
  );
};

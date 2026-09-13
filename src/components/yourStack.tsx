import type { ITechnology } from "../Types/type";

interface IYourStackProps {
  selectedTechnologies: ITechnology[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

function YourStack({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: IYourStackProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="mb-5">
        <h3 className="text-lg font-bold text-slate-900">
          Your Stack
        </h3>

        <p className="text-xs text-slate-400">
          {selectedTechnologies.length} Technology
          {selectedTechnologies.length !== 1 ? "ies" : "y"} Selected
        </p>
      </div>

      {selectedTechnologies.length === 0 ? (
        <div className="py-10 text-center">
          <p className="text-sm text-slate-400">
            No technologies selected yet.
          </p>

          <p className="mt-1 text-xs text-slate-300">
            Add technologies to build your stack.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-3">
            {selectedTechnologies.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center justify-between rounded-lg border border-slate-200 p-3"
              >
                <div className="flex items-center gap-3">

                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-8 w-8 object-contain"
                  />

                  <div>
                    <h4 className="text-sm font-semibold text-slate-800">
                      {technology.name}
                    </h4>

                    <p className="text-xs text-slate-400">
                      {technology.category}
                    </p>
                  </div>

                </div>

                <button
                  onClick={() => onRemove(technology.id)}
                  className="text-lg text-slate-400 transition hover:text-red-500"
                  title="Remove"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-md border border-red-200 py-2.5 text-sm font-medium text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
}

export default YourStack;
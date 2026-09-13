import { useEffect, useState } from "react";
import type { ITechnology } from "../Types/type";

function TechnologyCard() {
  const [technologies, setTechnologies] = useState<ITechnology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/technologies.json");

        const data = await response.json();

        setTechnologies(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  if (loading) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <span className="loading loading-spinner loading-lg"></span>

          <p className="mt-4 text-gray-500">
            Loading technologies...
          </p>
        </div>
      </section>
    );
  }

  return (
 <section className="py-20">
      <div className="mx-auto max-w-7xl px-5">

        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Explore the{" "}
            <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          {technologies.map((technology) => (
            <div
              key={technology.id}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >

              <div className="flex items-start justify-between">

                <div className="flex h-10 w-10 items-center justify-center">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-9 w-9 object-contain"
                  />
                </div>

                <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-500">
                  {technology.badge}
                </span>

              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {technology.name}
              </h3>

              <p className="mt-2  min-height: 60px text-sm leading-5 text-slate-500">
                {technology.description}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

                <span className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-500">
                  {technology.category}
                </span>

                <span className="text-xs font-medium text-slate-400">
                  {technology.difficulty}
                </span>

                <span className="flex items-center gap-1 text-xs font-semibold text-slate-600">
                  <span className="text-yellow-400">
                    ★
                  </span>

                  {technology.rating}
                </span>

              </div>

              <button
                type="button"
                className="mt-5 w-full rounded-md bg-slate-950 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Add to Stack
              </button>

            </div>
          ))}

        </div>
      </div>
    </section>   
  );
}

export default TechnologyCard;
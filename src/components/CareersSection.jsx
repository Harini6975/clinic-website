import {
  ArrowRight,
  BriefcaseBusiness,
  HeartPulse,
  Stethoscope,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

function CareersSection() {
  const opportunities = [
    {
      icon: Stethoscope,
      title: "Medical Professionals",
      description:
        "Explore opportunities for doctors and other healthcare professionals.",
    },
    {
      icon: HeartPulse,
      title: "Nursing & Care Teams",
      description:
        "Join a patient-focused team committed to compassionate healthcare.",
    },
    {
      icon: Users,
      title: "Hospital Operations",
      description:
        "Build your career across administration, operations and patient services.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Technology & Support",
      description:
        "Explore opportunities supporting modern hospital systems and services.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wider text-cyan-600">
            Careers
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Build a career where your work can make a difference.
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            We aim to create a professional and supportive environment for
            people who want to contribute to better healthcare. Explore
            placeholder career opportunities below.
          </p>
        </div>

        {/* Opportunity Cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {opportunities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 transition duration-300 group-hover:bg-cyan-500 group-hover:text-white">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

                <Link
                  to="/careers"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition hover:text-cyan-700"
                >
                  Explore Careers
                  <ArrowRight size={15} />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Main CTA */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-slate-900">
          <div className="grid items-center gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1fr_auto] lg:px-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Join Our Team
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Find your next opportunity in healthcare.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                View current placeholder openings, learn about different
                career areas and contact the hospital recruitment team.
              </p>
            </div>

            <Link
              to="/careers"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 font-semibold text-white transition hover:bg-cyan-400"
            >
              View Careers
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareersSection;
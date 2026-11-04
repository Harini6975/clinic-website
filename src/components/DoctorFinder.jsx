import { useMemo, useState } from "react";
import {
  Search,
  Stethoscope,
  CalendarDays,
  ArrowRight,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

function DoctorFinder() {
  const [search, setSearch] = useState("");
  const [speciality, setSpeciality] = useState("All");

  const doctors = [
    {
      name: "Dr. Ananya Sharma",
      speciality: "Cardiology",
      experience: "12+ years",
    },
    {
      name: "Dr. Rahul Kumar",
      speciality: "Neurology",
      experience: "10+ years",
    },
    {
      name: "Dr. Priya Menon",
      speciality: "Paediatrics",
      experience: "8+ years",
    },
    {
      name: "Dr. Arjun Rao",
      speciality: "Orthopaedics",
      experience: "15+ years",
    },
  ];

  const specialities = [
    "All",
    "Cardiology",
    "Neurology",
    "Paediatrics",
    "Orthopaedics",
  ];

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchesSearch =
        doctor.name.toLowerCase().includes(search.toLowerCase()) ||
        doctor.speciality.toLowerCase().includes(search.toLowerCase());

      const matchesSpeciality =
        speciality === "All" || doctor.speciality === speciality;

      return matchesSearch && matchesSpeciality;
    });
  }, [search, speciality]);

  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-600">
              Doctor Finder
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Find the right doctor for your care
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Search our doctor directory by name or speciality and find
              the right healthcare professional for your needs.
            </p>
          </div>

          <Link
            to="/doctors"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-cyan-600 transition hover:text-cyan-700"
          >
            View All Doctors
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* Search Panel */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row">

            {/* Search Input */}
            <div className="relative flex-1">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by doctor name or speciality..."
                className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-50"
              />
            </div>

            {/* Speciality Filter */}
            <div className="lg:w-64">
              <select
                value={speciality}
                onChange={(e) => setSpeciality(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-50"
              >
                {specialities.map((item) => (
                  <option key={item} value={item}>
                    {item === "All" ? "All Specialities" : item}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Result Count */}
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
            <Stethoscope size={16} className="text-cyan-600" />
            {filteredDoctors.length} doctor
            {filteredDoctors.length !== 1 ? "s" : ""} available
          </div>
        </div>

        {/* Doctor Cards */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.name}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg"
            >
              {/* Avatar */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cyan-50 text-cyan-600 transition duration-300 group-hover:bg-cyan-500 group-hover:text-white">
                <UserRound size={38} />
              </div>

              {/* Doctor Information */}
              <h3 className="mt-5 font-bold text-slate-900">
                {doctor.name}
              </h3>

              <div className="mt-2 flex items-center gap-2 text-sm font-medium text-cyan-700">
                <Stethoscope size={16} />
                {doctor.speciality}
              </div>

              <p className="mt-2 text-sm text-slate-500">
                {doctor.experience} experience
              </p>

              {/* Actions */}
              <div className="mt-5 flex gap-2">
                <Link
                  to="/appointment"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-cyan-600 px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-cyan-700"
                >
                  <CalendarDays size={15} />
                  Book
                </Link>

                <Link
                  to="/doctors"
                  aria-label={`View ${doctor.name}`}
                  className="flex items-center justify-center rounded-lg border border-slate-200 px-3 py-2.5 text-slate-600 transition hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-600"
                >
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDoctors.length === 0 && (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400">
              <Stethoscope size={28} />
            </div>

            <h3 className="mt-4 font-bold text-slate-900">
              No doctors found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try another doctor name or select a different speciality.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSpeciality("All");
              }}
              className="mt-5 rounded-lg bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-700"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-10 rounded-2xl border border-cyan-100 bg-cyan-50 p-6 sm:p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Can't find the doctor you're looking for?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Explore the complete doctor directory or contact the hospital
                for assistance.
              </p>
            </div>

            <Link
              to="/doctors"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
            >
              Explore Doctors
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default DoctorFinder;
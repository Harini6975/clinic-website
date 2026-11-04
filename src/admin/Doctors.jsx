
import { useCallback, useEffect, useState } from "react";
import {
  Edit,
  Plus,
  Search,
  Trash2,
  UserRound,
  X,
} from "lucide-react";

const API_URL = "http://localhost:5000/api/doctors";

const specialities = [
  "Cardiology",
  "Neurology",
  "Paediatrics",
  "Orthopaedics",
  "General Medicine",
  "General Surgery",
  "Diagnostics",
  "Women's Health",
];

const emptyForm = {
  name: "",
  speciality: "Cardiology",
  qualification: "",
  experience: "",
  available: true,
};

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [speciality, setSpeciality] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const fetchDoctors = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Unable to load doctors.");
      }

      const data = await response.json();
      setDoctors(data);
    } catch (err) {
      setError(
        "Could not connect to the hospital server. Make sure the backend is running on port 5000."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]);

  const filteredDoctors = doctors.filter((doctor) => {
    const name = (doctor.name || "").toLowerCase();
    const doctorSpeciality = doctor.speciality || "";

    const matchesSearch =
      name.includes(search.toLowerCase()) ||
      doctorSpeciality.toLowerCase().includes(search.toLowerCase());

    const matchesSpeciality =
      speciality === "All" || doctorSpeciality === speciality;

    return matchesSearch && matchesSpeciality;
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const openAddForm = () => {
    setEditingId(null);
    setForm({ ...emptyForm });
    setError("");
    setMessage("");
    setShowForm(true);
  };

  const openEditForm = (doctor) => {
    setEditingId(doctor._id);
    setForm({
      name: doctor.name || "",
      speciality: doctor.speciality || "Cardiology",
      qualification: doctor.qualification || "",
      experience: String(doctor.experience ?? ""),
      available: doctor.available !== false,
    });
    setError("");
    setMessage("");
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingId(null);
    setForm({ ...emptyForm });
  };

  const handleSaveDoctor = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    const experience = Number(form.experience);

    if (
      !form.name.trim() ||
      !form.speciality ||
      form.experience.trim() === "" ||
      !Number.isFinite(experience) ||
      experience < 0
    ) {
      setError("Enter a valid name, speciality, and experience.");
      return;
    }

    const doctorData = {
      name: form.name.trim(),
      speciality: form.speciality,
      qualification: form.qualification.trim(),
      experience,
      available: form.available,
    };

    setSaving(true);

    try {
      const response = await fetch(
        editingId ? `${API_URL}/${editingId}` : API_URL,
        {
          method: editingId ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(doctorData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to save doctor details."
        );
      }

      closeForm();
      setMessage(
        editingId
          ? "Doctor details updated successfully."
          : "Doctor added successfully."
      );

      await fetchDoctors();
    } catch (err) {
      setError(
        err.message || "Could not save the doctor. Please try again."
      );
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to permanently delete this doctor?"
    );

    if (!confirmed) return;

    setError("");
    setMessage("");

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to delete doctor.");
      }

      setDoctors((previous) =>
        previous.filter((doctor) => doctor._id !== id)
      );

      setMessage("Doctor deleted successfully.");
    } catch (err) {
      setError(
        err.message || "Could not delete the doctor. Please try again."
      );
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-cyan-600">
            Hospital Administration
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
            Doctors
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage doctors displayed on the hospital website.
          </p>
        </div>

        <button
          type="button"
          onClick={openAddForm}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
        >
          <Plus size={18} />
          Add Doctor
        </button>
      </div>

      {/* Notifications */}
      {error && (
        <div
          role="alert"
          className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {error}
        </div>
      )}

      {message && (
        <div
          role="status"
          className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
        >
          {message}
        </div>
      )}

      {/* Search and Filter */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 md:grid-cols-[1fr_240px]">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by doctor name or speciality..."
              className="w-full rounded-lg border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
            />
          </div>

          <select
            value={speciality}
            onChange={(e) => setSpeciality(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
          >
            <option value="All">All Specialities</option>

            {specialities.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Doctor Count */}
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-slate-500">
          Showing{" "}
          <span className="font-semibold text-slate-800">
            {filteredDoctors.length}
          </span>{" "}
          doctors
        </p>

        <button
          type="button"
          onClick={fetchDoctors}
          className="text-sm font-semibold text-cyan-700 hover:text-cyan-800"
        >
          Refresh
        </button>
      </div>

      {/* Doctors Table */}
      <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px]">
            <thead className="border-b border-slate-200 bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Doctor
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Speciality
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Experience
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Status
                </th>

                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-12 text-center text-sm text-slate-500"
                  >
                    Loading doctors...
                  </td>
                </tr>
              ) : filteredDoctors.length > 0 ? (
                filteredDoctors.map((doctor) => (
                  <tr key={doctor._id} className="hover:bg-slate-50">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-50 text-cyan-600">
                          <UserRound size={19} />
                        </div>

                        <div>
                          <span className="block text-sm font-semibold text-slate-800">
                            {doctor.name}
                          </span>

                          {doctor.qualification && (
                            <span className="mt-1 block text-xs text-slate-500">
                              {doctor.qualification}
                            </span>
                          )}
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5 text-sm text-slate-600">
                      {doctor.speciality}
                    </td>

                    <td className="px-6 py-5 text-sm text-slate-600">
                      {doctor.experience}{" "}
                      {Number(doctor.experience) === 1 ? "year" : "years"}
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          doctor.available
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {doctor.available ? "Active" : "Inactive"}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => openEditForm(doctor)}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-600"
                          title="Edit doctor"
                          aria-label={`Edit ${doctor.name}`}
                        >
                          <Edit size={16} />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDelete(doctor._id)}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                          title="Delete doctor"
                          aria-label={`Delete ${doctor.name}`}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center">
                    <p className="text-sm font-semibold text-slate-700">
                      No doctors found
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      {doctors.length === 0
                        ? "Add a doctor to get started."
                        : "Try changing your search or speciality filter."}
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Doctor Modal */}
      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/50 px-5 py-8">
          <div className="my-auto w-full max-w-lg rounded-2xl bg-white shadow-xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  {editingId ? "Edit Doctor" : "Add Doctor"}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  {editingId
                    ? "Update the doctor's details."
                    : "Add a doctor to the hospital directory."}
                </p>
              </div>

              <button
                type="button"
                onClick={closeForm}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close form"
              >
                <X size={19} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSaveDoctor} className="space-y-5 p-6">
              <div>
                <label
                  htmlFor="doctor-name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Doctor Name
                </label>

                <input
                  id="doctor-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Dr. Doctor Name"
                  required
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label
                  htmlFor="doctor-speciality"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Speciality
                </label>

                <select
                  id="doctor-speciality"
                  name="speciality"
                  value={form.speciality}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                >
                  {specialities.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="doctor-qualification"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Qualification (Optional)
                </label>

                <input
                  id="doctor-qualification"
                  type="text"
                  name="qualification"
                  value={form.qualification}
                  onChange={handleChange}
                  placeholder="e.g. MBBS, MD"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label
                  htmlFor="doctor-experience"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Experience (Years)
                </label>

                <input
                  id="doctor-experience"
                  type="number"
                  name="experience"
                  value={form.experience}
                  onChange={handleChange}
                  placeholder="e.g. 10"
                  min="0"
                  step="1"
                  required
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <label className="flex items-center gap-3 text-sm text-slate-700">
                <input
                  type="checkbox"
                  name="available"
                  checked={form.available}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-slate-300 accent-cyan-600"
                />
                Doctor is active and available
              </label>

              {error && (
                <p role="alert" className="text-sm text-red-600">
                  {error}
                </p>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeForm}
                  disabled={saving}
                  className="flex-1 rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 rounded-lg bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving
                    ? "Saving..."
                    : editingId
                      ? "Save Changes"
                      : "Add Doctor"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Doctors;
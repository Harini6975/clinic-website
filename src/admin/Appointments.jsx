
import { useEffect, useState } from "react";
import {
  CalendarDays,
  Search,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Trash2,
  RefreshCw,
} from "lucide-react";

const API_URL = "http://localhost:5000/api/appointments";

function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Load appointments from Supabase through the backend API
  const fetchAppointments = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to load appointments.");
      }

      setAppointments(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(
        err.message ||
          "Could not connect to the appointments API. Check that your backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  // Update appointment status in Supabase through the backend API
  const updateStatus = async (id, newStatus) => {
    setError("");
    setMessage("");

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update appointment.");
      }

      const updatedAppointment = data.appointment || data;

      setAppointments((current) =>
        current.map((appointment) =>
          String(appointment._id ?? appointment.id) === String(id)
            ? updatedAppointment
            : appointment
        )
      );

      if (
        String(selectedAppointment?._id ?? selectedAppointment?.id) ===
        String(id)
      ) {
        setSelectedAppointment(updatedAppointment);
      }

      setMessage(`Appointment ${newStatus.toLowerCase()} successfully.`);
    } catch (err) {
      setError(err.message || "Failed to update appointment.");
    }
  };

  // Delete appointment from Supabase through the backend API
  const deleteAppointment = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this appointment?"
    );

    if (!confirmed) return;

    setError("");
    setMessage("");

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete appointment.");
      }

      setAppointments((current) =>
        current.filter(
          (appointment) =>
            String(appointment._id ?? appointment.id) !== String(id)
        )
      );

      if (
        String(selectedAppointment?._id ?? selectedAppointment?.id) ===
        String(id)
      ) {
        setSelectedAppointment(null);
      }

      setMessage("Appointment deleted successfully.");
    } catch (err) {
      setError(err.message || "Failed to delete appointment.");
    }
  };

  const filteredAppointments = appointments.filter((appointment) => {
    const patientName = appointment.patientName || "";
    const doctorName = appointment.doctor || "";
    const department = appointment.department || "";

    const matchesSearch = [
      patientName,
      doctorName,
      department,
    ].some((value) =>
      value.toLowerCase().includes(search.toLowerCase())
    );

    const matchesStatus =
      statusFilter === "All" || appointment.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const statusStyle = {
    Pending: "bg-amber-50 text-amber-700 border-amber-200",
    Approved: "bg-cyan-50 text-cyan-700 border-cyan-200",
    Completed: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Cancelled: "bg-red-50 text-red-700 border-red-200",
  };

  const formatDate = (value) => {
    if (!value) return "Not specified";

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) return "Invalid date";

    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-8">
      {/* Page Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-1 text-sm font-semibold text-cyan-600">
            Admin Management
          </p>

          <h1 className="text-2xl font-bold text-slate-900">
            Appointments
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            View and manage patient appointment requests.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-lg bg-cyan-50 px-4 py-3 text-sm font-medium text-cyan-700">
            <CalendarDays size={18} />
            {appointments.length} Total Appointments
          </div>

          <button
            type="button"
            onClick={fetchAppointments}
            disabled={loading}
            title="Refresh appointments"
            className="rounded-lg border border-slate-200 bg-white p-3 text-slate-600 hover:bg-slate-50 disabled:opacity-50"
          >
            <RefreshCw size={18} />
          </button>
        </div>
      </div>

      {/* Success and error messages */}
      {message && (
        <div className="mb-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-700">
          {message}
        </div>
      )}

      {error && (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {error}
          <button
            type="button"
            onClick={fetchAppointments}
            className="ml-2 font-semibold underline"
          >
            Try again
          </button>
        </div>
      )}

      {/* Filters */}
      <div className="mb-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search patient, doctor or department..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 outline-none focus:border-cyan-500"
          >
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Appointment Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-left">
                {[
                  "Patient",
                  "Doctor",
                  "Department",
                  "Date",
                  "Status",
                  "Actions",
                ].map((heading) => (
                  <th
                    key={heading}
                    className={`px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500 ${
                      heading === "Actions" ? "text-right" : ""
                    }`}
                  >
                    {heading === "Date" ? "Date & Time" : heading}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan="6"
                    className="px-5 py-12 text-center text-sm text-slate-500"
                  >
                    Loading appointments...
                  </td>
                </tr>
              ) : filteredAppointments.length > 0 ? (
                filteredAppointments.map((appointment) => {
                  const id = appointment._id ?? appointment.id;

                  return (
                    <tr
                      key={id}
                      className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                    >
                      <td className="px-5 py-4">
                        <p className="font-semibold text-slate-900">
                          {appointment.patientName}
                        </p>
                        <p className="text-xs text-slate-500">
                          {appointment.email}
                        </p>
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-600">
                        {appointment.doctor || "Not assigned"}
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-600">
                        {appointment.department}
                      </td>

                      <td className="px-5 py-4">
                        <p className="text-sm font-medium text-slate-800">
                          {formatDate(appointment.appointmentDate)}
                        </p>
                        <p className="text-xs text-slate-500">
                          {appointment.appointmentTime || "Time not specified"}
                        </p>
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${
                            statusStyle[appointment.status] ||
                            "border-slate-200 bg-slate-50 text-slate-600"
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            title="View appointment"
                            onClick={() =>
                              setSelectedAppointment(appointment)
                            }
                            className="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-600"
                          >
                            <Eye size={16} />
                          </button>

                          {appointment.status === "Pending" && (
                            <>
                              <button
                                type="button"
                                title="Approve appointment"
                                onClick={() => updateStatus(id, "Approved")}
                                className="rounded-lg border border-emerald-200 p-2 text-emerald-600 transition hover:bg-emerald-50"
                              >
                                <CheckCircle size={16} />
                              </button>

                              <button
                                type="button"
                                title="Cancel appointment"
                                onClick={() => updateStatus(id, "Cancelled")}
                                className="rounded-lg border border-red-200 p-2 text-red-600 transition hover:bg-red-50"
                              >
                                <XCircle size={16} />
                              </button>
                            </>
                          )}

                          {appointment.status === "Approved" && (
                            <button
                              type="button"
                              title="Mark completed"
                              onClick={() => updateStatus(id, "Completed")}
                              className="rounded-lg border border-emerald-200 p-2 text-emerald-600 transition hover:bg-emerald-50"
                            >
                              <CheckCircle size={16} />
                            </button>
                          )}

                          <button
                            type="button"
                            title="Delete appointment"
                            onClick={() => deleteAppointment(id)}
                            className="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                          >
                            <Trash2 size={16} />
                          </button>

                          {appointment.status === "Pending" && (
                            <span className="flex items-center rounded-lg border border-slate-200 p-2 text-slate-400">
                              <Clock size={16} />
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="px-5 py-12 text-center text-sm text-slate-500"
                  >
                    No appointments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Appointment Details */}
      {selectedAppointment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">
                Appointment Details
              </h2>

              <button
                type="button"
                onClick={() => setSelectedAppointment(null)}
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
              >
                <XCircle size={20} />
              </button>
            </div>

            <div className="space-y-3 text-sm">
              {[
                ["Patient", selectedAppointment.patientName],
                ["Email", selectedAppointment.email],
                ["Phone", selectedAppointment.phone],
                ["Department", selectedAppointment.department],
                ["Doctor", selectedAppointment.doctor || "Not assigned"],
                ["Date", formatDate(selectedAppointment.appointmentDate)],
                ["Time", selectedAppointment.appointmentTime || "Not specified"],
                ["Status", selectedAppointment.status],
                ["Message", selectedAppointment.message || "No message"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[110px_1fr] gap-3 border-b border-slate-100 pb-3"
                >
                  <span className="font-medium text-slate-500">{label}</span>
                  <span className="break-words text-slate-800">
                    {value || "Not provided"}
                  </span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setSelectedAppointment(null)}
              className="mt-6 w-full rounded-lg bg-cyan-600 px-4 py-3 font-semibold text-white hover:bg-cyan-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Database Notice */}
      <div className="mt-6 rounded-xl border border-cyan-200 bg-cyan-50 p-4">
        <p className="text-sm font-semibold text-cyan-800">
          Supabase Database Connected
        </p>
        <p className="mt-1 text-xs leading-5 text-cyan-700">
          Appointments are loaded from Supabase through the backend API.
          Changes to appointment status and deletions are saved to Supabase.
        </p>
      </div>
    </div>
  );
}

export default Appointments;

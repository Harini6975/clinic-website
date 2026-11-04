import { useState } from "react";
import {
  Search,
  BriefcaseBusiness,
  Eye,
  CheckCircle,
  XCircle,
  Trash2,
  X,
} from "lucide-react";

function Careers() {
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: "Anitha Kumar",
      email: "anitha@example.com",
      phone: "+91 XXXXX XXXXX",
      position: "Staff Nurse",
      experience: "2 Years",
      date: "2026-10-05",
      status: "Reviewing",
    },
    {
      id: 2,
      name: "Rahul S",
      email: "rahul@example.com",
      phone: "+91 XXXXX XXXXX",
      position: "Medical Receptionist",
      experience: "1 Year",
      date: "2026-10-06",
      status: "Shortlisted",
    },
    {
      id: 3,
      name: "Priya M",
      email: "priya@example.com",
      phone: "+91 XXXXX XXXXX",
      position: "Lab Technician",
      experience: "3 Years",
      date: "2026-10-07",
      status: "Reviewing",
    },
    {
      id: 4,
      name: "Karthik R",
      email: "karthik@example.com",
      phone: "+91 XXXXX XXXXX",
      position: "IT Support Executive",
      experience: "2 Years",
      date: "2026-10-07",
      status: "Rejected",
    },
  ]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  const updateStatus = (id, status) => {
    setApplications((current) =>
      current.map((application) =>
        application.id === id
          ? { ...application, status }
          : application
      )
    );

    if (selectedApplicant?.id === id) {
      setSelectedApplicant({
        ...selectedApplicant,
        status,
      });
    }
  };

  const deleteApplication = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this application?"
    );

    if (!confirmed) return;

    setApplications((current) =>
      current.filter((application) => application.id !== id)
    );

    setSelectedApplicant(null);
  };

  const filteredApplications = applications.filter((application) => {
    const matchesSearch =
      application.name.toLowerCase().includes(search.toLowerCase()) ||
      application.email.toLowerCase().includes(search.toLowerCase()) ||
      application.position.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      application.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const statusStyle = {
    Reviewing: "bg-amber-50 text-amber-700 border-amber-200",
    Shortlisted: "bg-cyan-50 text-cyan-700 border-cyan-200",
    Hired: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Rejected: "bg-red-50 text-red-700 border-red-200",
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-1 text-sm font-semibold text-cyan-600">
            Admin Management
          </p>

          <h1 className="text-2xl font-bold text-slate-900">
            Career Applications
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Review and manage applications submitted through Careers.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-lg bg-cyan-50 px-4 py-3 text-sm font-medium text-cyan-700">
          <BriefcaseBusiness size={18} />
          {applications.length} Applications
        </div>
      </div>

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
              placeholder="Search applicant, email or position..."
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
            <option value="Reviewing">Reviewing</option>
            <option value="Shortlisted">Shortlisted</option>
            <option value="Hired">Hired</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Applications Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[950px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-left">
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Applicant
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Position
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Experience
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Applied On
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Status
                </th>

                <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredApplications.length > 0 ? (
                filteredApplications.map((application) => (
                  <tr
                    key={application.id}
                    className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                  >
                    <td className="px-5 py-4">
                      <p className="font-semibold text-slate-900">
                        {application.name}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {application.email}
                      </p>
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-700">
                      {application.position}
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-600">
                      {application.experience}
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-600">
                      {application.date}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${
                          statusStyle[application.status]
                        }`}
                      >
                        {application.status}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedApplicant(application)
                          }
                          title="View application"
                          className="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-600"
                        >
                          <Eye size={16} />
                        </button>

                        {application.status === "Reviewing" && (
                          <button
                            type="button"
                            title="Shortlist applicant"
                            onClick={() =>
                              updateStatus(
                                application.id,
                                "Shortlisted"
                              )
                            }
                            className="rounded-lg border border-cyan-200 p-2 text-cyan-600 transition hover:bg-cyan-50"
                          >
                            <CheckCircle size={16} />
                          </button>
                        )}

                        {application.status === "Shortlisted" && (
                          <button
                            type="button"
                            title="Mark as hired"
                            onClick={() =>
                              updateStatus(
                                application.id,
                                "Hired"
                              )
                            }
                            className="rounded-lg border border-emerald-200 p-2 text-emerald-600 transition hover:bg-emerald-50"
                          >
                            <CheckCircle size={16} />
                          </button>
                        )}

                        {application.status !== "Rejected" &&
                          application.status !== "Hired" && (
                            <button
                              type="button"
                              title="Reject application"
                              onClick={() =>
                                updateStatus(
                                  application.id,
                                  "Rejected"
                                )
                              }
                              className="rounded-lg border border-red-200 p-2 text-red-600 transition hover:bg-red-50"
                            >
                              <XCircle size={16} />
                            </button>
                          )}

                        <button
                          type="button"
                          title="Delete application"
                          onClick={() =>
                            deleteApplication(application.id)
                          }
                          className="rounded-lg border border-red-200 p-2 text-red-500 transition hover:bg-red-50"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="px-5 py-12 text-center text-sm text-slate-500"
                  >
                    No applications found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Applicant Details Modal */}
      {selectedApplicant && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 px-4 py-6">
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Applicant Details
                </h2>

                <p className="text-xs text-slate-500">
                  Application #{selectedApplicant.id}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedApplicant(null)}
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-5 p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Applicant
                </p>

                <p className="mt-1 text-lg font-bold text-slate-900">
                  {selectedApplicant.name}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold text-slate-400">
                    Email
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    {selectedApplicant.email}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-400">
                    Phone
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    {selectedApplicant.phone}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-400">
                    Position
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    {selectedApplicant.position}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-400">
                    Experience
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    {selectedApplicant.experience}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-400">
                    Applied On
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    {selectedApplicant.date}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-400">
                    Status
                  </p>

                  <span
                    className={`mt-1 inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${
                      statusStyle[selectedApplicant.status]
                    }`}
                  >
                    {selectedApplicant.status}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 border-t border-slate-200 pt-5">
                {selectedApplicant.status !== "Shortlisted" &&
                  selectedApplicant.status !== "Hired" && (
                    <button
                      type="button"
                      onClick={() =>
                        updateStatus(
                          selectedApplicant.id,
                          "Shortlisted"
                        )
                      }
                      className="rounded-lg bg-cyan-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-cyan-700"
                    >
                      Shortlist
                    </button>
                  )}

                {selectedApplicant.status === "Shortlisted" && (
                  <button
                    type="button"
                    onClick={() =>
                      updateStatus(
                        selectedApplicant.id,
                        "Hired"
                      )
                    }
                    className="rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
                  >
                    Mark as Hired
                  </button>
                )}

                {selectedApplicant.status !== "Rejected" &&
                  selectedApplicant.status !== "Hired" && (
                    <button
                      type="button"
                      onClick={() =>
                        updateStatus(
                          selectedApplicant.id,
                          "Rejected"
                        )
                      }
                      className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50"
                    >
                      Reject
                    </button>
                  )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Demo Notice */}
      <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
        <p className="text-sm font-semibold text-amber-800">
          Demo Administration Mode
        </p>

        <p className="mt-1 text-xs leading-5 text-amber-700">
          These applications are sample records stored temporarily in browser
          memory. A backend database and secure application storage will be
          connected later.
        </p>
      </div>
    </div>
  );
}

export default Careers;
"use client";

const users = [
  { name: "John", role: "admin" },
  { name: "Jane", role: "user" },
];

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Manage Users</h1>

      <div className="bg-white p-5 rounded-2xl shadow-sm">
        <table className="w-full text-sm">
          <thead className="text-gray-400">
            <tr>
              <th className="text-left py-3">Name</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u, i) => (
              <tr key={i} className="hover:bg-orange-50">
                <td className="py-3">{u.name}</td>
                <td className="capitalize text-orange-500">
                  {u.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
import { User } from "../types/users";

export default async function Users({ promise }: { promise: Promise<User[]> }) {
  const users = await promise;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Users</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.slice(0, 5).map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">
              {user.name}{" "}
              <span className="text-gray-500">({user.username})</span>
            </h3>

            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Phone:</span> {user.phone}
            </p>
            <p className="text-gray-700 mb-3">
              <span className="font-semibold">Website:</span> {user.website}
            </p>

            <h4 className="font-semibold mb-1">Address</h4>
            <p className="text-gray-700 mb-3">
              {user.address.street}, {user.address.suite}
              <br />
              {user.address.city}, {user.address.zipcode}
              <br />
              <span className="font-semibold">Geo:</span> Lat{" "}
              {user.address.geo.lat}, Lng {user.address.geo.lng}
            </p>

            <h4 className="font-semibold mb-1">Company</h4>
            <p className="text-gray-700">
              <span className="font-semibold">Name:</span> {user.company.name}
              <br />
              <span className="font-semibold">Catch Phrase:</span>{" "}
              {user.company.catchPhrase}
              <br />
              <span className="font-semibold">BS:</span> {user.company.bs}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

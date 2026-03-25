import { User } from "../types/users";

export default async function Users({ promise }: { promise: Promise<User[]> }) {
  const users = await promise;

  return (
    <div>
      <h2>Users</h2>
      {users.slice(0, 5).map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <h3>
            {user.name} ({user.username})
          </h3>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong> {user.website}
          </p>

          <h4>Address</h4>
          <p>
            {user.address.street}, {user.address.suite}
            <br />
            {user.address.city}, {user.address.zipcode}
            <br />
            <strong>Geo:</strong> Lat {user.address.geo.lat}, Lng{" "}
            {user.address.geo.lng}
          </p>

          <h4>Company</h4>
          <p>
            <strong>Name:</strong> {user.company.name}
            <br />
            <strong>Catch Phrase:</strong> {user.company.catchPhrase}
            <br />
            <strong>BS:</strong> {user.company.bs}
          </p>
        </div>
      ))}
    </div>
  );
}

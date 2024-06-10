import { useLoaderData } from "react-router-dom";

const Dashboard = () => {
  const data = useLoaderData();
  return (
    <div className="text-center">
      <div className="text-2xl font-bold">Private data:</div>
      {data.map((post) => (
        <p key={post.id}>
          <span className="capitalize">{post.title.substr(0, 1)}</span>
          {post.title.substr(1)}
        </p>
      ))}
    </div>
  );
};

export default Dashboard;

export const dashboardDataLoader = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const data = await res.json();
  return data;
};

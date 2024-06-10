import { NavLink, Outlet } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Layout = () => {
  const { login, register, isAuthenticated, user, logout, isLoading } =
    useKindeAuth();
  return (
    <div className="flex flex-row min-h-screen text-xl">
      <aside className="bg-black text-white w-1/6 p-4">
        <nav className="flex flex-col text-2xl items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="dashboard">Dashboard</NavLink>
        </nav>
      </aside>
      <main className="w-4/5">
        <header className="flex flex-row gap-2 items-center justify-end p-4">
          {isLoading && <p>Loading...</p>}
          {!isLoading && isAuthenticated && (
            <>
              <span>Hello {user?.email}</span>
              <button
                className="bg-rose-600 text-white inline-block p-3 rounded"
                onClick={logout}
                type="button"
              >
                Log out
              </button>
            </>
          )}
          {!isLoading && !isAuthenticated && (
            <>
              <button
                className="bg-lime-800 text-white inline-block p-3 rounded"
                onClick={register}
                type="button"
              >
                Register
              </button>
              <button
                className="bg-sky-800 text-white inline-block p-3 rounded"
                onClick={login}
                type="button"
              >
                Log In
              </button>
            </>
          )}
        </header>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

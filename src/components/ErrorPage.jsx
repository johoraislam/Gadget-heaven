import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-9xl font-extrabold text-purple-700 mb-4">404</h1>
      <p className="text-2xl font-semibold mb-6 text-gray-700">
        Oops! Page Not Found.
      </p>
      <p className="mb-6 text-gray-500 max-w-md text-center">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-purple-700 text-white rounded-full hover:bg-purple-800 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;

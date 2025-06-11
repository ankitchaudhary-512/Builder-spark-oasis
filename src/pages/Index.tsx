import { Navigate } from "react-router-dom";

// This file is kept for compatibility but redirects to Home
const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;

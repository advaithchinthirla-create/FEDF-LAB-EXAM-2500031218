import { Link, Routes, Route } from "react-router-dom";
import Home from "../exam/Home";
import ApplicantRegistration from "../exam/ApplicantRegistration";
import RegisteredApplicants from "../exam/RegisteredApplicants";
import APIDemo from "../exam/APIDemo";

export default function MainNavBar() {
  return (
    <div>

      <h2>Job Application Portal</h2>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/register">Applicant Registration</Link> |{" "}
        <Link to="/applicants">Registered Applicants</Link> |{" "}
        <Link to="/api">API Demo</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<ApplicantRegistration />} />
        <Route path="/applicants" element={<RegisteredApplicants />} />
        <Route path="/api" element={<APIDemo />} />
      </Routes>

    </div>
  );
}
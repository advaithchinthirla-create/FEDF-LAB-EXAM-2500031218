import { useEffect, useState } from "react";

export default function RegisteredApplicants() {

  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("applicants")) || [];
    setApplicants(data);
  }, []);

  return (
    <div>

      <h2>Registered Applicants</h2>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Position</th>
            <th>Experience</th>
          </tr>
        </thead>

        <tbody>

          {applicants.map((a, index) => (
            <tr key={index}>
              <td>{a.name}</td>
              <td>{a.email}</td>
              <td>{a.phone}</td>
              <td>{a.position}</td>
              <td>{a.experience} Years</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}
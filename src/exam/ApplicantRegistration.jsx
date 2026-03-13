import { useState } from "react";

export default function ApplicantRegistration() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const applicant = {
      name,
      email,
      phone,
      position,
      experience
    };

    const existing = JSON.parse(localStorage.getItem("applicants")) || [];

    existing.push(applicant);

    localStorage.setItem("applicants", JSON.stringify(existing));

    alert("Application Submitted");

    setName("");
    setEmail("");
    setPhone("");
    setPosition("");
    setExperience("");
  };

  return (
    <div>

      <h2>Applicant Registration</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Position Applied For"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />

        <br /><br />

        <input
          type="number"
          placeholder="Years of Experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />

        <br /><br />

        <button type="submit">Submit Application</button>

      </form>

    </div>
  );
}
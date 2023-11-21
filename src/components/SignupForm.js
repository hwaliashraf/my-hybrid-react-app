import React, { useState, useEffect } from "react";
import axios from "axios";

const SignupForm = () => {
  const [signupHTML, setSignupHTML] = useState("");

  useEffect(() => {
    // Fetch the pre-rendered signup form HTML from the server
    axios
      .get("http://localhost:3001/signup_ssr")
      .then((response) => {
        setSignupHTML(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch signup form HTML:", error);
      });
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: signupHTML }}>
      {/* Form content will be rendered here from the server-side HTML */}
    </div>
  );
};

export default SignupForm;

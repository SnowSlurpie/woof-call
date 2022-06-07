const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector("#username").value.trim();
    const password = document.querySelector("#password").value.trim();
    const email = document.querySelector("#email").value.trim();
    if (username && password) {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
          email,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        console.log("Success!");
        document.location.replace("/dashboard");
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector(".ownerForm")
    .addEventListener("submit", signupFormHandler);
const signupFormHandler = async (event) => {
    event.preventDefault();

    //TODO: grab location for user
    const dogName = document.getElementById('dogName').value.trim();
    const dogBreed = document.getElementById('dogBreed').value.trim();
    const dogAge = document.getElementById('dogAge').value.trim();
    const sex = document.querySelector("[name='sex']:checked").value;
    //TODO: change username to name
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

      const dogResponse = await fetch('/api/dogs', {
        //TODO: create dog after getting user setup
      })
  
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
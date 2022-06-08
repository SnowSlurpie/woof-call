const signupFormHandler = async (event) => {
    event.preventDefault();

    //grabs location for user use ZIP
    const location = document.getElementById('zipCode').value;
    const dogName = document.getElementById('dogName').value.trim();
    const dogBreed = document.getElementById('dogBreed').value.trim();
    const dogAge = document.getElementById('dogAge').value.trim();
    const sex = document.querySelector("[name='sex']:checked").value;
    //changed username to name
    const name = document.querySelector("#name").value.trim();
    const password = document.querySelector("#password").value.trim();
    const email = document.querySelector("#email").value.trim();
    if (username && password) {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
          email,
          location,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const dogResponse = await fetch('/api/dogs', {
        //created dog after getting user setup use dogData
        method: 'POST',
        body: JSON.stringify({
          dogName,
          dogBreed,
          dogAge,
          sex,
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
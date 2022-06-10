const signupFormHandler = async (event) => {
    event.preventDefault();

    //grabs location for user use ZIP
    const location = document.getElementById('zipCode').value.trim();
    const dogName = document.getElementById('dogName').value.trim();
    const dogBreed = document.getElementById('dogBreed').value.trim();
    const dogAge = document.getElementById('dogAge').value.trim();
    const dogSex = document.querySelector("[name='sex']:checked").value;
    const dogActivity = document.querySelector("[name='active']:checked").value;
    const dogPlayfulness = document.querySelector("[name='play']:checked").value;
    const dogSocialization = document.querySelector("[name='social']:checked").value;
    const dogFixed = document.querySelector('.fixed:checked').value;

    //changed username to name
    const name = document.querySelector("#name").value.trim();
    const age = document.getElementById('ownerAge').value.trim();
    const password = document.querySelector("#password").value.trim();
    const email = document.querySelector("#email").value.trim();
    if (username && password) {
      const userResponse = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
          name,
          password,
          age,
          email,
          location,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const dogResponse = await fetch('/api/dogs', {
        //created dog after getting user setup use dogData
        method: 'POST',
        body: JSON.stringify({
          name: dogName,
          breed: dogBreed,
          age: dogAge,
          sex: dogSex,
          activity: dogActivity,
          playfulness: dogPlayfulness,
          socialization: dogSocialization,
          image: imageUrl,
          is_fixed: dogFixed
          //TODO: add image url box in signup handlebars and add to dog creation

        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (userResponse.ok && dogResponse.ok) {
        console.log("Success!");
        document.location.replace("/login");
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector("#submit-input")
    .addEventListener("submit", signupFormHandler);
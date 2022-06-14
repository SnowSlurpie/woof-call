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
    const imageUrl = document.querySelector('#imageUrl').value.trim();

    //changed username to name
    const name = document.querySelector("#ownerName").value.trim();
    const age = document.querySelector('#ownerAge').value.trim();
    const password = document.querySelector("#password").value.trim();
    const email = document.querySelector("#email").value.trim();
    if (email && password) {
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
console.log(userResponse, name, password, age, email, location);
      if (userResponse.ok) {
        console.log("Success!");
        //redirect to login page
      } else {
        alert(userResponse.statusText);
      }

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
          is_fixed: dogFixed,
          owner_id: userResponse.id

        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (dogResponse.ok) {
        console.log("Success!");
        document.location.replace("/");
      } else {
        alert(dogResponse.statusText);
      }
    }
  };
  
  document
    .querySelector(".dogForm")
    .addEventListener("submit", signupFormHandler);
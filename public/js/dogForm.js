const dogFormHandler = async (event) => {
    event.preventDefault();
  
    // const = owner_id = document.querySelector("#owner_id").value.trim();
    const name = document.querySelector("#dogName").value.trim();
    const breed = document.querySelector("#dogBreed").value.trim();
    const age = document.querySelector("#dogAge").value.trim();
    const sex = document.querySelector('#sex').value.trim();
    const ownerName = document.querySelector('#ownerName').value.trim();
    const zipCode = document.querySelector('#zipCode').value.trim();
    const activity = document.querySelector('active').value.trim();
    const playfulness = document.querySelector('play').value.trim();
    const socialization = document.querySelector('social').value.trim();
    const is_fixed = document.querySelector('fixed').value.trim();
    
    if (dogName && password) {
      const response = await fetch("/api/dogs", {
        method: "POST",
        body: JSON.stringify({ dogName, dogBreed, dogAge, sex, ownerName, zipCode }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector(".dogForm")
    .addEventListener("submit", dogFormHandler);
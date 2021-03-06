var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();

      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          alert("Thanks for your submission!");
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              alert("error");
            } else {
              alert("Oops! There was a problem submitting your form");
            }
          })
        }
      }).catch(error => {
        alert("Oops! There was a problem submitting your form");
      });
    }
    form.addEventListener("submit", handleSubmit)
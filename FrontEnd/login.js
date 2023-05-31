 const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const loginData = {
      email: email,
      password: password
    };

    fetch('http://localhost:5678/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
      .then(response => {
        if (response.ok) {
          location.replace("Accueil.html");
          return response.json();
        } else if (response.status === 401) {
          throw new Error('Incorrect email or password');
        } else {
          throw new Error('Login failed');
        }
      })
      .then((data) => {
        if (data.token) {
          const loggedUser = sessionStorage.setItem("loginData", data.token);
        }
      });
  
  });

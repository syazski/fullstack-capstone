function Register() {
    
    const register = (e) => {
        e.preventDefault();
        console.log("in register");
    }

    return (
      <>
      <h2>Register to access books</h2>
      <form onSubmit={register}>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username"/><br />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password"/><br />
        <p>More about you</p>
        <label htmlFor="firstname">First Name: </label>
        <input type="text" name="firstname"/><br />
        <label htmlFor="lastname">Last Name: </label>
        <input type="text" name="lastname"/><br />
        <br/>
        <button>Register</button>
      </form>
      </>
    )
  }
  
  export default Register;
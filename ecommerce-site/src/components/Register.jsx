function Register() {

    return (
      <>
      <h2>Register to access books</h2>
      <form>
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
        <button>Submit</button>
      </form>
      </>
    )
  }
  
  export default Register;
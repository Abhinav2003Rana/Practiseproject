import "./Signup.css";

export const Signup = () => {
  return (
    <div className="signup-page">
      <form action="POST" className="signup-form">
        <h3>Create your account</h3>

        <label htmlFor="firstname">First Name</label>
        <input type="text" placeholder="first name" name="firstname" />

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="username" name="username" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" required/>

        <label htmlFor="password">Confirm Password</label>
        <input type="password" placeholder="Confirm Password" id="password" required/>

        <a href="/login">already have an account?</a>
        <button>Login</button>
      </form>
    </div>
  );
};

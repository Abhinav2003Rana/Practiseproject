import "./Login.css";
export const Login = () => {
  return (
    <div className="login-page">
      <div className="login">
        <form action="POST" className="login-form">
          <h3>Login to your account</h3>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Enter Username" name="username" />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter Password" id="password" required/>
          <a href="/signup">dont have an account ?</a>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

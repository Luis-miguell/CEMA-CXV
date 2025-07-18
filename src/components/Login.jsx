import React from 'react';
function FormLogin({ usuario }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = (event) => {
        event.preventDefault();

        if (email === usuario.email && password === usuario.contrasenia) {
            alert("Login successful!");
        } else {
            alert("Login failed.");
        }
    }
  return (
    <form onSubmit={handleLogin}>
      <label>
        Email:
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
export default FormLogin;
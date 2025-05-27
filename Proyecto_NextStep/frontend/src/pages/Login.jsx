import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/usuario/login', { correo, password });
      setMensaje('Inicio de sesión exitoso');
      localStorage.setItem('token', res.data.token);
    } catch (err) {
      setMensaje('Credenciales incorrectas');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-2xl mb-4">Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          className="w-full p-2 border mb-2"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border mb-2"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2">Entrar</button>
        {mensaje && <p className="mt-2 text-center text-sm">{mensaje}</p>}
      </form>
    </div>
  );
}

export default Login;

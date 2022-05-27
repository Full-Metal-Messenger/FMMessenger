import { useHistory } from 'react-router-dom';
import { signInUser, signUpUser } from '../services/auth';
import { useAuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

export default function Login() {
  const history = useHistory();
  const {
    email,
    setEmail,
    password,
    setPassword,
    type,
    setType,
    error,
    setError,
    username,
    setusername,
    setCurrentUser,
  } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (type === 'sign-in') {
        const data = await signInUser(email, password);
        console.log(data);
        setCurrentUser(data);
        history.push('/');
      } else {
        const data = await signUpUser({ email, password }, username);
        setCurrentUser(data);
        history.push('/');
      }
    } catch (error) {
      setError(e.message);
    }
  };

  return (
    <>
      <div className="button">
        <h1>
          <span
            className={type === 'sign-in' ? '' : ''}
            onClick={() => setType('sign-in')}
          >
            Sign In
          </span>
          <span
            className={type === 'sign-up' ? '' : ''}
            onClick={() => setType('sign-up')}
          >
            Sign Up
          </span>
          {error && <p>{error}</p>}
          <form className="auth" onSubmit={handleSubmit}>
            <label>
              Email:
              <input
                type="email"
                placeholder="user email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                placeholder="password"
                value={password}
                autoComplete="on"
                onChange={(e) => setPassword(e.target.value)}
              />
              username:
              <input
                type="username"
                placeholder="username"
                value={username}
                autoComplete="on"
                onChange={(e) => setusername(e.target.value)}
              />
            </label>
            <button>Enter</button>
          </form>
        </h1>
      </div>
      <AuthForm />
    </>
  );
}

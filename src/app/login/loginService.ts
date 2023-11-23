interface UserData {
  id: number;
  login: string;
  motDePasse:string;
  role: string;
  // Add more properties as needed
}

class AuthService {
  private baseUrl: string = 'http://localhost:8088/users';

  async authenticate(login: string, password: string): Promise<UserData | null> {
    try {
      const response = await fetch(`${this.baseUrl}?login=${login}&password=${password}`);

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const userData: UserData = await response.json();

      if (userData && userData.role) {
        return userData;
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Authentication error:');
      return null;
    }
  }
}

// Example usage:
const authService = new AuthService();

async function handleLogin() {
  const login = 'admin_user'; // replace with actual login
  const password = 'admin_password'; // replace with actual password

  const user = await authService.authenticate(login, password);

  if (user) {
    if (user.role === 'admin') {
      // Redirect to '/'
      window.location.href = '/';
    } else {
      // Redirect to '/ajout'
      window.location.href = '/ajout';
    }
  } else {
    console.log('Login failed.');
  }
}

// Add an event listener to the button
const loginButton = document.getElementById('con');
if (loginButton) {
  loginButton.addEventListener('click', handleLogin);
}

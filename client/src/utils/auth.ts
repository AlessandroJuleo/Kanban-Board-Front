class Auth {
  static getToken() {
    return localStorage.getItem("token");
  }

  static loggedIn() {
    return !!this.getToken(); // Devuelve true si hay un token, false si no
  }

  static logout() {
    localStorage.removeItem("token"); // Elimina el token del localStorage
    window.location.reload(); // Recarga la página para aplicar los cambios
  }
}

export default Auth;

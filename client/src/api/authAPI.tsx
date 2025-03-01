import { UserLogin } from "../interfaces/UserLogin"; // Importación correcta

const login = async (userInfo: UserLogin) => {
  console.log("User info:", userInfo); // Se usa la variable para evitar error TS6133
  // Aquí iría la lógica de autenticación
};

export default login;

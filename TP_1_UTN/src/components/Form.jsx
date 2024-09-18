import './Form.css';

function Form() {
  
  return (
   
    <form>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" name="nombre" id="nombre" />
        <label htmlFor="apellido">Apellido:</label>
        <input type="text" name="apellido" id="apellido" />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="telefono">Telefono:</label>
        <input type="tel" name="telefono" id="telefono" />
        <label htmlFor="contra">Password:</label>
        <input type="password" name="contra" id="contra" />
        <label htmlFor="repetirContra">Confirmar password:</label>
        <input type="password" name="repetirContra" id="repetirContra"/>
        <button type="submit">Registrarse</button>
    </form>
  );
}

export default Form
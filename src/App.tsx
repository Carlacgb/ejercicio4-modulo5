import React from 'react';
import Button from './components/Button';
import './App.css';
function App() {
const handleClick = () => {
alert('Botón presionado');
};
return (
<div>
<h1>Mejorando la
Web del Hospital con APIs, TypeScript, y Seguridad</h1>
<Button label="Haz clic aquí" onClick={handleClick} />
</div>
);
}
export default App;
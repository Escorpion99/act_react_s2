const TarjetaDinamica = ({ titulo, contenido, colorFondo, colorTexto, ancho, activo }) => {
    const estilosTarjeta = {
    backgroundColor: activo ? colorFondo : '#e0e0e0',
    color: activo ? colorTexto : '#888888',
    width: ancho,
    padding: '20px',
    margin: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
    };

    const estilosTitulo = {
    color: activo ? colorTexto : '#888888',
    };

    return (
    <div style={estilosTarjeta}>
        <h2 style={estilosTitulo}>{titulo}</h2>
        <p>{contenido}</p>
    </div>
    );
};

export default TarjetaDinamica;
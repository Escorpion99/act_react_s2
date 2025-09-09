const TarjetaTailwind = ({ titulo, descripcion, imagen, etiqueta }) => {
    return (
    <div className="w-72 m-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
        {imagen && (
        <img
            src={imagen}
            alt={titulo}
            className="w-full h-40 object-cover"
        />
        )}
        <div className="p-4">
        <span className="text-xs font-semibold uppercase text-blue-500 mb-2">{etiqueta}</span>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{titulo}</h3>
        <p className="text-gray-600 text-sm">{descripcion}</p>
        </div>
    </div>
    );
};

export default TarjetaTailwind;
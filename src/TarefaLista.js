import React from 'react';

const TarefaLista = () => {
    const tarefasFicticias = [
        "Preparar aula de programação",
        "Fazer feira",
        "Preparar marmitas"
    ];

    return (
        // Contêiner com borda amarela que envolve a lista
        <div className="border border-warning p-3 w-100" style={{ width: '300px', margin: '20px auto', borderRadius: '10px' }}>
            {/* Lista de tarefas com borda preta em cada item */}
            <ul className="list-group mb-3">
                {tarefasFicticias.map((tarefa, index) => (
                    <li
                        key={index}
                        className="list-group-item border border-dark mb-2"  // Borda preta
                        style={{ padding: '10px' }}  // Adiciona espaçamento interno
                    >
                        {tarefa}
                    </li>
                ))}
            </ul>
        </div>
    );
};

// https://getbootstrap.com/docs/4.0/components/list-group/ -- Link do bootstrap para listas
export default TarefaLista;

import React from 'react';

const TarefaLista = () => {
    const tarefasFicticias = [
        "Preparar aula de programação",
        "Fazer feira",
        "Preparar marmitas"
    ];

    return (
        // https://getbootstrap.com/docs/4.0/components/list-group/ -- Link do bootstrap para listas
        <ul className="lista de tarefas">
            {tarefasFicticias.map((tarefa, index) => (
                <li key={index} className="list-group-item">
                    {tarefa} 
                </li>
            ))}
        </ul>
    );
};

export default TarefaLista;

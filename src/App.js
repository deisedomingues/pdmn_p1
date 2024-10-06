
/*Tarefa 1: O projeto deve ter um componente principal chamado App
montado na raiz da árvore. Ele deve exibir o texto “Hello, tarefas”. Essa versão deve
também lidar com a instalação e importação do Bootstrap, além da definição de um
leiaute responsivo (usando container, row e col- do Bootstrap).
Mensagem do commit:
feat(p1-pdmn): cria componente principal e faz hello*/

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; //em node_modules

// const App = () => {
//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col text-start">
//                     <h1>Hello, tarefas</h1>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default App;


/*Tarefa 2: Deve ser possível digitar uma descrição de tarefa e clicar em um botão para
cadastrá-la. Essa funcionalidade deve ser implementada por um componente React
exclusivo para este fim. Seu nome deve ser “TarefaEntrada”. O componente deve ser
filho do principal, substituindo o texto “Hello, tarefas”.
Mensagem do commit:
feat(p1-pdmn): cria componente de entrada*/

import React, { useState } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import TarefaEntrada from './TarefaEntrada';

const App = () => {
    const [tarefas, setTarefas] = useState([]); // Estado para armazenar as tarefas

    const adicionarTarefa = (descricao) => {
        setTarefas([...tarefas, descricao]); // Adicionar nova tarefa ao estado
    };

    return (
        <div className="container">
            <TarefaEntrada onAdicionar={adicionarTarefa} /> {/* Componente de entrada */}
            <ul className="list-group">
                {tarefas.map((tarefa, index) => (
                    <li key={index} className="list-group-item">
                        {tarefa} {/* Renderiza cada tarefa */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;

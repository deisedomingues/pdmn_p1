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

///////////////////////////////////////////////////////////////////////////////////////////////////


/*Tarefa 2: Deve ser possível digitar uma descrição de tarefa e clicar em um botão para
cadastrá-la. Essa funcionalidade deve ser implementada por um componente React
exclusivo para este fim. Seu nome deve ser “TarefaEntrada”. O componente deve ser
filho do principal, substituindo o texto “Hello, tarefas”.
Mensagem do commit:
feat(p1-pdmn): cria componente de entrada*/

// import React, { useState } from 'react'; 
// import 'bootstrap/dist/css/bootstrap.min.css';
// import TarefaEntrada from './TarefaEntrada';

// const App = () => {
//     const [tarefas, setTarefas] = useState([]); // Estado para armazenar as tarefas

//     const adicionarTarefa = (descricao) => {
//         setTarefas([...tarefas, descricao]); // Adicionar nova tarefa ao estado
//     };

//     return (
//         <div className="container">
//             <TarefaEntrada onAdicionar={adicionarTarefa} /> {/* Componente de entrada */}
//             <ul className="list-group">
//                 {tarefas.map((tarefa, index) => (
//                     <li key={index} className="list-group-item">
//                         {tarefa} {/* Renderiza cada tarefa */}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default App;

////////////////////////////////////////////////////////////////////////////////////////

/*Tarefa 3:
Deve ser possível visualizar uma lista de tarefas fictícias (ou seja, chumbadas no
código, nada que o usuário tenha digitado em tempo de requisição). A lista de tarefas
chumbada, nesta versão, deve ser a mesma que o protótipo mostra. Essa
funcionalidade deve ser implementada por um componente React exclusivo para este
fim. Seu nome deve ser “TarefaLista”. O componente deve ser filho do principal.
Mensagem do commit:
feat(p1-pdmn): exibe lista ficticia
*/

// import React, { useState } from 'react'; 
// import 'bootstrap/dist/css/bootstrap.min.css';
// import TarefaEntrada from './TarefaEntrada';
// import TarefaLista from './TarefaLista'; 

// const App = () => {
//     const [tarefas, setTarefas] = useState([]); // Estado para armazenar as tarefas

//     const adicionarTarefa = (descricao) => {
//         setTarefas([...tarefas, descricao]); // Adiciona nova tarefa ao estado
//     };

//     return (
//         <div className="container">
//             <TarefaEntrada onAdicionar={adicionarTarefa} /> 

//             {/* Criação da lista de tarefas fictícias */}
//             <TarefaLista />

//             <ul className="list-group">
//                 {tarefas.map((tarefa, index) => (
//                     <li key={index} className="list-group-item">
//                         {tarefa}                                             
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default App;

/////////////////////////////////////////////////////////////////////////////////////////
/* Tarefa 4:
Deve ser possível visualizar as tarefas digitadas pelo usuário. A lista é atualizada em
tempo real, sempre que o usuário digita uma tarefa nova. Nesta versão, a lista de
tarefas fictícias não é mais exibida.
Mensagem do commit:
feat(p1-pdmn): exibe lista real
Chegar até aqui é notável. Significa que o aplicativo está pronto. Marque o último
commit como importante. Revele-o para o mundo.
Faça nova tag. Rótulo da tag:
v1.0.0
Mensagem da tag:
app-tarefas: permite cadastro e consulta de tarefas
*/

import React, { useState } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import TarefaEntrada from './TarefaEntrada';
import TarefaLista from './TarefaLista'; // Importando TarefaLista

const App = () => {
    const [tarefas, setTarefas] = useState([]); // Estado para armazenar as tarefas
    const [exibirFicticias, setExibirFicticias] = useState(true); // Estado para controlar a exibição das tarefas fictícias

    const adicionarTarefa = (descricao) => {
        setTarefas([...tarefas, descricao]); // Adiciona nova tarefa ao estado
        setExibirFicticias(false); // Após a primeira tarefa, desativamos a exibição das tarefas fictícias
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="text-center mb-4"></h1>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <TarefaEntrada onAdicionar={adicionarTarefa} />
                </div>
            </div>

            {exibirFicticias && (
                <div className="row">
                    <div className="col">
                        <TarefaLista /> {/* Exibe a lista de tarefas fictícias apenas se exibirFicticias for true */}
                    </div>
                </div>
            )}

            <div className="row">
                <div className="col">
                    <ul  className={`list-group p-3 w-100 ${tarefas.length > 0 ? 'border border-warning' : ''}`}> {/*Aplica a borda amarela apenas se houver tarefas*/}
                        {tarefas.map((tarefa, index) => (
                            <li 
                                key={index} 
                                className= "list-group-item border border-dark mb-3" 
                            >
                                {tarefa}
                            </li>   
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default App;

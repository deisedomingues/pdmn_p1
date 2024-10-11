import React, { useState } from 'react';

const TarefaEntrada = ({ onAdicionar }) => {
    const [descricao, setDescricao] = useState('');

    const handleInputChange = (e) => {
        setDescricao(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário
        if (descricao.trim()) {
            onAdicionar(descricao); // Chama a função passada por props (linha 78 em App.js)
            setDescricao(''); // Limpa o campo de entrada
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <input
                type="text"
                value={descricao}
                onChange={handleInputChange}
                className="form-control form-control-lg border-dark w-100"
                placeholder="Digite a descrição de uma nova tarefa"
            />
            
            <button 
                type="submit" 
                className="btn btn-outline-primary mt-2 w-100 btn-lg border-primary text-dark">  {/*type="button"*/}
                OK
            </button>
        </form>
    );
};  

export default TarefaEntrada;

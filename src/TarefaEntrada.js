import React, { useState } from 'react';

const TarefaEntrada = ({ onAdicionar }) => {
    const [descricao, setDescricao] = useState('');

    const handleInputChange = (e) => {
        setDescricao(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário
        if (descricao.trim()) {
            onAdicionar(descricao); // Chama a função passada por props
            setDescricao(''); // Limpa o campo de entrada
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <input
                type="text"
                value={descricao}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Digite a descrição de uma nova tarefa"
            />
            {/* <button type="button" class="btn btn-primary">Primary</button> */}
            <button type="submit" className="btn btn-light mt-2"> 
                OK
            </button>
        </form>
    );
};

export default TarefaEntrada;

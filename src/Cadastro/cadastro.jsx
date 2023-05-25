import React, { useState } from "react";

export default function Cadastro(){

    const [formData, setFormData] = useState({
        nome: "",
    });

    const [lista, setLista] = useState([]);

    const adicionarItem = event => {
        event.preventDefault();
        setLista([...lista, formData])
        setFormData({
            nome:"",
        });
    };

    return (
    <div className="App">
      <header>
        <h2>Lista de Compras:</h2>
      </header>
      <div className="lista-compras-container">
        <ul className="lista-items">
            {lista.map(item => (
                <li> {item.nome}</li>
            ))}
        </ul>
      </div>
      <form className="form-add-item" method="post" onSubmit={adicionarItem}>
        <fieldset>
          <div className="form-group mb-3">
            <label htmlFor="item">Adicionar Novo Item na Lista:</label>
            <input
              type="text" 
              className="form-control" 
              id="nome" 
              value = {formData.nome}
              onChange={event => setFormData({...formData, nome : event.target.value})}
              />
              
          </div>
          <button type="submit" className="btn btn-primary">
            Adicionar
          </button>
        </fieldset>
      </form>
    </div>
    
    );
}

import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';
import '../App.css';

function Header(props){

    
    //estado é informação armazenada.
    //as informações são imutáveis.
    //para mudar precisamos de getters e setters
    //Hook - useAlgumaCoisa, useState, useEffect
    const [company, setCompany] = useState(props.options.empresa || "Nenhuma informada");
    const [name, setName] = useState(props.options.nome);
    const [site, setSite] = useState(props.options.site);

    useEffect(()=> {
        //useEffect é um hook que executa automaticamente toda vez que a página é carregada
        //Executa automaticamente toda vez que um estado é alterado
        setCompany(company.toUpperCase());
    }, [company]);

    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{props.title}</p>
        <a
          className={props.options.className}
          href={props.options.site}
          target="_blank"
          rel="noopener noreferrer"
        >
            {company} - {name}
        </a>
        <button onClick={(e)=>setCompany("Fiap")}>{`Mudando o nome de: ${company}`}</button>
      </header>
    );
}

export default Header;
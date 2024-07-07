// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

import React, { useState } from "react";
import Product from "../components/Product/Product";

const Challenge_useState01 = () => {
    const [datas, setDatas] = useState();

    async function handleClick(e) {
        const items = e.target.innerText
        const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${items}`)
        const json = await response.json()
        setDatas(json)
    }

    return (
        <div>
            <button style={{ marginRight: "10px" }} onClick={handleClick}>notebook</button>
            <button style={{ marginRight: "10px" }} onClick={handleClick}>smartphone</button>
            <button onClick={handleClick}>tablet</button>
            {datas && <Product datas={datas} />}
        </div>
    );

}

export default Challenge_useState01;

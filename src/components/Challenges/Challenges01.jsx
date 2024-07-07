import React from "react";

const Challenges01 = () => {
    return (
        <ol type='1'>
        <li>Os links abaixo puxam dados de um produto em formato JSON
          <ol type='a'>
            <li>https://ranekapi.origamid.dev/json/api/produto/tablet</li>
            <li>https://ranekapi.origamid.dev/json/api/produto/smartphone</li>
            <li>https://ranekapi.origamid.dev/json/api/produto/notebook</li>
          </ol>
        </li>
        <li>Crie uma interface com 3 botões, um para cada produto.</li>
        <li>Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.</li>
        <li>Mostre apenas um produto por vez</li>
      </ol>
    )
}

export default Challenges01;

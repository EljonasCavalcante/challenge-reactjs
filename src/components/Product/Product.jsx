import React, { useState } from "react";

const Product = ({ datas }) => {
    const formattedPrice= Number(datas.preco).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    return (
        <div>
            <div>
                <h1>{datas.nome}</h1>
                <p>{formattedPrice}</p>
            </div>
            <img src={datas.fotos[0].src} alt={datas.fotos[0].titulo} />
        </div>
    )
}

export default Product;

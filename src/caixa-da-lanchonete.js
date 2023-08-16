class CaixaDaLanchonete {
    calcularValorDaCompra(formaDePagamento, itens) {
        
        const cardapio = {
            'cafe': 3.00,
            'chantily': 1.50,
            'suco': 6.20,
            'sanduiche': 6.50,
            'queijo': 2.00,
            'salgado': 7.25,
            'combo1': 9.50,
            'combo2': 7.50
        };
        // Itens válidos para Formas de Pagamento
        const formasDePagamentoValidas = ['dinheiro', 'debito', 'credito'];

        if (!formasDePagamentoValidas.includes(formaDePagamento)) {
            return "Forma de pagamento inválida!";
        }

        // Verifica se o carrinho está vazio
        if (itens.length === 0){
            return "Não há itens no carrinho de compra!"
        }

        let valorTotal = 0;
        let carrinho=[];

        // Percorre o array de Itens 
        for (const item of itens) {
            const [codigo, quantidadeString] = item.split(',');
            carrinho.push(codigo)
            const quantidade = parseInt(quantidadeString, 10); // Converte para número inteiro
            const precoItem = cardapio[codigo]; // Procura um valor a partir de uma chave (código)
            
            // verifica se o pedido inclui itens extras e, caso , se o principal está presente
            if( codigo==='chantily'){
                if(!carrinho.includes('cafe')){
                    return "Item extra não pode ser pedido sem o principal"
                }
            }

            if( codigo==='queijo'){
                if(!carrinho.includes('sanduiche')){
                    return "Item extra não pode ser pedido sem o principal"
                }
            }

            
            if (typeof precoItem === 'undefined') {
            return "Item inválido!";
            }

            // verifica se a quantidade do item é válida
            if (quantidade <= 0) {
            return "Quantidade inválida!";  
            }

            valorTotal += precoItem * quantidade;
        }

        if (formaDePagamento === 'dinheiro') {
            valorTotal *= 0.95; // Aplica desconto de 5%
        } else if (formaDePagamento === 'credito') {
            valorTotal *= 1.03; // Aplica acréscimo de 3%
        }

        let valorFormatado=valorTotal.toFixed(2).toString() // Formata e converte o valor do pedido
        
        valorFormatado = (valorFormatado.replace('.', ','))
        
        return `R$ ${valorFormatado}`;
    }
  } 
    
export { CaixaDaLanchonete };

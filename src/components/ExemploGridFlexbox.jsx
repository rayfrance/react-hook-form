import React from 'react';

const ExemploGridFlexbox = () => {
  return (
    <div
      style={{
        display: 'flex', // Flexbox para o layout principal
        height: '100vh', // Ocupa toda a altura da tela
      }}
    >
      {/* Menu lateral */}
      <div
        style={{
          backgroundColor: '#4caf50',
          color: 'white',
          padding: '20px',
          width: '200px', // Largura fixa
        }}
      >
        <h3>Menu</h3>
        <ul>
          <li>Opção 1</li>
          <li>Opção 2</li>
          <li>Opção 3</li>
        </ul>
      </div>

      {/* Conteúdo principal */}
      <div
        style={{
          flex: 1, // Flexbox: ocupa o restante do espaço disponível
          display: 'grid', // Grid para o conteúdo interno
          gridTemplateColumns: 'repeat(3, 1fr)', // Três colunas iguais
          gap: '10px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
        }}
      >
        {/* Itens dentro do grid */}
        <div style={{ backgroundColor: '#ffc107', padding: '20px' }}>Caixa 1</div>
        <div style={{ backgroundColor: '#03a9f4', padding: '20px' }}>Caixa 2</div>
        <div style={{ backgroundColor: '#e91e63', padding: '20px' }}>Caixa 3</div>
        <div style={{ backgroundColor: '#9c27b0', padding: '20px' }}>Caixa 4</div>
        <div style={{ backgroundColor: '#ff5722', padding: '20px' }}>Caixa 5</div>
        <div style={{ backgroundColor: '#8bc34a', padding: '20px' }}>Caixa 6</div>
      </div>
    </div>
  );
};

export default ExemploGridFlexbox;

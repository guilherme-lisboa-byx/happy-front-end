const Test = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
          <span className="text-3xl">🎉</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Funcionou!
        </h1>
        <p className="text-gray-600 mb-6">
          Você está editando o projeto pelo Lovable. Qualquer mudança feita aqui será sincronizada com o GitHub automaticamente.
        </p>
        <a 
          href="/"
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Voltar ao Início
        </a>
      </div>
    </div>
  );
};

export default Test;

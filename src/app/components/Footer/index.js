const Footer = () => {
    return (
      <footer className="bg-black text-white p-8">
        <div className="container mx-auto flex justify-between">
          <div>
            <h2 className="text-lg font-bold mb-4">Informações de Contato</h2>
            {/* <p>Email: central.albatrozviagens@gmail.com.com</p> */}
            {/* <p>Telefone: (11) 98694-3182 </p> */}
            {/* <p>Endereço: Rua Exemplo, 123 - Cidade, Estado</p> */}
          </div>
  
          <div>
            {/* Integre seu mapa aqui usando a API do Google Maps */}
            {/* Substitua 'YOUR_GOOGLE_MAPS_API_KEY' pela sua chave de API */}
            {/* <iframe
              title="Mapa do Local"
              width="300"
              height="200"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://www.google.com/maps/embed/v1/place?q=place_id:YOUR_PLACE_ID&key=YOUR_GOOGLE_MAPS_API_KEY`}
              allowFullScreen
            ></iframe> */}
          </div>
        </div>
  
        <div className="mt-8 text-center">
          <p>&copy; 2024 MDC GAMES. Todos os direitos reservados.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
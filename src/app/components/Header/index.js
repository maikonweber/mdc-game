import Image from "next/image";

const Header = () => {
    return (
        <header className="bg-black p-4">
            <div className="container flex h-72px">
                <div className="text-white text-2xl mr-5 p-1">
                    {/* <Image src={'/rename2.png'} width={62} height={55} ></Image> */}
                </div>
                <div className="text-orange-500 text-2xl mr-1 mt-3 sm:block"> MDC </div>
                <div className="text-gray-100 text-2xl font-bold mt-3 sm:block"> GAMES </div>
                {/* Navigation Links */}

                <nav className="ml-auto flex items-center">
                    {/* <a href="#" className="text-white text-sm mt-2 mr-1 p-1 font-light hidden sm:block">Sobre Nós</a> */}
                    {/* <a href="" target="_blank" rel="noopener noreferrer" className="text-white text-sm mt-2 mr-1 p-1 font-light"> Fale Conosco </a> */}
                    <a href="#" className="text-orange-500 text-sm mt-2 mr-1 p-1 font-light sm:block">Loja</a>
                    <div className="text-white ml-2 text-sm p-2">
                        {/* Adicione mais elementos conforme necessário */}
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header
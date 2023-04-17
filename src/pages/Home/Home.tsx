export function Home() {

    return (
        <div className='w-full flex h-full justify-center p-40'>
            <div>
                <h1 className='text-xl font-bold text-center mb-4'>Bem-Vindo!</h1>
                <div className="border-b-2">
                    <p className="my-4 text-lg">Este software é a famosa lista de TODOS, todo o código desenvolvido foi com o intuito de estudo.</p>
                    <p className="my-4 text-lg">Todo o código é de livre utilização, caso queira copiar, utilizar ou destrinchar este código esta permitido.</p>
                </div>
                <div className="flex flex-col items-center border-b-2 pb-4">
                    <h2 className='text-xl font-bold text-center mb-2 mt-4'>Como foi feito o código.</h2>
                    <p className="my-4 text-lg">As tecnologias utilizadas foram: </p>
                    <ul>
                        <li>ReactJS - 18.2.0</li>
                        <li>Typescript - 4.9.3</li>
                        <li>Tawilwind - 3.3.1</li>
                        <li>React Router</li>
                        <li>Vite</li>
                    </ul>
                </div>


            </div>
        </div>
    )
}
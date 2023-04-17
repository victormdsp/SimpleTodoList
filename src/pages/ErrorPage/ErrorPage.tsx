import { Link, useRouteError } from "react-router-dom";

export function ErrorPage() {
    const error: any = useRouteError();

    return (
        <div className='w-full h-full text-center flex flex-col justify-center align-center'>
            <h1 className='text-4xl'>Oooops!</h1>
            <p>Parece que não foi possível encontrar o que você busca.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to={'/home'} className="m-4 flex justify-center">
                <h1 className="border-2 w-48 bg-violet-950 rounded">Voltar para a página inicial.</h1>
            </Link>
        </div>
    )
}
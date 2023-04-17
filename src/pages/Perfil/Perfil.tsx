import { useState } from 'react';
import { StyledButton } from '../../components/StyledButton';
import { StyledInput } from '../../components/StyledInput';

export function Perfil() {
    const [editPerfil, setEditPerfil] = useState<boolean>(false);

    return (
        <div className='border-2 h-full rounded flex flex-col justify-start items-center'>
            <h1 className='m-8'>Meu perfil</h1>

            <div className='h-2/3 w-2/3 flex flex-col items-center'>
                <ul>
                    <li>Hotmail: victormdsp@hotmail.com</li>
                    <li>Gmail: victormdsp@gmail.com</li>
                    <li className='flex flex-col items-center mt-2'> Redes sociais:
                        <ul className='ml-2'>
                            <li><a className='text-blue-600' href="https://www.linkedin.com/in/victor-martini-domingues-5b6986161/">Linkedin</a></li>
                            <li><a className='text-blue-600' href="https://github.com/victormdsp">Github</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}
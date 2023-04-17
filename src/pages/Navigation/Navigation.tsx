import { Outlet } from 'react-router-dom';
import { SelectPage } from '../../components/selectPage';
import { optionsType, sidebarOptions } from './menuOptions';
import { useState } from 'react';

export function Navigation() {
    const [, setSelectedPage] = useState();

    return (
        <div className='w-full flex h-full'>

            <div className="bg-slate-400 h-full w-40">
                <div className="flex justify-center align-center border-b-2 flex-col h-1/5">
                    <div className='rounded-full overflow-hidden'>
                        <img src="https://cdn-icons-png.flaticon.com/512/5987/5987462.png" alt="Photo" className='w-full h-full'/>
                    </div>
                    <h1 className='text-center'>{'User'}</h1>
                </div>

                <div className="flex flex-col bg-slate-700 p-2 pb-4 border-b-2 h-4/5">
                    {sidebarOptions.map((options: optionsType, index: number) => {
                        return <SelectPage key={index} pageId={index} updatePage={setSelectedPage} route={options.route} title={options.title}></SelectPage>
                    })}
                </div>
            </div>
            <div className='p-8 w-full'>
                <Outlet></Outlet>
            </div>
        </div>
    )
}
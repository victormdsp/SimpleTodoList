import { ReactSVG } from 'react-svg';
import { StyledButton } from './StyledButton';

interface propsType {
    openModal: boolean;
    onClose: Function;
    title: string;
    save: Function;
    children: any;
}

export function Modal(props: propsType) {

    window.onclick = (event) => {
        const target = event.target as HTMLDivElement;
        if (target.id == 'screenModal') {
            props.onClose();
        }
    }

    function returnResult() {
        const childProperties = props.children.props.children;
        props.save(childProperties.props.getValue.value);
    } 

    return (
        <div className={`${props.openModal ? 'block' : 'hidden'} flex p-16 justify-center items-center fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-black opacity-40`} id='screenModal'>
            <div className="duration-500 border-2 min-w-fit min-h-fit rounded-lg bg-slate-500 border-slate-700">
                <div className='h-8 flex justify-between items-center pl-4 pr-2 mt-2'>
                    <h1 className='text-xl'>{props.title}</h1>
                    <ReactSVG src='./../src/assets/closeButton.svg' className='cursor-pointer'
                        onClick={() => {
                            props.onClose();
                        }}>
                    </ReactSVG>
                </div>
                <div className='flex flex-col items-center m-4 min-h-fit'>
                    <div className='w-full h-full'>
                        {props.children}
                    </div>
                    <StyledButton text='Salvar' onClickFunction={() => returnResult()}></StyledButton>
                </div>
            </div>
        </div>
    )
}
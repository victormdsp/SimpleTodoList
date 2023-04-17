import { ReactSVG } from 'react-svg';
import { Modal } from './Modal';
import { Box } from './Box';
import { StyledInput } from './StyledInput';
import { dateToFormat } from '../services/time.services';

import { useState } from 'react';

interface propsType {
    task: IListaTodo;
    index: number;
    remove: Function;
    saveEdit?: Function;
    children: any;
}

interface IListaTodo {
    description: string;
    date: string;
}

export function TaskContainer(props: propsType) {
    const [openModal, setOpenModal] = useState(false);

    function editTodo(event: React.MouseEvent) {
        setOpenModal(true);
        event.stopPropagation();
    }

    function closeModal(){
        setOpenModal(false);
    };

    function saveEditTodo(newTaskDescription: string){
        props.task.description = newTaskDescription;
        props.task.date = dateToFormat(new Date());
        setOpenModal(false);
    }

    return <div key={props.index} className='flex justify-between items-center bg-emerald-500 rounded m-2 w-2/3 p-2 px-4'>
        <h1>{props.task.description}</h1>
        <div className='flex items-center'>
            <h1>{props.task.date}</h1>
            <button onClick={(event) => editTodo(event)} className='mx-2 cursor-pointer'>
                <ReactSVG src='./../src/assets/pen.svg'></ReactSVG>
            </button>
            <button onClick={() => props.remove(props.index)} className='cursor-pointer'>
                <ReactSVG src='./../src/assets/remove.svg'></ReactSVG>
            </button>
        </div>

        <Modal openModal={openModal} onClose={closeModal} title={'Editar Task'}
            save={saveEditTodo}>
            <Box key={Math.random()} className='mx-8'>
                <StyledInput title={'Task'} placeholder={props.task.description} getValue={{'value': ''}}></StyledInput>
            </Box>
        </Modal>
    </div>
}
import { useState, createRef } from 'react';
import { TaskContainer } from '../../components/TaskContainer';
import { dateToFormat } from '../../services/time.services';

interface IListaTodo {
    description: string;
    date: string;
}

export function Lista() {
    const [listaTodo, setListaTodo] = useState<Array<IListaTodo>>([]);
    const [required, setRequired] = useState<boolean>(false);
    const inputText: React.RefObject<HTMLInputElement> = createRef();

    function addTodo() {
        if (verifyRequired() && inputText.current) {
            const todo: IListaTodo =
            {
                description: inputText.current.value,
                date: dateToFormat(new Date()),
            }

            listaTodo.push(todo)
            setListaTodo([...listaTodo])
            if (inputText.current?.value) inputText.current.value = "";
        }
    }

    function removeTodo(index: number) {
        listaTodo.splice(index, 1);
        setListaTodo([...listaTodo]);
    }

    function verifyRequired(): boolean {
        if (!inputText.current?.value) {
            setRequired(true)
            return false;
        }
        else {
            setRequired(false)
            return true;
        };
    }

    return (
        <div>
            <div className="w-full flex justify-center items-center border-b-2 mb-2 pb-2">
                <input type="text" placeholder="Adicionar Task"
                    className={`rounded pl-4 p-2 w-2/3 border-b-2 mb-2 ${required ? " border-red-600 duration-100" : "border-transparent"}`}
                    ref={inputText}
                    onChange={() => verifyRequired()}
                />
                <button className="w-0 text-xl font-bold align-middle relative right-8 bottom-1 cursor-pointer"
                    disabled={required}
                    onClick={() => addTodo()}>+</button>
            </div>
            <div>
                {listaTodo.map((element: IListaTodo, index: number) => {
                    return <div key={index} className='flex items-center justify-center w-full'>
                        <TaskContainer task={element} index={index} 
                        remove={removeTodo}>
                        </TaskContainer>
                    </div>
                })}
            </div>
        </div>
    )
}
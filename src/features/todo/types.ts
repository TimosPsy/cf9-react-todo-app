export type Todo = {
    id: number;
    text: string;
    completed: boolean
}

export type TodoFormProps = {
    //On Add
    inputRef: React.RefObject<HTMLInputElement | null>;
}
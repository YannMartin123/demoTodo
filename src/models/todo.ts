export interface Todo{
    id: number,
    name: string,
    status: boolean,
    createdAt: Date, 
}

export interface TodoState{
    todos: Todo[],
}
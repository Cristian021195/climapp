import { create } from 'zustand'
/*
interface TodoState {
  todos: Todo[];
  addTodo: (description: string) => void;
  removeTodo: (id: string) => void;
  toggleCompletedState: (id: string) => void;
}
*/

interface ICounter {
    bears:number
}

interface ICounterState{
    bears:number,
    increasePopulation: ()=>void
    removeAllBears: ()=>void
}

export const useCounter = create<ICounterState>((set) => ({
  bears: 0,
  increasePopulation: () => set((state:ICounter) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

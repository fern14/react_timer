/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable react/react-in-jsx-scope */
import { ReactNode, createContext, useState, useReducer } from 'react'
import { ActionTypes, Cycle, cyclesReducer } from '../reducers/cycles'

interface createCycleData {
  task: string
  minutesAmount: number
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: createCycleData) => void
  interruptCurrentCycle: () => void
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
  children: ReactNode
}

export function CyclesContextProvider ({ children }: CyclesContextProviderProps): JSX.Element {
  const [cyclesState, dispatch] = useReducer(cyclesReducer,
    {
      cycles: [],
      activeCycleId: null
    })

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const { cycles, activeCycleId } = cyclesState

  const activeCycle: Cycle | undefined = cycles.find(cycle => cycle.id === activeCycleId)

  function setSecondsPassed (seconds: number): void {
    setAmountSecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished (): void {
    dispatch({
      type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
      payload: {
        activeCycleId
      }
    })
  }

  function createNewCycle (data: createCycleData): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()
    }

    dispatch({
      type: ActionTypes.ADD_NEW_CYCLE,
      payload: {
        newCycle
      }
    })

    setAmountSecondsPassed(0)
  }

  function interruptCurrentCycle (): Cycle | any {
    dispatch({
      type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
      payload: {
        activeCycleId
      }
    })
  }

  return (
        <CyclesContext.Provider
        value={{
          activeCycle,
          activeCycleId,
          markCurrentCycleAsFinished,
          amountSecondsPassed,
          setSecondsPassed,
          createNewCycle,
          interruptCurrentCycle,
          cycles
        }}
        >
            {children}
        </CyclesContext.Provider>
  )
}

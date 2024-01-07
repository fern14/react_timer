/* eslint-disable react/react-in-jsx-scope */
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function NewCycleForm (): JSX.Element {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <FormContainer>
             {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <label htmlFor="task">Vou trabalhar em</label>
             {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <TaskInput
                id="task"
                placeholder='Dê um nome para seu projeto'
                list='task-suggestions'
                // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                disabled={!!activeCycle}
                {...register('task')}
                autoComplete='off'
            />

             {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <datalist id='task-suggestions'>
                 {/* eslint-disable-next-line react/react-in-jsx-scope */}
                <option value="Projeto 1" />
                 {/* eslint-disable-next-line react/react-in-jsx-scope */}
                <option value="Projeto 2" />
                <option value="Projeto 3" />
            </datalist>

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput
                type="number"
                id="minutesAmount"
                placeholder='00'
                step={5}
                // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                disabled={!!activeCycle}
                {...register('minutesAmount', { valueAsNumber: true })}
            />

            <span>minutos.</span>
        </FormContainer>
  )
}

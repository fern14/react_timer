/* eslint-disable @typescript-eslint/no-unused-vars */
import { HandPalm, Play } from 'phosphor-react'
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton
} from './styles'
import { useContext } from 'react'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CyclesContext } from '../../contexts/CyclesContext'

// schema de validação do formulário
const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number()
    .min(5, 'O ciclo precisa ser de no min 60 minutos')
    .max(60, 'O ciclo precisa ser de no máx 60 minutos')
})
// cria uma interface baseada na schema acima
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

/* eslint-disable react/react-in-jsx-scope */
export function Home (): JSX.Element {
  const { activeCycle, createNewCycle, interruptCurrentCycle } = useContext(CyclesContext)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle (data: NewCycleFormData): void {
    createNewCycle(data)
    reset()
  }

  const task: string = watch('task')
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
          {/* usando o context do react hook form e passando os atributos para o componente */}
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>

          <Countdown />

        {/* eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, multiline-ternary */}
        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (<StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>)}
      </form>

    </HomeContainer>
  )
}

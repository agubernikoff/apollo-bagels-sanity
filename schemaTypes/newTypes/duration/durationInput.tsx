import {Box, Stack, Button, Flex, Grid} from '@sanity/ui'
import {ObjectInputProps, set} from 'sanity'
import {useCallback} from 'react'

type DurationValue = {
  _type?: 'duration'
  start?: string
  end?: string
}



export function DurationInput(props: ObjectInputProps<DurationValue>) {
  const DEFAULT_START = props.schemaType.options.defaultStart || '07:00';
  const DEFAULT_END = props.schemaType.options.defaultEnd || '17:00';
  console.log(props)
  const {onChange, value = {}} = props

  const handleTimeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const {name, value: timeValue} = event.target

      if (name === 'start' || name === 'end') {
        onChange(
          set({
            ...value,
            _type: 'duration',
            [name]: timeValue,
          })
        )
      }
    },
    [onChange, value]
  )

  const handleReset = useCallback(() => {
    onChange(
      set({
        _type: 'duration',
        start: DEFAULT_START,
        end: DEFAULT_END,
      })
    )
  }, [onChange])

  return (
    <Stack space={3}>
      <Grid columns={2} gap={3}>
        <Flex direction="column" gap={2}>
          <label>Opening Time</label>
          <input
            type="time"
            name="start"
            value={value.start || DEFAULT_START}
            onChange={handleTimeChange}
          />
        </Flex>
        <Flex direction="column" gap={2}>
          <label>Closing Time</label>
          <input
            type="time"
            name="end"
            value={value.end || DEFAULT_END}
            onChange={handleTimeChange}
          />
        </Flex>
      </Grid>
      <Button text="Reset Hours" mode="ghost" onClick={handleReset} />
    </Stack>
  )
}

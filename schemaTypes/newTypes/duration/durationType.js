// ./schema/duration/durationType.ts

import {defineField, defineType} from 'sanity'
import {DurationInput} from './DurationInput'

export const durationType = defineType({
  name: 'duration',
  title: 'Duration',
  type: 'object',
  fields: [
    defineField({
      name: 'start',
      title: 'Opening Time',
      type: 'string', // Keep as string since `type="time"` outputs string
      default: '07:00',
    }),
    defineField({
      name: 'end',
      title: 'Closing Time',
      type: 'string',
      default: '17:00',
    }),
  ],
  // make the fields render next to each other
  options: {columns: 2, defaultStart: '07:00', defaultEnd: '17:00'},
  components: {input: DurationInput},
})

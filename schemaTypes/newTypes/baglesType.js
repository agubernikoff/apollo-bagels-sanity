import {defineField} from 'sanity'

export default defineField({
  name: 'bagels',
  type: 'object',
  fields: [
    defineField({name: 'flavors', type: 'array', of: [{type: 'menuItem'}]}),
    defineField({name: 'quantities', type: 'array', of: [{type: 'menuItem'}]}),
  ],
})

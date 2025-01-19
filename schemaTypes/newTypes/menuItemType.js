import {defineField} from 'sanity'

export const menuItemType = defineField({
  name: 'menuItem',
  type: 'object',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'price', type: 'number'}),
    defineField({name: 'image', type: 'image'}),
  ],
})

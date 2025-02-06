import {UlistIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default {
  name: 'menuPage',
  title: 'Menu',
  type: 'document',
  icon: () => '📋',
  fields: [
    defineField({name: 'defaultImage', type: 'image'}),
    defineField({
      name: 'bagels',
      type: 'bagels',
    }),
    defineField({name: 'fish', type: 'array', of: [{type: 'menuItem'}]}),
    defineField({name: 'spreads', type: 'array', of: [{type: 'menuItem'}]}),
    defineField({name: 'sandwiches', type: 'array', of: [{type: 'menuItem'}]}),
    defineField({name: 'drinks', type: 'array', of: [{type: 'menuItem'}]}),
  ],
}

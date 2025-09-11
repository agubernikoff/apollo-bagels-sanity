import {InfoOutlineIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export const infoType = defineField({
  name: 'info',
  title: 'Info',
  type: 'document',
  icon: () => 'ℹ',
  fields: [
    {name: 'backgroundImage', type: 'image'},
    {name: 'text', type: 'portableText'},
  ],
})

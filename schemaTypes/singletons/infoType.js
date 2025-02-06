import {InfoOutlineIcon} from '@sanity/icons'

export default {
  name: 'info',
  title: 'Info',
  type: 'document',
  icon: () => 'ℹ',
  fields: [
    {name: 'backgroundImage', type: 'image'},
    {name: 'text', type: 'portableText'},
  ],
}

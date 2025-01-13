import {InfoOutlineIcon} from '@sanity/icons'

export default {
  name: 'info',
  title: 'Info',
  type: 'document',
  icon: InfoOutlineIcon,
  fields: [
    {name: 'backgroundImage', type: 'image'},
    {name: 'text', type: 'portableText'},
  ],
}

import {ClockIcon} from '@sanity/icons'

export default {
  name: 'storeHours',
  title: 'Store Hours',
  type: 'document',
  icon: ClockIcon,
  fields: [
    {name: 'monday', type: 'duration'},
    {name: 'tuesday', type: 'duration'},
    {name: 'wednesday', type: 'duration'},
    {name: 'thursday', type: 'duration'},
    {name: 'friday', type: 'duration'},
    {name: 'saturday', type: 'duration'},
    {name: 'sunday', type: 'duration'},
  ],
}

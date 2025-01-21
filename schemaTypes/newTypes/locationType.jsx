import {defineField} from 'sanity'
import {PinIcon} from '@sanity/icons'

export const locationType = defineField({
  name: 'location',
  type: 'document',
  icon: PinIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required.'),
    }),
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) =>
        Rule.regex(/^\(\d{3}\) \d{3}-\d{4}$/, {name: 'phone number', invert: false}).error(
          'Please enter a valid phone number in the format (555) 555-5555.',
        ),
      description: 'Enter the phone number in the format (555) 555-5555.',
    },
    defineField({
      name: 'address',
      type: 'address',
      validation: (rule) =>
        rule.custom((duration) => {
          console.log(Object.keys(duration))
          if (2 < Object.keys(duration).length && Object.keys(duration).length < 5)
            return 'Please complete entering Adress fields'
          else return true
        }),
    }),
    defineField({name: 'orderLink', type: 'url'}),
    defineField({name: 'cateringLink', type: 'url'}),
    defineField({name: 'videoBackground', type: 'file'}),
    defineField({name: 'comingSoon', type: 'boolean'}),
  ],
})

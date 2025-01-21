import {defineField} from 'sanity'

export const addressType = defineField({
  name: 'address',
  type: 'object',
  fields: [
    {
      name: 'street',
      title: 'Street',
      type: 'string',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
    {
      name: 'state',
      title: 'State',
      type: 'string',
      options: {
        list: [
          {title: 'Alabama', value: 'AL'},
          {title: 'Alaska', value: 'AK'},
          {title: 'Arizona', value: 'AZ'},
          {title: 'Arkansas', value: 'AR'},
          {title: 'California', value: 'CA'},
          {title: 'Colorado', value: 'CO'},
          {title: 'Connecticut', value: 'CT'},
          {title: 'Delaware', value: 'DE'},
          {title: 'District of Columbia', value: 'DC'},
          {title: 'Florida', value: 'FL'},
          {title: 'Georgia', value: 'GA'},
          {title: 'Hawaii', value: 'HI'},
          {title: 'Idaho', value: 'ID'},
          {title: 'Illinois', value: 'IL'},
          {title: 'Indiana', value: 'IN'},
          {title: 'Iowa', value: 'IA'},
          {title: 'Kansas', value: 'KS'},
          {title: 'Kentucky', value: 'KY'},
          {title: 'Louisiana', value: 'LA'},
          {title: 'Maine', value: 'ME'},
          {title: 'Maryland', value: 'MD'},
          {title: 'Massachusetts', value: 'MA'},
          {title: 'Michigan', value: 'MI'},
          {title: 'Minnesota', value: 'MN'},
          {title: 'Mississippi', value: 'MS'},
          {title: 'Missouri', value: 'MO'},
          {title: 'Montana', value: 'MT'},
          {title: 'Nebraska', value: 'NE'},
          {title: 'Nevada', value: 'NV'},
          {title: 'New Hampshire', value: 'NH'},
          {title: 'New Jersey', value: 'NJ'},
          {title: 'New Mexico', value: 'NM'},
          {title: 'New York', value: 'NY'},
          {title: 'North Carolina', value: 'NC'},
          {title: 'North Dakota', value: 'ND'},
          {title: 'Ohio', value: 'OH'},
          {title: 'Oklahoma', value: 'OK'},
          {title: 'Oregon', value: 'OR'},
          {title: 'Pennsylvania', value: 'PA'},
          {title: 'Rhode Island', value: 'RI'},
          {title: 'South Carolina', value: 'SC'},
          {title: 'South Dakota', value: 'SD'},
          {title: 'Tennessee', value: 'TN'},
          {title: 'Texas', value: 'TX'},
          {title: 'Utah', value: 'UT'},
          {title: 'Vermont', value: 'VT'},
          {title: 'Virginia', value: 'VA'},
          {title: 'Washington', value: 'WA'},
          {title: 'West Virginia', value: 'WV'},
          {title: 'Wisconsin', value: 'WI'},
          {title: 'Wyoming', value: 'WY'},
        ],
      },
      initialValue: 'NY',
    },
    {
      name: 'postalCode',
      title: 'Postal Code',
      type: 'string',
      validation: (Rule) =>
        Rule.regex(/^\d{5}(-\d{4})?$/, {
          name: 'US postal code',
        }).error('Postal code must be in the format 12345 or 12345-6789.'),
    },
    // {
    //   name: 'country',
    //   title: 'Country',
    //   type: 'string',
    //   options: {
    //     list: [
    //       {title: 'United States', value: 'US'},
    //       {title: 'Canada', value: 'CA'},
    //       {title: 'United Kingdom', value: 'UK'},
    //       // Add more countries as needed
    //     ],
    //   },
    //   validation: (Rule) => Rule.required().error('Country is required.'),
    // },
  ],
})

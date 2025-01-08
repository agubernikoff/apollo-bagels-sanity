import {ListItemBuilder} from 'sanity/structure';
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Store Hours')
    .schemaType('storeHours')
    .child(S.editor().title('Store Hours').schemaType('storeHours').documentId('storeHours'))
)

import {ListItemBuilder} from 'sanity/structure';
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Menu')
    .schemaType('menuPage')
    .child(S.editor().title('Menu').schemaType('menuPage').documentId('menuPage'))
)

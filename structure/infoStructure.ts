import {ListItemBuilder} from 'sanity/structure';
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Info')
    .schemaType('info')
    .child(S.editor().title('Info').schemaType('info').documentId('info'))
)

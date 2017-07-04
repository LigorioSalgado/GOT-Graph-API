import {
    GraphQLID,
    GraphQLNonNull

} from 'graphql';

import { characterType } from '../../types/character';
import CharacterModel from '../../../models/character';

export default {
    type:characterType,
    args:{
        id:{
        name: 'ID',
        type:new GraphQLNonNull(GraphQLID)
         }
          
    },
    resolve(root, params){
        return CharacterModel.findById(params.id).exec();
    }
}
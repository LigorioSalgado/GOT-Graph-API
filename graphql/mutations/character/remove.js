import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import {characterType } from '../../types/character';
import CharacterModel from '../../../models/character';

export default {

    type: characterType,
    args: {
        id: {
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        const removedCharacter = CharacterModel.findOneAndRemove(params.id).exec()
        if(!removedCharacter){
            throw new Error ('Error removing character');
        }
        return removedCharacter;
    }


}
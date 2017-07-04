import {GraphQLNonNull} from 'graphql';

import {characterType, characterInputType} from '../../types/character';
import CharacterModel from '../../../models/character'

export default {
    type: characterType,
    args: {
        data:{
            name:'data',
            type: new GraphQLNonNull(characterInputType)
        }
    },
    resolve(root, params){
        const cModel = new CharacterModel(params.data);
        const newCharacter = cModel.save();
        if(!newCharacter){
            throw  new Error ('Error adding character');
        }
        return newCharacter
    }
}

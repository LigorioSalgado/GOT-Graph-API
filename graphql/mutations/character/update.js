import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import {characterType, characterInputType } from '../../types/character';
import CharacterModel from '../../../models/character';

export default {
    type: characterType,
    args: {
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data:{
            name:'data',
            type: new GraphQLNonNull(characterInputType)
        }
    },
    resolve(root,params){
        return CharacterModel.findByIdAndUpdate(params.id,{$set:{...params.data}})
            .then(data => CharacterModel.findById(data.id).exec())
            .catch(err => new Error ('Couldnt upddate character data',err))
    }
};
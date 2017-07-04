import {
GraphQLList
} from 'graphql';
import { characterType } from '../../types/character'
import CharacterModel from '../../../models/character'

export default {
    type: new GraphQLList(characterType),
    resolve(){
        const characters = CharacterModel.find().exec();
        if(!characters){
            throw new Error("Error while fetching characters");
        }
        return characters;
    }
}
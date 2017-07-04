import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLList

} from 'graphql';

import CharacterModel from '../../models/character'
import {characterType} from './character'


export const houseType = new GraphQLObjectType({
    name:"House",
    description:"Houses of GOT Universe",
    fields:() => ({
        _id:{
         type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type:GraphQLString
        },
        coat_of_arms:{
            type:GraphQLString
        },
        words:{
            type:GraphQLString
        },
        seat:{
            type:GraphQLString
        },
        members:{
            type: new GraphQLList(characterType),
            resolve(character){
                const { _id } = character;
                return CharacterModel.find({ house:_id}).exec()
            }
        }
    })
});


export const houseInputType = new GraphQLInputObjectType({
    name:"HouseInput",
    description: 'Insert House',
    fields: () => ({
        name: {
            type:GraphQLString
        },
        coat_of_arms:{
            type:GraphQLString
        },
        words:{
            type:GraphQLString
        },
        seat:{
            type:GraphQLString
        },

    })

});



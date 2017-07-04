import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLID

} from 'graphql';

import HouseModel from '../../models/house'
import { houseType } from './house';

export const characterType = new GraphQLObjectType({
    name:'Chacarter',
    description: 'Character from GOT Universe',
    fields: () => ({
        _id:{
            type: new GraphQLNonNull(GraphQLID)
        },
        name : {
            type: GraphQLString
        },
        age : {
            type:GraphQLInt
        },
        description:{
            type:GraphQLString
        },
        image: {
            type:GraphQLString
        },
        house:{
            type:houseType,
            resolve(houseMemeber) {
                const { house } = houseMemeber;
                console.info(house)
                return HouseModel.findById(house).exec();
            }
        }

    })

});

export const characterInputType = new GraphQLInputObjectType({
    name:'characterInput',
    description:'Insert Character',
    fields: () => ({
        name : {
            type: GraphQLString
        },
        age : {
            type:GraphQLInt
        },
        description:{
            type:GraphQLString
        },
        image: {
            type:GraphQLString
        },
        house: {
            type:GraphQLString
        }
    })

});
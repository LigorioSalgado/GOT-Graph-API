import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import {houseType, houseInputType } from '../../types/house';
import HouseModel from '../../../models/house';

export default {
    type: houseType,
    args: {
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data:{
            name:'data',
            type: new GraphQLNonNull(houseInputType)
        }
    },
    resolve(root,params){
        return HouseModel.findByIdAndUpdate(params.id,{$set:{...params.data}})
            .then(data => HouseModel.findById(data.id).exec())
            .catch(err => new Error ('Couldnt upddate house data',err))
    }
};
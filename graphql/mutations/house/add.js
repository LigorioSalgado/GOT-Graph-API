import {GraphQLNonNull} from 'graphql';

import {houseType, houseInputType} from '../../types/house';
import HouseModel from '../../../models/house'

export default {
    type: houseType,
    args: {
        data:{
            name:'data',
            type: new GraphQLNonNull(houseInputType)
        }
    },
    resolve(root, params){
        const hModel = new HouseModel(params.data);
        const newHouse = hModel.save();
        if(!newHouse){
            throw  new Error ('Error adding house');
        }
        return newHouse
    }
}
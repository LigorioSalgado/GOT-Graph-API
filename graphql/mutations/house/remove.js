import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import {houseType } from '../../types/house';
import HouseModel from '../../../models/house';

export default {

    type: houseType,
    args: {
        id: {
            name:'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        const removedHouse = HouseModel.findOneAndRemove(params.id).exec()
        if(!removedHouse){
            throw new Error ('Error removing house');
        }
        return removedHouse;
    }


}
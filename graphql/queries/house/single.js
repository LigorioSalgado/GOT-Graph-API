import {
    GraphQLID,
    GraphQLNonNull

} from 'graphql';

import { houseType } from '../../types/house';
import HouseModel from '../../../models/house';

export default {
    type:houseType,
    args:{
        id:{
        name:'ID',
        type:new GraphQLNonNull(GraphQLID)
        }
        
    },
    resolve(root, params){
        return HouseModel.findById(params.id).exec();
    }
}
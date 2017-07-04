import {
GraphQLList
} from 'graphql';
import { houseType } from '../../types/house'
import HouseModel from '../../../models/house'

export default {
    type: new GraphQLList(houseType),
    resolve(){
        const houses = HouseModel.find().exec();
        if(!houses){
            throw new Error("Error while fetching houses");
        }
        return houses;
    }
}
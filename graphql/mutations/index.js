import characterMutation from './character';
import houseMutation from './house';

export default{
    ...characterMutation,
    ...houseMutation
}
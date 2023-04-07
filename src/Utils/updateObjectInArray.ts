import {UserType} from "src/Redux/users-reducer";

export const updateObjectInArray = (items: UserType[], itemId:number, objPropName: string, newObjProps: {}) => {
 return  items.map(el => {
        if (el['id'] === itemId) {
            return {...el, ...newObjProps}
        }
        return el
})
}



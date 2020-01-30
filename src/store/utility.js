export const updateObject =(oldObject,updatedProperties) =>{
    return {
        ...oldObject,
        ...updatedProperties
    }
}

//oldObject & updatedProperties both should be object
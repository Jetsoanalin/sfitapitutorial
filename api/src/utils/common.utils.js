exports.getPlaceholderStringForArray = (arr)=>{
    if(!Array.isArray(arr)){
        throw new Error('Invalid Input');
    }

    const placeholders = [...arr];
    return placeholders.fill('?').join(', ').trim();

}

exports.multipleColumnSet = (object)=>{
    if(typeof object !== 'object'){
        throw new Error('Invalid Input');
    }
    const keys = Object.keys(object);
    const values = Object.values(object);

    columnSet = keys.map(key => `${key} = ?`).join('. ');
    return {
        columnSet,
        values
    }
}
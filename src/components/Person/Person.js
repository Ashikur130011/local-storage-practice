import React from 'react';
import { addToDb, removeItem
 } from '../Storage';

const Person = (props) => {
    const {name,age,_id} = props.person
    const add= (id) => {
        addToDb(id)
    }
    return (
      <div>
        <h1>This is a person</h1>
        <h2>Name: {name}</h2>
        <h3>Age: {age}</h3>
        <h4>Id: {_id}</h4>
        <button onClick={() => add(_id)}>Add to Cart</button>
        <button onClick={() => removeItem(_id)}>Remove</button>
      </div>
    );
};

export default Person;
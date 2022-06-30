import React from 'react';

const Person = (props) => {
    return (
      <div>
        <h1>This is a person</h1>
        <h2>Name: {props.person.name}</h2>
        <button>Add to Cart</button>
        <button>Remove</button>
      </div>
    );
};

export default Person;
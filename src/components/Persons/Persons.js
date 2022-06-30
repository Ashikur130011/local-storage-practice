import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';

const Persons = () => {
    const [persons, setPersons] = useState([])

    useEffect( () => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setPersons(data))
    },[])
    return (
        <div>
            <h1>These are persons</h1>
            <div>
                {
                    persons.map(person => <Person 
                        person={person}
                        key={person._id}
                        ></Person>)
                }
            </div>
        </div>
    );
};

export default Persons;
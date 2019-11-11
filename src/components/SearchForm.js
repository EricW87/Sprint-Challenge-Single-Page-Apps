import React, { useState } from "react";

export default function SearchForm(props) {
 
  const [name, setName] = useState('');

  const onSubmitPress = event => {
    event.preventDefault();
    props.findCharacter(name);
    setName('');
  }

  const onInputChange = event => {
    setName(event.target.value);
  }

  return (
    <section className="search-form">
      <form onSubmit={onSubmitPress}>
        Name:
        <input name='name' value={name} onChange={onInputChange} type="text" />
        <button>Submit</button>
      </form>
      <button onClick={() => props.clearCharacter()}>Reset</button>
    </section>
  );
}

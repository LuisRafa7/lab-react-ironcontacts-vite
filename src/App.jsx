import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  let [contact, setContact] = useState(contacts.slice(0, 5));
  let [remaining, setRemaining] = useState(contacts.slice(5));

  const handleAddRandom = () => {
    const randomIndex = Math.floor(Math.random() * remaining.length);
    let randomPerson = "";
    if (randomIndex !== 0) {
      randomPerson = remaining[randomIndex];
      remaining.splice(randomIndex, 1);
      setContact([randomPerson, ...contact]);
    } else {
    }
  };

  const sortByPopularity = () => {
    const sortPopularity = [...contact].sort((a, b) =>
      a.popularity < b.popularity ? 1 : -1
    );
    setContact(sortPopularity);
  };

  const sortByName = () => {
    const sortName = [...contact].sort((a, b) => (a.name > b.name ? 1 : -1));
    setContact(sortName);
  };

  const removePerson = (id) => {
    const filterPerson = contact.filter((person) => person.id !== id);
    setContact(filterPerson);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={handleAddRandom}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contact.map((onePerson) => {
            return (
              <tr key={onePerson.id}>
                <th>
                  <img src={onePerson.pictureUrl} alt="" className="picture" />
                </th>
                <th>{onePerson.name}</th>
                <th>{onePerson.popularity.toFixed(2)}</th>
                <th>{onePerson.wonOscar ? <p>🏆</p> : <p></p>}</th>
                <th>{onePerson.wonEmmy ? <p>🌟</p> : <p></p>}</th>
                <th>
                  <button
                    onClick={() => {
                      removePerson(onePerson.id);
                    }}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

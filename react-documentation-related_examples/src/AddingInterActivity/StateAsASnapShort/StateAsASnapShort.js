import React, { useState } from 'react';

function StateAsASnapShort() {
  const [selectedName, setSelectedName] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  function handleNameChange(event) {
    setSelectedName(event.target.value);
  };

  function handleMessageSend() {
    if (selectedName === 'Vishal') {
      setShowMessage(true);
    } else if (selectedName === 'Madhaven') {
      setShowMessage(true);
    } else  if (selectedName === 'None'){
      alert('Please select a valid name.');
    }
  };

  return (
    <div><br/><br/><br/>
    <h1>Welcome To The Page Of State As A SnapShort</h1>
      <select value={selectedName} onChange={handleNameChange}>
        <option value="None">Select a Name</option>
        <option value="Vishal">Vishal</option>
        <option value="Madhaven">Madhaven</option>
      </select><br/><br/><br/>
      <button onClick={handleMessageSend}>Click</button>
      {showMessage && (
        <h1>
          {selectedName === 'Vishal'
            ? 'Your message will be sent through  Vishal'
            : 'Your message will be sent through Madhaven.'}
        </h1>
      )}
    </div>
  );
}

export default StateAsASnapShort;

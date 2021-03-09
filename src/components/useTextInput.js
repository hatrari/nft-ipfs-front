import React, { useState } from 'react';

const useTextInput = () => {
	const [value, setValue] = useState('');

  const handleChange = e => setValue(e.target.value);
	
	return [
		value,
		<input type='text' onChange={handleChange} />
  ]
}

export default useTextInput;

import React, { useState } from 'react';
import { API_BASE_URL, IPFS_URL } from '../config';

const AddFile = ({setLoading, setUrl, setJsonData}) => {
	const [name, setName] = useState('');
	
	const nameChange = e => setName(e.target.value);

	const saveName = (value, imageUrl) => {
		fetch(`${API_BASE_URL}json`, {
			method: 'POST',
			headers: {
			 'Accept': 'application/json',
			 'Content-Type': 'application/json'
			},
			body: JSON.stringify({name: value, image: imageUrl})
		})
		.then(res => res.json())
		.then(data => {
			let jsonUrl = IPFS_URL + data.IpfsHash;
			let jsonData = {
				name,
				external_url: jsonUrl,
				image: imageUrl
			};
			setJsonData(jsonData);
		})
		.catch(error => error.message);
	}

  const handleClick = () => {
		let file = document.querySelector('#file');
		if(name === '' || file.files.length === 0) return;
		setLoading(true);
		const formData = new FormData();
		formData.append('file', file.files[0]);
		fetch(`${API_BASE_URL}file`, { method: 'POST', body: formData })
			.then(res => res.json())
			.then(data => {
				let imageUrl = IPFS_URL + data.IpfsHash;
				setUrl(imageUrl);
				saveName(name, imageUrl);
			})
			.catch(error => console.error(error.message))
			.finally(() => setLoading(false));
	}
	
	return (
    <div>
			<h1>Add Image</h1>
			<div className="form-group">
				<label>Image</label>
				<input className="form-control-file" type='file' id='file' />
			</div>
			<div className="form-group">
				<label>Name</label>
				<input className="form-control" type='text' onChange={nameChange} />
			</div>
			<div className="form-group">
				<button className="btn btn-primary" onClick={handleClick}>Submit</button>
			</div>
		</div>
  );
}

export default AddFile;

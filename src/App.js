import React, { useState } from 'react';
import AddFile from './components/AddFile';
import Loading from './components/Loading';
import Image from './components/Image';
import JsonData from './components/JsonData';

const App = () => {
	const [loading, setLoading] = useState(false);
	const [url, setUrl] = useState(undefined);
	const [jsonData, setJsonData] = useState();

	if(loading) {
		return (
			<div className="container p-4">
				<div className="row">
					<div className="col-12">
						<Loading />
					</div>
				</div>
			</div>
		)
	} else {
		return (
			<div className="container p-4">
				<div className="row">
					<div className="col-12">
						<AddFile setLoading={setLoading} setUrl={setUrl} 
							setJsonData={setJsonData} />
						{url && (<Image url={url} />)}
						{jsonData && (<JsonData data={jsonData} />)}
					</div>
				</div>
			</div>
		)
	}
}

export default App;

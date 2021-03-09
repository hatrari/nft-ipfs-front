const JsonData = ({data}) => {
	return (
		<div>
			<div>Name: <b>{data.name}</b></div>
			<div>Image: <b>{data.image}</b></div>
			<div>External URL: <b>{data.external_url}</b></div>
		</div>
	);
}

export default JsonData;

const searchController = (data) => {
	const microsoft = {
		name: "Microsoft",
		description: "Microsoft Corporation is an American multinational corporation and technology company headquartered in Redmond, Washington. Microsoft's best-known software products are the Windows line of operating systems, the Microsoft 365 suite of productivity applications, and the Edge web browser.",
		tags: ["Microsoft", "Software"]
	};

	const google = {
		name: "Google",
		description: "Google LLC is an American multinational corporation and technology company focusing on online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, consumer electronics, and artificial intelligence",
		tags: ["Google", "Software"]
	};
	
	if(data === 'microsoft') return microsoft;
	else if(data === 'google') return google;
	return null;
};

module.exports = searchController;

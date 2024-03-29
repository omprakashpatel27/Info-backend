const filterController = (data) => {
	const companyInfo = [];
	data.map((element, index) => {
		if (element == 'Microsoft') {
			const microsoft = {
				name: "Microsoft",
				description: "Microsoft Corporation is an American multinational corporation and technology company headquartered in Redmond, Washington. Microsoft's best-known software products are the Windows line of operating systems, the Microsoft 365 suite of productivity applications, and the Edge web browser.",
				tags: ["Microsoft", "Software"]
			};

			companyInfo.push(microsoft);
		}
		else if (element == 'Google') {
			const google = {
				name: "Google",
				description: "Google, Inc. is an American software company based in Santa Clara, California that develops a cloud computing platform to help companies manage digital workflows for enterprise operations",
				tags: ["Google", "Software"]
			};

			companyInfo.push(google);
		}
	})

	return companyInfo;
}

module.exports = filterController;
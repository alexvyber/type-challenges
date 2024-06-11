type ObjectKeyPaths<T extends object> = {
	[K in keyof T]: T[K] extends object
		? ObjectKeyPaths<T[K]>
		: `${K extends string | number ? K : never}`;
};

const refObjectKeyPaths = {
	count: 1,
	person: {
		name: "cattchen",
		age: 22,
		books: ["book1", "book2"],
		pets: [
			{
				type: "cat",
			},
		],
	},
};

type ObjectKeyPathsRes = ObjectKeyPaths<typeof refObjectKeyPaths>;
type ObjectKeyPathsRes2 = ObjectKeyPaths<(typeof refObjectKeyPaths)["person"]>;

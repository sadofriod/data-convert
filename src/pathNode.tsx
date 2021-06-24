import React from "react";

const PathNode: React.FC<Common.PathNode> = (props) => {
	const { updateCalc, code, path, pathKey, calcNode, tempValue } = props;
	console.log(calcNode, pathKey);

	const isDisable = (path: string) => !calcNode || (calcNode[pathKey].includes(path) && !code);

	const handleClick = () => {
		const newKeys = calcNode[pathKey].push(path);
		updateCalc(code, {
			...calcNode,
			[pathKey]: newKeys,
			tempValue,
		});
	};

	return (
		<button onClick={handleClick} disabled={isDisable(path)}>
			{path}
		</button>
	);
};

export default PathNode;

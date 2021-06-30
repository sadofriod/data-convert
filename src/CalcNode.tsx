import React from "react";

const operationOption = ["direct-map", "map-by-index"];

const CalcListItem: React.FC<Common.CalcListItemProps> = (props) => {
	const { updateCalc, deleteCalc, calcNode, setCurrentCalcCode, code, sourceValMap, mapping } = props;
	const { targetKey, sourceKey, operation } = calcNode;
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		updateCalc(code, {
			...calcNode,
			operation: (e.target.value as any) || "direct-map",
		});
		// setCurrentCalcCode(code);
	};
	return (
		<div onClick={() => setCurrentCalcCode(code)}>
			<div>ID: {code}</div>
			<div>
				<div>
					<button onClick={() => deleteCalc(code)}>DEL</button>
					{/* <button
						onClick={() => {
							console.log(getRestul(mapping, sourceValMap));
						}}
					>
						RUN
					</button> */}
				</div>
				<div>
					<select value={operation} onChange={handleChange}>
						{operationOption.map((item) => (
							<option key={item}>{item}</option>
						))}
					</select>
				</div>
			</div>
			<div>
				目标路径：
				{targetKey.map((item) => {
					return (
						<button disabled={true} key={item}>
							{item}
						</button>
					);
				})}
			</div>
			<div>
				原始数据节点：
				{sourceKey.map((item) => {
					return (
						<button disabled={true} key={item}>
							{item}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default CalcListItem;

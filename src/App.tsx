import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import enumKey from "./util/enumKey";
import { createNode, updateNode } from "./util/node-operation";
import testData from "./util/testData";

function App() {
	const dataKeyNode = enumKey(testData);
	const [calc, setCalc] = useState<Common.CalcKeysResult>({});
	const [currentCalcKey, setCurrentCalcKey] = useState<string>("");

	const deleteCalc = (code: string) => {
		const result = calc;
		delete result[code];
		setCalc(result);
	};

	const createCalc = () => {
		const { code, node } = createNode();
		setCalc({
			...calc,
			[code]: node,
		});
	};

	return (
		<div className="App">
			<div className="left">{/* <div className="canvas_container">
					{renderDatastruct()}
				</div>
				<div className="data_node_container">{renderDataNode()}</div> */}</div>
			{/* <div className="center">{renderCalc()}</div> */}
			<div className="right">
				<div className="operation_broad">
					<div>数学运算</div>
					<div>集合运算</div>
					<button onClick={createCalc}>创建运算</button>
				</div>
				<div className="convert_data"></div>
			</div>
		</div>
	);
}

export default App;

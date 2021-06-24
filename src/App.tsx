import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import CalcListItem from "./CalcNode";
import PathNode from "./pathNode";
import enumKey from "./util/enumKey";
import { createNode } from "./util/node-operation";
import { sourceData, targetData } from "./util/testData";

const source = enumKey(sourceData);

const target = enumKey(targetData);

function App() {
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

	const updateCalc = (code: string, node: Common.CalcNode) => {
		setCalc({
			...calc,
			[code]: node,
		});
	};

	const renderCalc = () => {
		const keys = Object.keys(calc);
		return keys.map((key) => {
			const node = calc[key];
			return <CalcListItem key={key} updateCalc={updateCalc} deleteCalc={deleteCalc} setCurrentCalcCode={setCurrentCalcKey} code={key} calcNode={node} />;
		});
	};

	const renderPathKey = (enumKeys: Common.ResultType, pathKey: "targetKey" | "sourceKey") => {
		const keys = Object.keys(enumKeys);
		return keys.map((key) => {
			const val = enumKeys[key];
			return <PathNode updateCalc={updateCalc} calcNode={calc[currentCalcKey]} pathKey={pathKey} path={key} key={key} tempValue={val} code={currentCalcKey} />;
		});
	};

	return (
		<div className="App">
			<div className="left">
				<div className="data_node_container">
					<h3>原始数据节点</h3>
					{renderPathKey(source, "sourceKey")}
				</div>
				<div className="data_node_container">
					<h3>目标数据节点</h3>
					{renderPathKey(target, "sourceKey")}
				</div>
			</div>
			<div className="center">{renderCalc()}</div>
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

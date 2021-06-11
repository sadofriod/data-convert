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
	// const [currentTargetKey, setCurrentTargetKey] = useState<string>("");
	// const [currentSourceKey, setCurrentSourceKey] = useState<string>("");
	// const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
	// const [targetSelectedKeys, setTargetSelectedKeys] = useState<string[]>([]);
	const targetDatastruct = [
		{
			outsideData: "",
			arrayData: [
				{
					test: "",
					test1: "",
				},
			],
		},
	];

	const isDisable = (key: string, isSource: boolean) => {
		// return isSource?calc[currentCalcKey].sourceKey
		if (!currentCalcKey) {
			return true;
		}
		if (!calc[currentCalcKey]) {
			return true;
		}
		if (isSource) {
			return Array.isArray(calc[currentCalcKey].sourceKey) ? calc[currentCalcKey].sourceKey.includes(key) : key === calc[currentCalcKey].sourceKey;
		} else {
			return Array.isArray(calc[currentCalcKey].targetKey) ? calc[currentCalcKey].targetKey.includes(key) : key === calc[currentCalcKey].targetKey;
		}
	};

	const updateCalc = (code: string, key: string, isSource: boolean, previous?: string, operation?: Common.KeyOperation) => {
		const currentCalc = calc[currentCalcKey];
		const { sourceKey, targetKey } = currentCalc;
		if (isSource) {
			const keys = Array.isArray(sourceKey) ? [...sourceKey, key] : [sourceKey, key];
			setCalc(
				updateNode(calc, code, {
					sourceKey: keys,
					previous: [],
					operation,
					value: null,
				})
			);
		} else {
			const keys = Array.isArray(targetKey) ? [...targetKey, key] : [targetKey, key];
			setCalc({
				...calc,
				[code]: {
					...currentCalc,
					targetKey: keys,
					previous: [],
					operation,
					value: null,
				},
			});
		}
	};

	const renderDataNode = () => {
		const source = Object.keys(dataKeyNode);
		return source.map((item, index) => (
			<button
				key={index}
				onClick={() => {
					// setSelectedKeys([...selectedKeys, item]);
					updateCalc(currentCalcKey, item, false);
					// setCurrentSourceKey(item)
				}}
				disabled={isDisable(item, false)}
			>
				{item}
			</button>
		));
	};
	const renderDatastruct = () => {
		const source = Object.keys(enumKey(targetDatastruct));
		return source.map((item, index) => (
			<button
				key={index}
				onClick={() => {
					// setTargetSelectedKeys([...targetSelectedKeys, item]);
					// setCurrentTargetKey(item);
					updateCalc(currentCalcKey, item, true);
				}}
				disabled={isDisable(item, true)}
			>
				{item}
			</button>
		));
	};

	const renderCalc = () => {
		const keys = Object.keys(calc);
		return keys.map((key, index) => {
			const item = calc[key];
			const { sourceKey, targetKey } = item;
			const getKey = (keys: string[] | string) => (Array.isArray(keys) ? keys : [keys]);
			return (
				<div key={index} onClick={() => setCurrentCalcKey(key)}>
					<div>
						{key}
						<button
							onClick={(e) => {
								e.stopPropagation();
								deleteCalc(key);
							}}
						>
							delete
						</button>
						<button
							onClick={(e) => {
								e.stopPropagation();
								deleteCalc(key);
							}}
						>
							result
						</button>
					</div>
					<div>
						{getKey(sourceKey).map((item) => (
							<div>{item}</div>
						))}
					</div>
					<div>
						{getKey(targetKey).map((item) => (
							<div>{item}</div>
						))}
					</div>
				</div>
			);
		});
	};

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
			<div className="left">
				<div className="canvas_container">
					{/* <canvas height="600px" width="800px" /> */}
					{renderDatastruct()}
				</div>
				<div className="data_node_container">{renderDataNode()}</div>
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

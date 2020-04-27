/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { sayHello } from "./greet";
function showHello(divName: string, name: string) {
	const elt = document.getElementById(divName);
	elt.innerText = sayHello(name);
}
showHello("greeting", "TypeScript");

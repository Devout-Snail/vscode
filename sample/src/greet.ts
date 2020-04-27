/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export function sayHello(name: string) {
	sayES2015();
	return `Hello from ${name}`;
};
let sayES2015 = ()=>{
	console.log(`Hello  ES2015 `)
}

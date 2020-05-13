/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const fs = require("fs");
fs.writeFile(__dirname+"\\"+'123.txt','你好nodejs 覆盖','utf8',function(error){
	if(error){
		console.log(error);
		return false;
	}
	__dirname
	console.log('写入成功');
})

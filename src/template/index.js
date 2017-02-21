export function template(body, data){
	return `
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<title>Document</title>
			</head>
			<body>
				<div id="app">${body}</div>
			</body>
			<script>window.__DATA__=${JSON.stringify(data)}</script>
			<script src="http://localhost:8008/js/commons.min.js"></script>
			<script src="http://localhost:8008/js/main.min.js"></script>
		</html>`
}
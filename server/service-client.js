const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const btoa = require("btoa");
const wml_credentials = new Map();

function apiPost(scoring_url, token, mlInstanceID, payload, loadCallback, errorCallback){
	const oReq = new XMLHttpRequest();
	oReq.addEventListener("load", loadCallback);
	oReq.addEventListener("error", errorCallback);
	oReq.open("POST", scoring_url);
	oReq.setRequestHeader("Accept", "application/json");
	oReq.setRequestHeader("Authorization", token);
	oReq.setRequestHeader("ML-Instance-ID", mlInstanceID);
	oReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	oReq.send(payload);
}

// NOTE: generate iam_token based on provided documentation
const wmlToken = "Bearer " + iam_token;

// NOTE: retrieve ml_instance_id based on provided documentation
const mlInstanceId = ml_instance_id;

// NOTE: manually define and pass the array(s) of values to be scored in the next line
const payload = '{"input_data": [{"fields": ["GENDER", "AGE", "MARITAL_STATUS", "PROFESSION"], "values": [array_of_values_to_be_scored, another_array_of_values_to_be_scored]}]}';
const scoring_url = "https://eu-gb.ml.cloud.ibm.com/v4/deployments/d712faf3-304d-4ebf-a087-90d6fb3c5cf8/predictions";

apiPost(scoring_url, wmlToken, mlInstanceId, payload, function (resp) {
	let parsedPostResponse;
	try {
		parsedPostResponse = JSON.parse(this.responseText);
	} catch (ex) {
		// TODO: handle parsing exception
	}
	console.log("Scoring response");
	console.log(parsedPostResponse);
}, function (error) {
	console.log(error);
});

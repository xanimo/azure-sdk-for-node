// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'd466671a-79ad-4ca5-878f-599df8bcd17e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/resourceGroups/nodeTestGroup5834/providers/Microsoft.DBforPostgreSQL/servers/testserver1149?api-version=2017-12-01')
  .reply(202, "{\"operation\":\"DropElasticServer\",\"startTime\":\"2017-05-25T00:04:51.687Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '72',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/operationResults/4adb4f9d-7682-4521-87eb-68dfcd504b15?api-version=2017-12-01',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/4adb4f9d-7682-4521-87eb-68dfcd504b15?api-version=2017-12-01',
  'x-ms-request-id': '4adb4f9d-7682-4521-87eb-68dfcd504b15',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'df9c945b-6a88-4726-9644-2d63ae42808a',
  'x-ms-routing-request-id': 'EASTUS:20170525T000450Z:df9c945b-6a88-4726-9644-2d63ae42808a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:04:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/resourceGroups/nodeTestGroup5834/providers/Microsoft.DBforPostgreSQL/servers/testserver1149?api-version=2017-12-01')
  .reply(202, "{\"operation\":\"DropElasticServer\",\"startTime\":\"2017-05-25T00:04:51.687Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '72',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/operationResults/4adb4f9d-7682-4521-87eb-68dfcd504b15?api-version=2017-12-01',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/4adb4f9d-7682-4521-87eb-68dfcd504b15?api-version=2017-12-01',
  'x-ms-request-id': '4adb4f9d-7682-4521-87eb-68dfcd504b15',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'df9c945b-6a88-4726-9644-2d63ae42808a',
  'x-ms-routing-request-id': 'EASTUS:20170525T000450Z:df9c945b-6a88-4726-9644-2d63ae42808a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:04:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/4adb4f9d-7682-4521-87eb-68dfcd504b15?api-version=2017-12-01')
  .reply(200, "{\"name\":\"4adb4f9d-7682-4521-87eb-68dfcd504b15\",\"status\":\"Succeeded\",\"startTime\":\"2017-05-25T00:04:51.687Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '107',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0785d9eb-fe17-441d-9f5c-0bc999a35b1a',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '9757f89e-4144-4676-aeeb-0723bd79903e',
  'x-ms-routing-request-id': 'EASTUS:20170525T000521Z:9757f89e-4144-4676-aeeb-0723bd79903e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:05:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/4adb4f9d-7682-4521-87eb-68dfcd504b15?api-version=2017-12-01')
  .reply(200, "{\"name\":\"4adb4f9d-7682-4521-87eb-68dfcd504b15\",\"status\":\"Succeeded\",\"startTime\":\"2017-05-25T00:04:51.687Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '107',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0785d9eb-fe17-441d-9f5c-0bc999a35b1a',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '9757f89e-4144-4676-aeeb-0723bd79903e',
  'x-ms-routing-request-id': 'EASTUS:20170525T000521Z:9757f89e-4144-4676-aeeb-0723bd79903e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:05:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/resourceGroups/nodeTestGroup5834/providers/Microsoft.DBforPostgreSQL/servers/testserver1149?api-version=2017-12-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The requested resource of type 'PostgreSQL.Server.PAL' with name 'testserver1149' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '146',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a3b837c2-68ce-462f-a2c9-3a0a88f6789a',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '0f9b9d07-e3b1-4f30-acfc-57b24d2fd307',
  'x-ms-routing-request-id': 'EASTUS:20170525T000521Z:0f9b9d07-e3b1-4f30-acfc-57b24d2fd307',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:05:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/resourceGroups/nodeTestGroup5834/providers/Microsoft.DBforPostgreSQL/servers/testserver1149?api-version=2017-12-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The requested resource of type 'PostgreSQL.Server.PAL' with name 'testserver1149' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '146',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a3b837c2-68ce-462f-a2c9-3a0a88f6789a',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '0f9b9d07-e3b1-4f30-acfc-57b24d2fd307',
  'x-ms-routing-request-id': 'EASTUS:20170525T000521Z:0f9b9d07-e3b1-4f30-acfc-57b24d2fd307',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:05:21 GMT',
  connection: 'close' });
 return result; }]];
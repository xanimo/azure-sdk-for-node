// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1540/providers/Microsoft.Cdn/profiles/cdnTestProfile2130?api-version=2017-04-02')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1540/providers/Microsoft.Cdn/operationresults/2dc98197-b78d-463f-9c0e-9d418175dccf/profileresults/cdnTestProfile2130?api-version=2017-04-02',
  'retry-after': '10',
  'x-ms-request-id': 'c402e6cb-f60f-4cf1-96aa-e3d8c3767a41',
  'x-ms-client-request-id': 'b7cf41d9-33e1-4be1-89cc-30b568b97fb2',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1540/providers/Microsoft.Cdn/operationresults/2dc98197-b78d-463f-9c0e-9d418175dccf?api-version=2017-04-02',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '9a97a562-d83c-41bf-97ce-bf9eaba85950',
  'x-ms-routing-request-id': 'CENTRALUS:20161027T225830Z:9a97a562-d83c-41bf-97ce-bf9eaba85950',
  date: 'Thu, 27 Oct 2016 22:58:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1540/providers/Microsoft.Cdn/profiles/cdnTestProfile2130?api-version=2017-04-02')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1540/providers/Microsoft.Cdn/operationresults/2dc98197-b78d-463f-9c0e-9d418175dccf/profileresults/cdnTestProfile2130?api-version=2017-04-02',
  'retry-after': '10',
  'x-ms-request-id': 'c402e6cb-f60f-4cf1-96aa-e3d8c3767a41',
  'x-ms-client-request-id': 'b7cf41d9-33e1-4be1-89cc-30b568b97fb2',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1540/providers/Microsoft.Cdn/operationresults/2dc98197-b78d-463f-9c0e-9d418175dccf?api-version=2017-04-02',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '9a97a562-d83c-41bf-97ce-bf9eaba85950',
  'x-ms-routing-request-id': 'CENTRALUS:20161027T225830Z:9a97a562-d83c-41bf-97ce-bf9eaba85950',
  date: 'Thu, 27 Oct 2016 22:58:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1540/providers/Microsoft.Cdn/operationresults/2dc98197-b78d-463f-9c0e-9d418175dccf?api-version=2017-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '2f1cade5-4a31-4a56-bf23-7e561e42ab40',
  'x-ms-client-request-id': '6ef68a86-c36b-4b13-95ab-7e9675a8b893',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '36203cd4-0aa1-43a7-b7af-fd40169c1f48',
  'x-ms-routing-request-id': 'CENTRALUS:20161027T225901Z:36203cd4-0aa1-43a7-b7af-fd40169c1f48',
  date: 'Thu, 27 Oct 2016 22:59:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1540/providers/Microsoft.Cdn/operationresults/2dc98197-b78d-463f-9c0e-9d418175dccf?api-version=2017-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '2f1cade5-4a31-4a56-bf23-7e561e42ab40',
  'x-ms-client-request-id': '6ef68a86-c36b-4b13-95ab-7e9675a8b893',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '36203cd4-0aa1-43a7-b7af-fd40169c1f48',
  'x-ms-routing-request-id': 'CENTRALUS:20161027T225901Z:36203cd4-0aa1-43a7-b7af-fd40169c1f48',
  date: 'Thu, 27 Oct 2016 22:59:00 GMT',
  connection: 'close' });
 return result; }]];
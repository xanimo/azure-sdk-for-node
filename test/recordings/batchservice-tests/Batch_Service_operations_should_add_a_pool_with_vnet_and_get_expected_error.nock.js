// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2017-09-01.6.0', '*')
  .reply(403, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"Forbidden\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"Access is Forbidden\\nRequestId:76647d27-b1bc-400d-9a55-44c028107b95\\nTime:2017-10-02T21:39:00.8583673Z\"\r\n  },\"values\":[\r\n    {\r\n      \"key\":\"Reason\",\"value\":\"Property subnetId with value /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet1 is not enabled for current account\"\r\n    }\r\n  ]\r\n}", { 'content-length': '586',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '76647d27-b1bc-400d-9a55-44c028107b95',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Mon, 02 Oct 2017 21:39:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2017-09-01.6.0', '*')
  .reply(403, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"Forbidden\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"Access is Forbidden\\nRequestId:76647d27-b1bc-400d-9a55-44c028107b95\\nTime:2017-10-02T21:39:00.8583673Z\"\r\n  },\"values\":[\r\n    {\r\n      \"key\":\"Reason\",\"value\":\"Property subnetId with value /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet1 is not enabled for current account\"\r\n    }\r\n  ]\r\n}", { 'content-length': '586',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '76647d27-b1bc-400d-9a55-44c028107b95',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Mon, 02 Oct 2017 21:39:00 GMT',
  connection: 'close' });
 return result; }]];
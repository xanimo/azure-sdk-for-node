// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4679?api-version=2016-11-01', '*')
  .reply(201, "{\"properties\":{\"provisioningState\":\"Creating\",\"state\":null,\"endpoint\":null,\"accountId\":\"4721d5b3-41f7-4855-9279-886046a13414\",\"creationTime\":null,\"lastModifiedTime\":null},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4679\",\"name\":\"xplattestadls4679\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '471',
  'content-type': 'application/json',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourcegroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4679/operationresults/0?api-version=2016-11-01',
  'retry-after': '10',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/locations/eastus2/operationResults/4721d5b3-41f7-4855-9279-886046a134140?api-version=2016-11-01&expanded=true',
  'x-ms-request-id': 'c71e4d23-bca1-453c-9909-c54df1ce082b',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'b599a5c4-cbcd-49cb-af68-9c05e019a57f',
  'x-ms-routing-request-id': 'WESTUS2:20170323T205541Z:b599a5c4-cbcd-49cb-af68-9c05e019a57f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 23 Mar 2017 20:55:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4679?api-version=2016-11-01', '*')
  .reply(201, "{\"properties\":{\"provisioningState\":\"Creating\",\"state\":null,\"endpoint\":null,\"accountId\":\"4721d5b3-41f7-4855-9279-886046a13414\",\"creationTime\":null,\"lastModifiedTime\":null},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4679\",\"name\":\"xplattestadls4679\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '471',
  'content-type': 'application/json',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourcegroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4679/operationresults/0?api-version=2016-11-01',
  'retry-after': '10',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/locations/eastus2/operationResults/4721d5b3-41f7-4855-9279-886046a134140?api-version=2016-11-01&expanded=true',
  'x-ms-request-id': 'c71e4d23-bca1-453c-9909-c54df1ce082b',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'b599a5c4-cbcd-49cb-af68-9c05e019a57f',
  'x-ms-routing-request-id': 'WESTUS2:20170323T205541Z:b599a5c4-cbcd-49cb-af68-9c05e019a57f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 23 Mar 2017 20:55:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/locations/eastus2/operationResults/4721d5b3-41f7-4855-9279-886046a134140?api-version=2016-11-01&expanded=true')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '4663f920-7945-4866-bcbf-4f47825816e8',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'd59b7851-8201-44e7-b987-27bcd8bb1538',
  'x-ms-routing-request-id': 'WESTUS2:20170323T205612Z:d59b7851-8201-44e7-b987-27bcd8bb1538',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 23 Mar 2017 20:56:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/locations/eastus2/operationResults/4721d5b3-41f7-4855-9279-886046a134140?api-version=2016-11-01&expanded=true')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '4663f920-7945-4866-bcbf-4f47825816e8',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'd59b7851-8201-44e7-b987-27bcd8bb1538',
  'x-ms-routing-request-id': 'WESTUS2:20170323T205612Z:d59b7851-8201-44e7-b987-27bcd8bb1538',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 23 Mar 2017 20:56:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4679?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"trustedIdProviderState\":\"Disabled\",\"trustedIdProviders\":[],\"encryptionState\":\"Enabled\",\"encryptionConfig\":{\"type\":\"ServiceManaged\"},\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls4679.azuredatalakestore.net\",\"accountId\":\"4721d5b3-41f7-4855-9279-886046a13414\",\"creationTime\":\"2017-03-23T20:55:41.1422826Z\",\"lastModifiedTime\":\"2017-03-23T20:55:41.1422826Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4679\",\"name\":\"xplattestadls4679\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '797',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '134fef21-5791-4f14-869e-e9b3b12434c2',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '5e4ea424-fae6-4d7a-b9f4-bf10fc266b54',
  'x-ms-routing-request-id': 'WESTUS2:20170323T205612Z:5e4ea424-fae6-4d7a-b9f4-bf10fc266b54',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 23 Mar 2017 20:56:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4679?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"trustedIdProviderState\":\"Disabled\",\"trustedIdProviders\":[],\"encryptionState\":\"Enabled\",\"encryptionConfig\":{\"type\":\"ServiceManaged\"},\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls4679.azuredatalakestore.net\",\"accountId\":\"4721d5b3-41f7-4855-9279-886046a13414\",\"creationTime\":\"2017-03-23T20:55:41.1422826Z\",\"lastModifiedTime\":\"2017-03-23T20:55:41.1422826Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4679\",\"name\":\"xplattestadls4679\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '797',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '134fef21-5791-4f14-869e-e9b3b12434c2',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '5e4ea424-fae6-4d7a-b9f4-bf10fc266b54',
  'x-ms-routing-request-id': 'WESTUS2:20170323T205612Z:5e4ea424-fae6-4d7a-b9f4-bf10fc266b54',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 23 Mar 2017 20:56:12 GMT',
  connection: 'close' });
 return result; }]];
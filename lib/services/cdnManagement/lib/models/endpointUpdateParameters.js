/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Properties required to create or update an endpoint.
 *
 * @extends models['BaseResource']
 */
class EndpointUpdateParameters extends models['BaseResource'] {
  /**
   * Create a EndpointUpdateParameters.
   * @member {object} [tags] Endpoint tags.
   * @member {string} [originHostHeader] The host header CDN sends along with
   * content requests to origin. The default value is the host name of the
   * origin.
   * @member {string} [originPath] A directory path on the origin that CDN can
   * use to retreive content from, e.g. contoso.cloudapp.net/originpath.
   * @member {array} [contentTypesToCompress] List of content types on which
   * compression applies. The value should be a valid MIME type.
   * @member {boolean} [isCompressionEnabled] Indicates whether content
   * compression is enabled on CDN. Default value is false. If compression is
   * enabled, content will be served as compressed if user requests for a
   * compressed version. Content won't be compressed on CDN when requested
   * content is smaller than 1 byte or larger than 1 MB.
   * @member {boolean} [isHttpAllowed] Indicates whether HTTP traffic is
   * allowed on the endpoint. Default value is true. At least one protocol
   * (HTTP or HTTPS) must be allowed.
   * @member {boolean} [isHttpsAllowed] Indicates whether HTTPS traffic is
   * allowed on the endpoint. Default value is true. At least one protocol
   * (HTTP or HTTPS) must be allowed.
   * @member {string} [queryStringCachingBehavior] Defines how CDN caches
   * requests that include query strings. You can ignore any query strings when
   * caching, bypass caching to prevent requests that contain query strings
   * from being cached, or cache every request with a unique URL. Possible
   * values include: 'IgnoreQueryString', 'BypassCaching', 'UseQueryString',
   * 'NotSet'
   * @member {string} [optimizationType] Specifies what scenario the customer
   * wants this CDN endpoint to optimize for, e.g. Download, Media services.
   * With this information, CDN can apply scenario driven optimization.
   * Possible values include: 'GeneralWebDelivery', 'GeneralMediaStreaming',
   * 'VideoOnDemandMediaStreaming', 'LargeFileDownload',
   * 'DynamicSiteAcceleration'
   * @member {string} [probePath] Path to a file hosted on the origin which
   * helps accelerate delivery of the dynamic content and calculate the most
   * optimal routes for the CDN. This is relative to the origin path.
   * @member {array} [geoFilters] List of rules defining the user's geo access
   * within a CDN endpoint. Each geo filter defines an acess rule to a
   * specified path or content, e.g. block APAC for path /pictures/
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of EndpointUpdateParameters
   *
   * @returns {object} metadata of EndpointUpdateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EndpointUpdateParameters',
      type: {
        name: 'Composite',
        className: 'EndpointUpdateParameters',
        modelProperties: {
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          originHostHeader: {
            required: false,
            serializedName: 'properties.originHostHeader',
            type: {
              name: 'String'
            }
          },
          originPath: {
            required: false,
            serializedName: 'properties.originPath',
            type: {
              name: 'String'
            }
          },
          contentTypesToCompress: {
            required: false,
            serializedName: 'properties.contentTypesToCompress',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          isCompressionEnabled: {
            required: false,
            serializedName: 'properties.isCompressionEnabled',
            type: {
              name: 'Boolean'
            }
          },
          isHttpAllowed: {
            required: false,
            serializedName: 'properties.isHttpAllowed',
            type: {
              name: 'Boolean'
            }
          },
          isHttpsAllowed: {
            required: false,
            serializedName: 'properties.isHttpsAllowed',
            type: {
              name: 'Boolean'
            }
          },
          queryStringCachingBehavior: {
            required: false,
            serializedName: 'properties.queryStringCachingBehavior',
            type: {
              name: 'Enum',
              allowedValues: [ 'IgnoreQueryString', 'BypassCaching', 'UseQueryString', 'NotSet' ]
            }
          },
          optimizationType: {
            required: false,
            serializedName: 'properties.optimizationType',
            type: {
              name: 'String'
            }
          },
          probePath: {
            required: false,
            serializedName: 'properties.probePath',
            type: {
              name: 'String'
            }
          },
          geoFilters: {
            required: false,
            serializedName: 'properties.geoFilters',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'GeoFilterElementType',
                  type: {
                    name: 'Composite',
                    className: 'GeoFilter'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = EndpointUpdateParameters;
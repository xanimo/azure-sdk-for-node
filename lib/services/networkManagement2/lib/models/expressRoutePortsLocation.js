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
 * @summary ExpressRoutePorts Peering Location
  *
 * Definition of the ExpressRoutePorts peering location resource.
 *
 * @extends models['Resource']
 */
class ExpressRoutePortsLocation extends models['Resource'] {
  /**
   * Create a ExpressRoutePortsLocation.
   * @member {string} [address] Address of peering location.
   * @member {string} [contact] Contact details of peering locations.
   * @member {array} [availableBandwidths] The inventory of available
   * ExpressRoutePort bandwidths.
   * @member {string} [provisioningState] The provisioning state of the
   * ExpressRoutePortLocation resource. Possible values are: 'Succeeded',
   * 'Updating', 'Deleting', and 'Failed'.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ExpressRoutePortsLocation
   *
   * @returns {object} metadata of ExpressRoutePortsLocation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ExpressRoutePortsLocation',
      type: {
        name: 'Composite',
        className: 'ExpressRoutePortsLocation',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
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
          address: {
            required: false,
            readOnly: true,
            serializedName: 'properties.address',
            type: {
              name: 'String'
            }
          },
          contact: {
            required: false,
            readOnly: true,
            serializedName: 'properties.contact',
            type: {
              name: 'String'
            }
          },
          availableBandwidths: {
            required: false,
            serializedName: 'properties.availableBandwidths',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ExpressRoutePortsLocationBandwidthsElementType',
                  type: {
                    name: 'Composite',
                    className: 'ExpressRoutePortsLocationBandwidths'
                  }
              }
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ExpressRoutePortsLocation;

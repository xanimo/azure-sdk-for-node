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
 * Sub-class representing model for Traffic Manager HeatMap traffic fraction by
 * ASN.
 *
 * @extends models['HeatMapModel']
 */
class HeatMapModelAsn extends models['HeatMapModel'] {
  /**
   * Create a HeatMapModelAsn.
   * @member {string} [heatMapModelAsnId] Fully qualified resource Id for the
   * resource. Ex -
   * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
   * @member {string} [heatMapModelAsnName] The name of the resource
   * @member {string} [heatMapModelAsnType] The type of the resource. Ex-
   * Microsoft.Network/trafficmanagerProfiles.
   * @member {array} [trafficFlows]
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of HeatMapModelAsn
   *
   * @returns {object} metadata of HeatMapModelAsn
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'asnTrafficFraction',
      type: {
        name: 'Composite',
        className: 'HeatMapModelAsn',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
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
          heatMapModelAsnId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.id',
            type: {
              name: 'String'
            }
          },
          heatMapModelAsnName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.name',
            type: {
              name: 'String'
            }
          },
          heatMapModelAsnType: {
            required: false,
            readOnly: true,
            serializedName: 'properties.type',
            type: {
              name: 'String'
            }
          },
          trafficFlows: {
            required: false,
            serializedName: 'properties.trafficFlows',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TrafficLocationElementType',
                  type: {
                    name: 'Composite',
                    className: 'TrafficLocation'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = HeatMapModelAsn;
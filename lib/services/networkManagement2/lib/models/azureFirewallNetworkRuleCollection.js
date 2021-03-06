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
 * Network rule collection resource
 *
 * @extends models['SubResource']
 */
class AzureFirewallNetworkRuleCollection extends models['SubResource'] {
  /**
   * Create a AzureFirewallNetworkRuleCollection.
   * @member {number} [priority] Priority of the network rule collection
   * resource.
   * @member {object} [action] The action type of a rule collection
   * @member {string} [action.type] The type of action. Possible values
   * include: 'Allow', 'Deny'
   * @member {array} [rules] Collection of rules used by a network rule
   * collection.
   * @member {string} [provisioningState] The provisioning state of the
   * resource. Possible values include: 'Succeeded', 'Updating', 'Deleting',
   * 'Failed'
   * @member {string} [name] Gets name of the resource that is unique within a
   * resource group. This name can be used to access the resource.
   * @member {string} [etag] Gets a unique read-only string that changes
   * whenever the resource is updated.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AzureFirewallNetworkRuleCollection
   *
   * @returns {object} metadata of AzureFirewallNetworkRuleCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureFirewallNetworkRuleCollection',
      type: {
        name: 'Composite',
        className: 'AzureFirewallNetworkRuleCollection',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          priority: {
            required: false,
            serializedName: 'properties.priority',
            constraints: {
              InclusiveMaximum: 65000,
              InclusiveMinimum: 100
            },
            type: {
              name: 'Number'
            }
          },
          action: {
            required: false,
            serializedName: 'properties.action',
            type: {
              name: 'Composite',
              className: 'AzureFirewallRCAction'
            }
          },
          rules: {
            required: false,
            serializedName: 'properties.rules',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AzureFirewallNetworkRuleElementType',
                  type: {
                    name: 'Composite',
                    className: 'AzureFirewallNetworkRule'
                  }
              }
            }
          },
          provisioningState: {
            required: false,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            readOnly: true,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureFirewallNetworkRuleCollection;

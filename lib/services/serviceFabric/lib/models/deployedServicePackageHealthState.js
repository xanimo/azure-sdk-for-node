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
 * Represents the health state of a deployed service package, containing the
 * entity identifier and the aggregated health state.
 *
 * @extends models['EntityHealthState']
 */
class DeployedServicePackageHealthState extends models['EntityHealthState'] {
  /**
   * Create a DeployedServicePackageHealthState.
   * @member {string} [nodeName]
   * @member {string} [applicationName]
   * @member {string} [serviceManifestName]
   * @member {string} [servicePackageActivationId]
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DeployedServicePackageHealthState
   *
   * @returns {object} metadata of DeployedServicePackageHealthState
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeployedServicePackageHealthState',
      type: {
        name: 'Composite',
        className: 'DeployedServicePackageHealthState',
        modelProperties: {
          aggregatedHealthState: {
            required: false,
            serializedName: 'AggregatedHealthState',
            type: {
              name: 'String'
            }
          },
          nodeName: {
            required: false,
            serializedName: 'NodeName',
            type: {
              name: 'String'
            }
          },
          applicationName: {
            required: false,
            serializedName: 'ApplicationName',
            type: {
              name: 'String'
            }
          },
          serviceManifestName: {
            required: false,
            serializedName: 'ServiceManifestName',
            type: {
              name: 'String'
            }
          },
          servicePackageActivationId: {
            required: false,
            serializedName: 'ServicePackageActivationId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DeployedServicePackageHealthState;
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

/**
 * Parameters to compare with network configuration.
 *
 */
class NetworkConfigurationDiagnosticProfile {
  /**
   * Create a NetworkConfigurationDiagnosticProfile.
   * @member {string} direction The direction of the traffic. Accepted values
   * are 'Inbound' and 'Outbound'. Possible values include: 'Inbound',
   * 'Outbound'
   * @member {string} protocol Protocol to be verified on. Accepted values are
   * '*', TCP, UDP.
   * @member {string} source Traffic source. Accepted values are '*', IP
   * Address/CIDR, Service Tag.
   * @member {string} destination Traffic destination. Accepted values are:
   * '*', IP Address/CIDR, Service Tag.
   * @member {string} destinationPort Traffice destination port. Accepted
   * values are '*', port (for example, 3389) and port range (for example,
   * 80-100).
   */
  constructor() {
  }

  /**
   * Defines the metadata of NetworkConfigurationDiagnosticProfile
   *
   * @returns {object} metadata of NetworkConfigurationDiagnosticProfile
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NetworkConfigurationDiagnosticProfile',
      type: {
        name: 'Composite',
        className: 'NetworkConfigurationDiagnosticProfile',
        modelProperties: {
          direction: {
            required: true,
            serializedName: 'direction',
            type: {
              name: 'String'
            }
          },
          protocol: {
            required: true,
            serializedName: 'protocol',
            type: {
              name: 'String'
            }
          },
          source: {
            required: true,
            serializedName: 'source',
            type: {
              name: 'String'
            }
          },
          destination: {
            required: true,
            serializedName: 'destination',
            type: {
              name: 'String'
            }
          },
          destinationPort: {
            required: true,
            serializedName: 'destinationPort',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NetworkConfigurationDiagnosticProfile;
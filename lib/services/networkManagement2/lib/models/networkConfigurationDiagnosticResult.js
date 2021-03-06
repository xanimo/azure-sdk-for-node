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
 * Network configuration diagnostic result corresponded to provided traffic
 * query.
 *
 */
class NetworkConfigurationDiagnosticResult {
  /**
   * Create a NetworkConfigurationDiagnosticResult.
   * @member {object} [profile]
   * @member {string} [profile.direction] The direction of the traffic.
   * Accepted values are 'Inbound' and 'Outbound'. Possible values include:
   * 'Inbound', 'Outbound'
   * @member {string} [profile.protocol] Protocol to be verified on. Accepted
   * values are '*', TCP, UDP.
   * @member {string} [profile.source] Traffic source. Accepted values are '*',
   * IP Address/CIDR, Service Tag.
   * @member {string} [profile.destination] Traffic destination. Accepted
   * values are: '*', IP Address/CIDR, Service Tag.
   * @member {string} [profile.destinationPort] Traffice destination port.
   * Accepted values are '*', port (for example, 3389) and port range (for
   * example, 80-100).
   * @member {object} [networkSecurityGroupResult]
   * @member {string} [networkSecurityGroupResult.securityRuleAccessResult] The
   * network traffic is allowed or denied. Possible values are 'Allow' and
   * 'Deny'. Possible values include: 'Allow', 'Deny'
   * @member {array}
   * [networkSecurityGroupResult.evaluatedNetworkSecurityGroups] List of
   * results network security groups diagnostic.
   */
  constructor() {
  }

  /**
   * Defines the metadata of NetworkConfigurationDiagnosticResult
   *
   * @returns {object} metadata of NetworkConfigurationDiagnosticResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NetworkConfigurationDiagnosticResult',
      type: {
        name: 'Composite',
        className: 'NetworkConfigurationDiagnosticResult',
        modelProperties: {
          profile: {
            required: false,
            serializedName: 'profile',
            type: {
              name: 'Composite',
              className: 'NetworkConfigurationDiagnosticProfile'
            }
          },
          networkSecurityGroupResult: {
            required: false,
            serializedName: 'networkSecurityGroupResult',
            type: {
              name: 'Composite',
              className: 'NetworkSecurityGroupResult'
            }
          }
        }
      }
    };
  }
}

module.exports = NetworkConfigurationDiagnosticResult;

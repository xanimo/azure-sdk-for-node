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
 * @summary A user account for RDP or SSH access on a compute node.
  *
 */
class ComputeNodeUser {
  /**
   * Create a ComputeNodeUser.
   * @member {string} name The user name of the account.
   * @member {boolean} [isAdmin] Whether the account should be an administrator
   * on the compute node. The default value is false.
   * @member {date} [expiryTime] The time at which the account should expire.
   * If omitted, the default is 1 day from the current time. For Linux compute
   * nodes, the expiryTime has a precision up to a day.
   * @member {string} [password] The password of the account. The password is
   * required for Windows nodes (those created with
   * 'cloudServiceConfiguration', or created with 'virtualMachineConfiguration'
   * using a Windows image reference). For Linux compute nodes, the password
   * can optionally be specified along with the sshPublicKey property.
   * @member {string} [sshPublicKey] The SSH public key that can be used for
   * remote login to the compute node. The public key should be compatible with
   * OpenSSH encoding and should be base 64 encoded. This property can be
   * specified only for Linux nodes. If this is specified for a Windows node,
   * then the Batch service rejects the request; if you are calling the REST
   * API directly, the HTTP status code is 400 (Bad Request).
   */
  constructor() {
  }

  /**
   * Defines the metadata of ComputeNodeUser
   *
   * @returns {object} metadata of ComputeNodeUser
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ComputeNodeUser',
      type: {
        name: 'Composite',
        className: 'ComputeNodeUser',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          isAdmin: {
            required: false,
            serializedName: 'isAdmin',
            type: {
              name: 'Boolean'
            }
          },
          expiryTime: {
            required: false,
            serializedName: 'expiryTime',
            type: {
              name: 'DateTime'
            }
          },
          password: {
            required: false,
            serializedName: 'password',
            type: {
              name: 'String'
            }
          },
          sshPublicKey: {
            required: false,
            serializedName: 'sshPublicKey',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ComputeNodeUser;
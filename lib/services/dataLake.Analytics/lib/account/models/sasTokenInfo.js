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
 * SAS token information.
 *
 */
class SasTokenInfo {
  /**
   * Create a SasTokenInfo.
   * @member {string} [accessToken] the access token for the associated Azure
   * Storage Container.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SasTokenInfo
   *
   * @returns {object} metadata of SasTokenInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SasTokenInfo',
      type: {
        name: 'Composite',
        className: 'SasTokenInfo',
        modelProperties: {
          accessToken: {
            required: false,
            readOnly: true,
            serializedName: 'accessToken',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SasTokenInfo;
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
 * Parameters to restore file/folders API.
 *
 */
class ILRRequest {
  /**
   * Create a ILRRequest.
   * @member {string} objectType Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of ILRRequest
   *
   * @returns {object} metadata of ILRRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ILRRequest',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'objectType',
          clientName: 'objectType'
        },
        uberParent: 'ILRRequest',
        className: 'ILRRequest',
        modelProperties: {
          objectType: {
            required: true,
            serializedName: 'objectType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ILRRequest;
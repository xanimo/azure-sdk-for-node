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
 * An array of administrator user identities
 *
 */
class DedicatedCapacityAdministrators {
  /**
   * Create a DedicatedCapacityAdministrators.
   * @member {array} [members] An array of administrator user identities.
   */
  constructor() {
  }

  /**
   * Defines the metadata of DedicatedCapacityAdministrators
   *
   * @returns {object} metadata of DedicatedCapacityAdministrators
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DedicatedCapacityAdministrators',
      type: {
        name: 'Composite',
        className: 'DedicatedCapacityAdministrators',
        modelProperties: {
          members: {
            required: false,
            serializedName: 'members',
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
          }
        }
      }
    };
  }
}

module.exports = DedicatedCapacityAdministrators;
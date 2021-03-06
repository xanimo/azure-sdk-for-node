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
 * Copy log details for a storage account for Databox heavy
 *
 * @extends models['CopyLogDetails']
 */
class DataBoxHeavyAccountCopyLogDetails extends models['CopyLogDetails'] {
  /**
   * Create a DataBoxHeavyAccountCopyLogDetails.
   * @member {string} [accountName] Destination account name.
   * @member {array} [copyLogLink] Link for copy logs.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DataBoxHeavyAccountCopyLogDetails
   *
   * @returns {object} metadata of DataBoxHeavyAccountCopyLogDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DataBoxHeavy',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'copyLogDetailsType',
          clientName: 'copyLogDetailsType'
        },
        uberParent: 'CopyLogDetails',
        className: 'DataBoxHeavyAccountCopyLogDetails',
        modelProperties: {
          copyLogDetailsType: {
            required: true,
            serializedName: 'copyLogDetailsType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          accountName: {
            required: false,
            readOnly: true,
            serializedName: 'accountName',
            type: {
              name: 'String'
            }
          },
          copyLogLink: {
            required: false,
            readOnly: true,
            serializedName: 'copyLogLink',
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

module.exports = DataBoxHeavyAccountCopyLogDetails;

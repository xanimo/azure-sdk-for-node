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
 * The backup storage result, containing the backup blob.
 *
 */
class BackupStorageResult {
  /**
   * Create a BackupStorageResult.
   * @member {buffer} [value] The backup blob containing the backed up storage
   * account.
   */
  constructor() {
  }

  /**
   * Defines the metadata of BackupStorageResult
   *
   * @returns {object} metadata of BackupStorageResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BackupStorageResult',
      type: {
        name: 'Composite',
        className: 'BackupStorageResult',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: 'value',
            type: {
              name: 'Base64Url'
            }
          }
        }
      }
    };
  }
}

module.exports = BackupStorageResult;
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
 * Request parameters for IsMemberOf API call.
 *
 */
class CheckGroupMembershipParameters {
  /**
   * Create a CheckGroupMembershipParameters.
   * @member {string} groupId The object ID of the group to check.
   * @member {string} memberId The object ID of the contact, group, user, or
   * service principal to check for membership in the specified group.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CheckGroupMembershipParameters
   *
   * @returns {object} metadata of CheckGroupMembershipParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CheckGroupMembershipParameters',
      type: {
        name: 'Composite',
        className: 'CheckGroupMembershipParameters',
        modelProperties: {
          groupId: {
            required: true,
            serializedName: 'groupId',
            type: {
              name: 'String'
            }
          },
          memberId: {
            required: true,
            serializedName: 'memberId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CheckGroupMembershipParameters;
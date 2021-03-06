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
 * The X12 agreement protocol settings.
 *
 */
class X12ProtocolSettings {
  /**
   * Create a X12ProtocolSettings.
   * @member {object} validationSettings The X12 validation settings.
   * @member {boolean} [validationSettings.validateCharacterSet] The value
   * indicating whether to validate character set in the message.
   * @member {boolean}
   * [validationSettings.checkDuplicateInterchangeControlNumber] The value
   * indicating whether to check for duplicate interchange control number.
   * @member {number} [validationSettings.interchangeControlNumberValidityDays]
   * The validity period of interchange control number.
   * @member {boolean} [validationSettings.checkDuplicateGroupControlNumber]
   * The value indicating whether to check for duplicate group control number.
   * @member {boolean}
   * [validationSettings.checkDuplicateTransactionSetControlNumber] The value
   * indicating whether to check for duplicate transaction set control number.
   * @member {boolean} [validationSettings.validateEdiTypes] The value
   * indicating whether to Whether to validate EDI types.
   * @member {boolean} [validationSettings.validateXsdTypes] The value
   * indicating whether to Whether to validate XSD types.
   * @member {boolean}
   * [validationSettings.allowLeadingAndTrailingSpacesAndZeroes] The value
   * indicating whether to allow leading and trailing spaces and zeroes.
   * @member {boolean}
   * [validationSettings.trimLeadingAndTrailingSpacesAndZeroes] The value
   * indicating whether to trim leading and trailing spaces and zeroes.
   * @member {string} [validationSettings.trailingSeparatorPolicy] The trailing
   * separator policy. Possible values include: 'NotSpecified', 'NotAllowed',
   * 'Optional', 'Mandatory'
   * @member {object} framingSettings The X12 framing settings.
   * @member {number} [framingSettings.dataElementSeparator] The data element
   * separator.
   * @member {number} [framingSettings.componentSeparator] The component
   * separator.
   * @member {boolean} [framingSettings.replaceSeparatorsInPayload] The value
   * indicating whether to replace separators in payload.
   * @member {number} [framingSettings.replaceCharacter] The replacement
   * character.
   * @member {number} [framingSettings.segmentTerminator] The segment
   * terminator.
   * @member {string} [framingSettings.characterSet] The X12 character set.
   * Possible values include: 'NotSpecified', 'Basic', 'Extended', 'UTF8'
   * @member {string} [framingSettings.segmentTerminatorSuffix] The segment
   * terminator suffix. Possible values include: 'NotSpecified', 'None', 'CR',
   * 'LF', 'CRLF'
   * @member {object} envelopeSettings The X12 envelope settings.
   * @member {number} [envelopeSettings.controlStandardsId] The controls
   * standards id.
   * @member {boolean}
   * [envelopeSettings.useControlStandardsIdAsRepetitionCharacter] The value
   * indicating whether to use control standards id as repetition character.
   * @member {string} [envelopeSettings.senderApplicationId] The sender
   * application id.
   * @member {string} [envelopeSettings.receiverApplicationId] The receiver
   * application id.
   * @member {string} [envelopeSettings.controlVersionNumber] The control
   * version number.
   * @member {number} [envelopeSettings.interchangeControlNumberLowerBound] The
   * interchange  control number lower bound.
   * @member {number} [envelopeSettings.interchangeControlNumberUpperBound] The
   * interchange  control number upper bound.
   * @member {boolean} [envelopeSettings.rolloverInterchangeControlNumber] The
   * value indicating whether to rollover interchange control number.
   * @member {boolean} [envelopeSettings.enableDefaultGroupHeaders] The value
   * indicating whether to enable default group headers.
   * @member {string} [envelopeSettings.functionalGroupId] The functional group
   * id.
   * @member {number} [envelopeSettings.groupControlNumberLowerBound] The group
   * control number lower bound.
   * @member {number} [envelopeSettings.groupControlNumberUpperBound] The group
   * control number upper bound.
   * @member {boolean} [envelopeSettings.rolloverGroupControlNumber] The value
   * indicating whether to rollover group control number.
   * @member {string} [envelopeSettings.groupHeaderAgencyCode] The group header
   * agency code.
   * @member {string} [envelopeSettings.groupHeaderVersion] The group header
   * version.
   * @member {number} [envelopeSettings.transactionSetControlNumberLowerBound]
   * The transaction set control number lower bound.
   * @member {number} [envelopeSettings.transactionSetControlNumberUpperBound]
   * The transaction set control number upper bound.
   * @member {boolean} [envelopeSettings.rolloverTransactionSetControlNumber]
   * The value indicating whether to rollover transaction set control number.
   * @member {string} [envelopeSettings.transactionSetControlNumberPrefix] The
   * transaction set control number prefix.
   * @member {string} [envelopeSettings.transactionSetControlNumberSuffix] The
   * transaction set control number suffix.
   * @member {boolean}
   * [envelopeSettings.overwriteExistingTransactionSetControlNumber] The value
   * indicating whether to overwrite existing transaction set control number.
   * @member {string} [envelopeSettings.groupHeaderDateFormat] The group header
   * date format. Possible values include: 'NotSpecified', 'CCYYMMDD', 'YYMMDD'
   * @member {string} [envelopeSettings.groupHeaderTimeFormat] The group header
   * time format. Possible values include: 'NotSpecified', 'HHMM', 'HHMMSS',
   * 'HHMMSSdd', 'HHMMSSd'
   * @member {string} [envelopeSettings.usageIndicator] The usage indicator.
   * Possible values include: 'NotSpecified', 'Test', 'Information',
   * 'Production'
   * @member {object} acknowledgementSettings The X12 acknowledgment settings.
   * @member {boolean} [acknowledgementSettings.needTechnicalAcknowledgement]
   * The value indicating whether technical acknowledgement is needed.
   * @member {boolean} [acknowledgementSettings.batchTechnicalAcknowledgements]
   * The value indicating whether to batch the technical acknowledgements.
   * @member {boolean} [acknowledgementSettings.needFunctionalAcknowledgement]
   * The value indicating whether functional acknowledgement is needed.
   * @member {string}
   * [acknowledgementSettings.functionalAcknowledgementVersion] The functional
   * acknowledgement version.
   * @member {boolean}
   * [acknowledgementSettings.batchFunctionalAcknowledgements] The value
   * indicating whether to batch functional acknowledgements.
   * @member {boolean}
   * [acknowledgementSettings.needImplementationAcknowledgement] The value
   * indicating whether implementation acknowledgement is needed.
   * @member {string}
   * [acknowledgementSettings.implementationAcknowledgementVersion] The
   * implementation acknowledgement version.
   * @member {boolean}
   * [acknowledgementSettings.batchImplementationAcknowledgements] The value
   * indicating whether to batch implementation acknowledgements.
   * @member {boolean} [acknowledgementSettings.needLoopForValidMessages] The
   * value indicating whether a loop is needed for valid messages.
   * @member {boolean} [acknowledgementSettings.sendSynchronousAcknowledgement]
   * The value indicating whether to send synchronous acknowledgement.
   * @member {string}
   * [acknowledgementSettings.acknowledgementControlNumberPrefix] The
   * acknowledgement control number prefix.
   * @member {string}
   * [acknowledgementSettings.acknowledgementControlNumberSuffix] The
   * acknowledgement control number suffix.
   * @member {number}
   * [acknowledgementSettings.acknowledgementControlNumberLowerBound] The
   * acknowledgement control number lower bound.
   * @member {number}
   * [acknowledgementSettings.acknowledgementControlNumberUpperBound] The
   * acknowledgement control number upper bound.
   * @member {boolean}
   * [acknowledgementSettings.rolloverAcknowledgementControlNumber] The value
   * indicating whether to rollover acknowledgement control number.
   * @member {object} messageFilter The X12 message filter.
   * @member {string} [messageFilter.messageFilterType] The message filter
   * type. Possible values include: 'NotSpecified', 'Include', 'Exclude'
   * @member {object} securitySettings The X12 security settings.
   * @member {string} [securitySettings.authorizationQualifier] The
   * authorization qualifier.
   * @member {string} [securitySettings.authorizationValue] The authorization
   * value.
   * @member {string} [securitySettings.securityQualifier] The security
   * qualifier.
   * @member {string} [securitySettings.passwordValue] The password value.
   * @member {object} processingSettings The X12 processing settings.
   * @member {boolean} [processingSettings.maskSecurityInfo] The value
   * indicating whether to mask security information.
   * @member {boolean} [processingSettings.convertImpliedDecimal] The value
   * indicating whether to convert numerical type to implied decimal.
   * @member {boolean} [processingSettings.preserveInterchange] The value
   * indicating whether to preserve interchange.
   * @member {boolean} [processingSettings.suspendInterchangeOnError] The value
   * indicating whether to suspend interchange on error.
   * @member {boolean}
   * [processingSettings.createEmptyXmlTagsForTrailingSeparators] The value
   * indicating whether to create empty xml tags for trailing separators.
   * @member {boolean} [processingSettings.useDotAsDecimalSeparator] The value
   * indicating whether to use dot as decimal separator.
   * @member {array} [envelopeOverrides] The X12 envelope override settings.
   * @member {array} [validationOverrides] The X12 validation override
   * settings.
   * @member {array} [messageFilterList] The X12 message filter list.
   * @member {array} schemaReferences The X12 schema references.
   * @member {array} [x12DelimiterOverrides] The X12 delimiter override
   * settings.
   */
  constructor() {
  }

  /**
   * Defines the metadata of X12ProtocolSettings
   *
   * @returns {object} metadata of X12ProtocolSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'X12ProtocolSettings',
      type: {
        name: 'Composite',
        className: 'X12ProtocolSettings',
        modelProperties: {
          validationSettings: {
            required: true,
            serializedName: 'validationSettings',
            type: {
              name: 'Composite',
              className: 'X12ValidationSettings'
            }
          },
          framingSettings: {
            required: true,
            serializedName: 'framingSettings',
            type: {
              name: 'Composite',
              className: 'X12FramingSettings'
            }
          },
          envelopeSettings: {
            required: true,
            serializedName: 'envelopeSettings',
            type: {
              name: 'Composite',
              className: 'X12EnvelopeSettings'
            }
          },
          acknowledgementSettings: {
            required: true,
            serializedName: 'acknowledgementSettings',
            type: {
              name: 'Composite',
              className: 'X12AcknowledgementSettings'
            }
          },
          messageFilter: {
            required: true,
            serializedName: 'messageFilter',
            type: {
              name: 'Composite',
              className: 'X12MessageFilter'
            }
          },
          securitySettings: {
            required: true,
            serializedName: 'securitySettings',
            type: {
              name: 'Composite',
              className: 'X12SecuritySettings'
            }
          },
          processingSettings: {
            required: true,
            serializedName: 'processingSettings',
            type: {
              name: 'Composite',
              className: 'X12ProcessingSettings'
            }
          },
          envelopeOverrides: {
            required: false,
            serializedName: 'envelopeOverrides',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'X12EnvelopeOverrideElementType',
                  type: {
                    name: 'Composite',
                    className: 'X12EnvelopeOverride'
                  }
              }
            }
          },
          validationOverrides: {
            required: false,
            serializedName: 'validationOverrides',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'X12ValidationOverrideElementType',
                  type: {
                    name: 'Composite',
                    className: 'X12ValidationOverride'
                  }
              }
            }
          },
          messageFilterList: {
            required: false,
            serializedName: 'messageFilterList',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'X12MessageIdentifierElementType',
                  type: {
                    name: 'Composite',
                    className: 'X12MessageIdentifier'
                  }
              }
            }
          },
          schemaReferences: {
            required: true,
            serializedName: 'schemaReferences',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'X12SchemaReferenceElementType',
                  type: {
                    name: 'Composite',
                    className: 'X12SchemaReference'
                  }
              }
            }
          },
          x12DelimiterOverrides: {
            required: false,
            serializedName: 'x12DelimiterOverrides',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'X12DelimiterOverridesElementType',
                  type: {
                    name: 'Composite',
                    className: 'X12DelimiterOverrides'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = X12ProtocolSettings;

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
 * A formula for creating a VM, specifying an image base and other parameters
 *
 * @extends models['UpdateResource']
 */
class FormulaFragment extends models['UpdateResource'] {
  /**
   * Create a FormulaFragment.
   * @member {string} [description] The description of the formula.
   * @member {string} [author] The author of the formula.
   * @member {string} [osType] The OS type of the formula.
   * @member {object} [formulaContent] The content of the formula.
   * @member {object} [formulaContent.bulkCreationParameters] The number of
   * virtual machine instances to create.
   * @member {number} [formulaContent.bulkCreationParameters.instanceCount] The
   * number of virtual machine instances to create.
   * @member {string} [formulaContent.notes] The notes of the virtual machine.
   * @member {string} [formulaContent.ownerObjectId] The object identifier of
   * the owner of the virtual machine.
   * @member {string} [formulaContent.ownerUserPrincipalName] The user
   * principal name of the virtual machine owner.
   * @member {string} [formulaContent.createdByUserId] The object identifier of
   * the creator of the virtual machine.
   * @member {string} [formulaContent.createdByUser] The email address of
   * creator of the virtual machine.
   * @member {date} [formulaContent.createdDate] The creation date of the
   * virtual machine.
   * @member {string} [formulaContent.computeId] The resource identifier
   * (Microsoft.Compute) of the virtual machine.
   * @member {string} [formulaContent.customImageId] The custom image
   * identifier of the virtual machine.
   * @member {string} [formulaContent.osType] The OS type of the virtual
   * machine.
   * @member {string} [formulaContent.size] The size of the virtual machine.
   * @member {string} [formulaContent.userName] The user name of the virtual
   * machine.
   * @member {string} [formulaContent.password] The password of the virtual
   * machine administrator.
   * @member {string} [formulaContent.sshKey] The SSH key of the virtual
   * machine administrator.
   * @member {boolean} [formulaContent.isAuthenticationWithSshKey] Indicates
   * whether this virtual machine uses an SSH key for authentication.
   * @member {string} [formulaContent.fqdn] The fully-qualified domain name of
   * the virtual machine.
   * @member {string} [formulaContent.labSubnetName] The lab subnet name of the
   * virtual machine.
   * @member {string} [formulaContent.labVirtualNetworkId] The lab virtual
   * network identifier of the virtual machine.
   * @member {boolean} [formulaContent.disallowPublicIpAddress] Indicates
   * whether the virtual machine is to be created without a public IP address.
   * @member {array} [formulaContent.artifacts] The artifacts to be installed
   * on the virtual machine.
   * @member {object} [formulaContent.artifactDeploymentStatus] The artifact
   * deployment status for the virtual machine.
   * @member {string}
   * [formulaContent.artifactDeploymentStatus.deploymentStatus] The deployment
   * status of the artifact.
   * @member {number}
   * [formulaContent.artifactDeploymentStatus.artifactsApplied] The total count
   * of the artifacts that were successfully applied.
   * @member {number} [formulaContent.artifactDeploymentStatus.totalArtifacts]
   * The total count of the artifacts that were tentatively applied.
   * @member {object} [formulaContent.galleryImageReference] The Microsoft
   * Azure Marketplace image reference of the virtual machine.
   * @member {string} [formulaContent.galleryImageReference.offer] The offer of
   * the gallery image.
   * @member {string} [formulaContent.galleryImageReference.publisher] The
   * publisher of the gallery image.
   * @member {string} [formulaContent.galleryImageReference.sku] The SKU of the
   * gallery image.
   * @member {string} [formulaContent.galleryImageReference.osType] The OS type
   * of the gallery image.
   * @member {string} [formulaContent.galleryImageReference.version] The
   * version of the gallery image.
   * @member {string} [formulaContent.planId] The id of the plan associated
   * with the virtual machine image
   * @member {object} [formulaContent.networkInterface] The network interface
   * properties.
   * @member {string} [formulaContent.networkInterface.virtualNetworkId] The
   * resource ID of the virtual network.
   * @member {string} [formulaContent.networkInterface.subnetId] The resource
   * ID of the sub net.
   * @member {string} [formulaContent.networkInterface.publicIpAddressId] The
   * resource ID of the public IP address.
   * @member {string} [formulaContent.networkInterface.publicIpAddress] The
   * public IP address.
   * @member {string} [formulaContent.networkInterface.privateIpAddress] The
   * private IP address.
   * @member {string} [formulaContent.networkInterface.dnsName] The DNS name.
   * @member {string} [formulaContent.networkInterface.rdpAuthority] The
   * RdpAuthority property is a server DNS host name or IP address followed by
   * the service port number for RDP (Remote Desktop Protocol).
   * @member {string} [formulaContent.networkInterface.sshAuthority] The
   * SshAuthority property is a server DNS host name or IP address followed by
   * the service port number for SSH.
   * @member {object}
   * [formulaContent.networkInterface.sharedPublicIpAddressConfiguration] The
   * configuration for sharing a public IP address across multiple virtual
   * machines.
   * @member {array}
   * [formulaContent.networkInterface.sharedPublicIpAddressConfiguration.inboundNatRules]
   * The incoming NAT rules
   * @member {date} [formulaContent.expirationDate] The expiration date for VM.
   * @member {boolean} [formulaContent.allowClaim] Indicates whether another
   * user can take ownership of the virtual machine
   * @member {string} [formulaContent.storageType] Storage type to use for
   * virtual machine (i.e. Standard, Premium).
   * @member {string} [formulaContent.virtualMachineCreationSource] Tells
   * source of creation of lab virtual machine. Output property only. Possible
   * values include: 'FromCustomImage', 'FromGalleryImage'
   * @member {string} [formulaContent.environmentId] The resource ID of the
   * environment that contains this virtual machine, if any.
   * @member {array} [formulaContent.dataDiskParameters] New or existing data
   * disks to attach to the virtual machine after creation
   * @member {array} [formulaContent.scheduleParameters] Virtual Machine
   * schedules to be created
   * @member {string} [formulaContent.lastKnownPowerState] Last known compute
   * power state captured in DTL
   * @member {string} [formulaContent.name] The name of the virtual machine or
   * environment
   * @member {string} [formulaContent.location] The location of the new virtual
   * machine or environment
   * @member {object} [formulaContent.tags] The tags of the resource.
   * @member {object} [vm] Information about a VM from which a formula is to be
   * created.
   * @member {string} [vm.labVmId] The identifier of the VM from which a
   * formula is to be created.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of FormulaFragment
   *
   * @returns {object} metadata of FormulaFragment
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FormulaFragment',
      type: {
        name: 'Composite',
        className: 'FormulaFragment',
        modelProperties: {
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          },
          author: {
            required: false,
            serializedName: 'properties.author',
            type: {
              name: 'String'
            }
          },
          osType: {
            required: false,
            serializedName: 'properties.osType',
            type: {
              name: 'String'
            }
          },
          formulaContent: {
            required: false,
            serializedName: 'properties.formulaContent',
            type: {
              name: 'Composite',
              className: 'LabVirtualMachineCreationParameterFragment'
            }
          },
          vm: {
            required: false,
            serializedName: 'properties.vm',
            type: {
              name: 'Composite',
              className: 'FormulaPropertiesFromVmFragment'
            }
          }
        }
      }
    };
  }
}

module.exports = FormulaFragment;

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
 * Specifies the storage settings for the virtual machine disks.
 *
 */
class StorageProfile {
  /**
   * Create a StorageProfile.
   * @member {object} [imageReference] Specifies information about the image to
   * use. You can specify information about platform images, marketplace
   * images, or virtual machine images. This element is required when you want
   * to use a platform image, marketplace image, or virtual machine image, but
   * is not used in other creation operations.
   * @member {string} [imageReference.publisher] The image publisher.
   * @member {string} [imageReference.offer] Specifies the offer of the
   * platform image or marketplace image used to create the virtual machine.
   * @member {string} [imageReference.sku] The image SKU.
   * @member {string} [imageReference.version] Specifies the version of the
   * platform image or marketplace image used to create the virtual machine.
   * The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and
   * Build are decimal numbers. Specify 'latest' to use the latest version of
   * an image available at deploy time. Even if you use 'latest', the VM image
   * will not automatically update after deploy time even if a new version
   * becomes available.
   * @member {object} [osDisk] Specifies information about the operating system
   * disk used by the virtual machine. <br><br> For more information about
   * disks, see [About disks and VHDs for Azure virtual
   * machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
   * @member {string} [osDisk.osType] This property allows you to specify the
   * type of the OS that is included in the disk if creating a VM from
   * user-image or a specialized VHD. <br><br> Possible values are: <br><br>
   * **Windows** <br><br> **Linux**. Possible values include: 'Windows',
   * 'Linux'
   * @member {object} [osDisk.encryptionSettings] Specifies the encryption
   * settings for the OS Disk. <br><br> Minimum api-version: 2015-06-15
   * @member {object} [osDisk.encryptionSettings.diskEncryptionKey] Specifies
   * the location of the disk encryption key, which is a Key Vault Secret.
   * @member {string} [osDisk.encryptionSettings.diskEncryptionKey.secretUrl]
   * The URL referencing a secret in a Key Vault.
   * @member {object} [osDisk.encryptionSettings.diskEncryptionKey.sourceVault]
   * The relative URL of the Key Vault containing the secret.
   * @member {string}
   * [osDisk.encryptionSettings.diskEncryptionKey.sourceVault.id] Resource Id
   * @member {object} [osDisk.encryptionSettings.keyEncryptionKey] Specifies
   * the location of the key encryption key in Key Vault.
   * @member {string} [osDisk.encryptionSettings.keyEncryptionKey.keyUrl] The
   * URL referencing a key encryption key in Key Vault.
   * @member {object} [osDisk.encryptionSettings.keyEncryptionKey.sourceVault]
   * The relative URL of the Key Vault containing the key.
   * @member {string}
   * [osDisk.encryptionSettings.keyEncryptionKey.sourceVault.id] Resource Id
   * @member {boolean} [osDisk.encryptionSettings.enabled] Specifies whether
   * disk encryption should be enabled on the virtual machine.
   * @member {string} [osDisk.name] The disk name.
   * @member {object} [osDisk.vhd] The virtual hard disk.
   * @member {string} [osDisk.vhd.uri] Specifies the virtual hard disk's uri.
   * @member {object} [osDisk.image] The source user image virtual hard disk.
   * The virtual hard disk will be copied before being attached to the virtual
   * machine. If SourceImage is provided, the destination virtual hard drive
   * must not exist.
   * @member {string} [osDisk.image.uri] Specifies the virtual hard disk's uri.
   * @member {string} [osDisk.caching] Specifies the caching requirements.
   * <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly**
   * <br><br> **ReadWrite** <br><br> Default: **None for Standard storage.
   * ReadOnly for Premium storage**. Possible values include: 'None',
   * 'ReadOnly', 'ReadWrite'
   * @member {string} [osDisk.createOption] Specifies how the virtual machine
   * should be created.<br><br> Possible values are:<br><br> **Attach** \u2013
   * This value is used when you are using a specialized disk to create the
   * virtual machine.<br><br> **FromImage** \u2013 This value is used when you
   * are using an image to create the virtual machine. If you are using a
   * platform image, you also use the imageReference element described above.
   * If you are using a marketplace image, you  also use the plan element
   * previously described. Possible values include: 'FromImage', 'Empty',
   * 'Attach'
   * @member {number} [osDisk.diskSizeGB] Specifies the size of an empty data
   * disk in gigabytes. This element can be used to overwrite the name of the
   * disk in a virtual machine image. <br><br> This value cannot be larger than
   * 1023 GB
   * @member {object} [osDisk.managedDisk] The managed disk parameters.
   * @member {string} [osDisk.managedDisk.storageAccountType] Specifies the
   * storage account type for the managed disk. Possible values are:
   * Standard_LRS or Premium_LRS. Possible values include: 'Standard_LRS',
   * 'Premium_LRS'
   * @member {array} [dataDisks] Specifies the parameters that are used to add
   * a data disk to a virtual machine. <br><br> For more information about
   * disks, see [About disks and VHDs for Azure virtual
   * machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
   */
  constructor() {
  }

  /**
   * Defines the metadata of StorageProfile
   *
   * @returns {object} metadata of StorageProfile
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StorageProfile',
      type: {
        name: 'Composite',
        className: 'StorageProfile',
        modelProperties: {
          imageReference: {
            required: false,
            serializedName: 'imageReference',
            type: {
              name: 'Composite',
              className: 'ImageReference'
            }
          },
          osDisk: {
            required: false,
            serializedName: 'osDisk',
            type: {
              name: 'Composite',
              className: 'OSDisk'
            }
          },
          dataDisks: {
            required: false,
            serializedName: 'dataDisks',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DataDiskElementType',
                  type: {
                    name: 'Composite',
                    className: 'DataDisk'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = StorageProfile;
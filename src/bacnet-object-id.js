/*
 The MIT License

 Copyright (c) 2017,2018,2019,2020 Klaus Landsdorf (https://osi.bianco-royal.com/)
 All rights reserved.
 node-red-contrib-bacnet
 */
'use strict'
const BACnet = require('node-bacnet')

module.exports = function (RED) {
  function BACnetObjectId (config) {
    this.log('creating ObjectId node', config)
    RED.nodes.createNode(this, config)
    this.name = config.name

    this.objectId = {
      type: BACnet.enum.ObjectType[config.objectType],
      instance: parseInt(config.objectInstance) || 0
    }
  }

  RED.nodes.registerType('BACnet-ObjectId', BACnetObjectId)
}

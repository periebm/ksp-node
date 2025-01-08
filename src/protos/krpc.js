/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
'use strict';

var $protobuf = require('protobufjs/minimal');

// Common aliases
var $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots['default'] || ($protobuf.roots['default'] = {});

$root.ConnectionRequest = (function () {
  /**
   * Properties of a ConnectionRequest.
   * @exports IConnectionRequest
   * @interface IConnectionRequest
   * @property {ConnectionRequest.Type|null} [type] ConnectionRequest type
   * @property {string|null} [clientName] ConnectionRequest clientName
   * @property {Uint8Array|null} [clientIdentifier] ConnectionRequest clientIdentifier
   */

  /**
   * Constructs a new ConnectionRequest.
   * @exports ConnectionRequest
   * @classdesc Represents a ConnectionRequest.
   * @implements IConnectionRequest
   * @constructor
   * @param {IConnectionRequest=} [properties] Properties to set
   */
  function ConnectionRequest(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ConnectionRequest type.
   * @member {ConnectionRequest.Type} type
   * @memberof ConnectionRequest
   * @instance
   */
  ConnectionRequest.prototype.type = 0;

  /**
   * ConnectionRequest clientName.
   * @member {string} clientName
   * @memberof ConnectionRequest
   * @instance
   */
  ConnectionRequest.prototype.clientName = '';

  /**
   * ConnectionRequest clientIdentifier.
   * @member {Uint8Array} clientIdentifier
   * @memberof ConnectionRequest
   * @instance
   */
  ConnectionRequest.prototype.clientIdentifier = $util.newBuffer([]);

  /**
   * Creates a new ConnectionRequest instance using the specified properties.
   * @function create
   * @memberof ConnectionRequest
   * @static
   * @param {IConnectionRequest=} [properties] Properties to set
   * @returns {ConnectionRequest} ConnectionRequest instance
   */
  ConnectionRequest.create = function create(properties) {
    return new ConnectionRequest(properties);
  };

  /**
   * Encodes the specified ConnectionRequest message. Does not implicitly {@link ConnectionRequest.verify|verify} messages.
   * @function encode
   * @memberof ConnectionRequest
   * @static
   * @param {IConnectionRequest} message ConnectionRequest message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ConnectionRequest.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.type != null && Object.hasOwnProperty.call(message, 'type'))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.type);
    if (
      message.clientName != null &&
      Object.hasOwnProperty.call(message, 'clientName')
    )
      writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.clientName);
    if (
      message.clientIdentifier != null &&
      Object.hasOwnProperty.call(message, 'clientIdentifier')
    )
      writer.uint32(/* id 3, wireType 2 =*/ 26).bytes(message.clientIdentifier);
    return writer;
  };

  /**
   * Encodes the specified ConnectionRequest message, length delimited. Does not implicitly {@link ConnectionRequest.verify|verify} messages.
   * @function encodeDelimited
   * @memberof ConnectionRequest
   * @static
   * @param {IConnectionRequest} message ConnectionRequest message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ConnectionRequest.encodeDelimited = function encodeDelimited(
    message,
    writer
  ) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a ConnectionRequest message from the specified reader or buffer.
   * @function decode
   * @memberof ConnectionRequest
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ConnectionRequest} ConnectionRequest
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ConnectionRequest.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ConnectionRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          message.type = reader.int32();
          break;
        }
        case 2: {
          message.clientName = reader.string();
          break;
        }
        case 3: {
          message.clientIdentifier = reader.bytes();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes a ConnectionRequest message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof ConnectionRequest
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {ConnectionRequest} ConnectionRequest
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ConnectionRequest.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a ConnectionRequest message.
   * @function verify
   * @memberof ConnectionRequest
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  ConnectionRequest.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected';
    if (message.type != null && message.hasOwnProperty('type'))
      switch (message.type) {
        default:
          return 'type: enum value expected';
        case 0:
        case 1:
          break;
      }
    if (message.clientName != null && message.hasOwnProperty('clientName'))
      if (!$util.isString(message.clientName))
        return 'clientName: string expected';
    if (
      message.clientIdentifier != null &&
      message.hasOwnProperty('clientIdentifier')
    )
      if (
        !(
          (message.clientIdentifier &&
            typeof message.clientIdentifier.length === 'number') ||
          $util.isString(message.clientIdentifier)
        )
      )
        return 'clientIdentifier: buffer expected';
    return null;
  };

  /**
   * Creates a ConnectionRequest message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof ConnectionRequest
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {ConnectionRequest} ConnectionRequest
   */
  ConnectionRequest.fromObject = function fromObject(object) {
    if (object instanceof $root.ConnectionRequest) return object;
    var message = new $root.ConnectionRequest();
    switch (object.type) {
      default:
        if (typeof object.type === 'number') {
          message.type = object.type;
          break;
        }
        break;
      case 'RPC':
      case 0:
        message.type = 0;
        break;
      case 'STREAM':
      case 1:
        message.type = 1;
        break;
    }
    if (object.clientName != null)
      message.clientName = String(object.clientName);
    if (object.clientIdentifier != null)
      if (typeof object.clientIdentifier === 'string')
        $util.base64.decode(
          object.clientIdentifier,
          (message.clientIdentifier = $util.newBuffer(
            $util.base64.length(object.clientIdentifier)
          )),
          0
        );
      else if (object.clientIdentifier.length >= 0)
        message.clientIdentifier = object.clientIdentifier;
    return message;
  };

  /**
   * Creates a plain object from a ConnectionRequest message. Also converts values to other types if specified.
   * @function toObject
   * @memberof ConnectionRequest
   * @static
   * @param {ConnectionRequest} message ConnectionRequest
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  ConnectionRequest.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.defaults) {
      object.type = options.enums === String ? 'RPC' : 0;
      object.clientName = '';
      if (options.bytes === String) object.clientIdentifier = '';
      else {
        object.clientIdentifier = [];
        if (options.bytes !== Array)
          object.clientIdentifier = $util.newBuffer(object.clientIdentifier);
      }
    }
    if (message.type != null && message.hasOwnProperty('type'))
      object.type =
        options.enums === String
          ? $root.ConnectionRequest.Type[message.type] === undefined
            ? message.type
            : $root.ConnectionRequest.Type[message.type]
          : message.type;
    if (message.clientName != null && message.hasOwnProperty('clientName'))
      object.clientName = message.clientName;
    if (
      message.clientIdentifier != null &&
      message.hasOwnProperty('clientIdentifier')
    )
      object.clientIdentifier =
        options.bytes === String
          ? $util.base64.encode(
              message.clientIdentifier,
              0,
              message.clientIdentifier.length
            )
          : options.bytes === Array
          ? Array.prototype.slice.call(message.clientIdentifier)
          : message.clientIdentifier;
    return object;
  };

  /**
   * Converts this ConnectionRequest to JSON.
   * @function toJSON
   * @memberof ConnectionRequest
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  ConnectionRequest.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for ConnectionRequest
   * @function getTypeUrl
   * @memberof ConnectionRequest
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ConnectionRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/ConnectionRequest';
  };

  /**
   * Type enum.
   * @name ConnectionRequest.Type
   * @enum {number}
   * @property {number} RPC=0 RPC value
   * @property {number} STREAM=1 STREAM value
   */
  ConnectionRequest.Type = (function () {
    var valuesById = {},
      values = Object.create(valuesById);
    values[(valuesById[0] = 'RPC')] = 0;
    values[(valuesById[1] = 'STREAM')] = 1;
    return values;
  })();

  return ConnectionRequest;
})();

$root.ConnectionResponse = (function () {
  /**
   * Properties of a ConnectionResponse.
   * @exports IConnectionResponse
   * @interface IConnectionResponse
   * @property {ConnectionResponse.Status|null} [status] ConnectionResponse status
   * @property {string|null} [message] ConnectionResponse message
   * @property {Uint8Array|null} [clientIdentifier] ConnectionResponse clientIdentifier
   */

  /**
   * Constructs a new ConnectionResponse.
   * @exports ConnectionResponse
   * @classdesc Represents a ConnectionResponse.
   * @implements IConnectionResponse
   * @constructor
   * @param {IConnectionResponse=} [properties] Properties to set
   */
  function ConnectionResponse(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ConnectionResponse status.
   * @member {ConnectionResponse.Status} status
   * @memberof ConnectionResponse
   * @instance
   */
  ConnectionResponse.prototype.status = 0;

  /**
   * ConnectionResponse message.
   * @member {string} message
   * @memberof ConnectionResponse
   * @instance
   */
  ConnectionResponse.prototype.message = '';

  /**
   * ConnectionResponse clientIdentifier.
   * @member {Uint8Array} clientIdentifier
   * @memberof ConnectionResponse
   * @instance
   */
  ConnectionResponse.prototype.clientIdentifier = $util.newBuffer([]);

  /**
   * Creates a new ConnectionResponse instance using the specified properties.
   * @function create
   * @memberof ConnectionResponse
   * @static
   * @param {IConnectionResponse=} [properties] Properties to set
   * @returns {ConnectionResponse} ConnectionResponse instance
   */
  ConnectionResponse.create = function create(properties) {
    return new ConnectionResponse(properties);
  };

  /**
   * Encodes the specified ConnectionResponse message. Does not implicitly {@link ConnectionResponse.verify|verify} messages.
   * @function encode
   * @memberof ConnectionResponse
   * @static
   * @param {IConnectionResponse} message ConnectionResponse message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ConnectionResponse.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.status != null && Object.hasOwnProperty.call(message, 'status'))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.status);
    if (
      message.message != null &&
      Object.hasOwnProperty.call(message, 'message')
    )
      writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.message);
    if (
      message.clientIdentifier != null &&
      Object.hasOwnProperty.call(message, 'clientIdentifier')
    )
      writer.uint32(/* id 3, wireType 2 =*/ 26).bytes(message.clientIdentifier);
    return writer;
  };

  /**
   * Encodes the specified ConnectionResponse message, length delimited. Does not implicitly {@link ConnectionResponse.verify|verify} messages.
   * @function encodeDelimited
   * @memberof ConnectionResponse
   * @static
   * @param {IConnectionResponse} message ConnectionResponse message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ConnectionResponse.encodeDelimited = function encodeDelimited(
    message,
    writer
  ) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a ConnectionResponse message from the specified reader or buffer.
   * @function decode
   * @memberof ConnectionResponse
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ConnectionResponse} ConnectionResponse
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ConnectionResponse.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ConnectionResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          message.status = reader.int32();
          break;
        }
        case 2: {
          message.message = reader.string();
          break;
        }
        case 3: {
          message.clientIdentifier = reader.bytes();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes a ConnectionResponse message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof ConnectionResponse
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {ConnectionResponse} ConnectionResponse
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ConnectionResponse.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a ConnectionResponse message.
   * @function verify
   * @memberof ConnectionResponse
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  ConnectionResponse.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected';
    if (message.status != null && message.hasOwnProperty('status'))
      switch (message.status) {
        default:
          return 'status: enum value expected';
        case 0:
        case 1:
        case 2:
        case 3:
          break;
      }
    if (message.message != null && message.hasOwnProperty('message'))
      if (!$util.isString(message.message)) return 'message: string expected';
    if (
      message.clientIdentifier != null &&
      message.hasOwnProperty('clientIdentifier')
    )
      if (
        !(
          (message.clientIdentifier &&
            typeof message.clientIdentifier.length === 'number') ||
          $util.isString(message.clientIdentifier)
        )
      )
        return 'clientIdentifier: buffer expected';
    return null;
  };

  /**
   * Creates a ConnectionResponse message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof ConnectionResponse
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {ConnectionResponse} ConnectionResponse
   */
  ConnectionResponse.fromObject = function fromObject(object) {
    if (object instanceof $root.ConnectionResponse) return object;
    var message = new $root.ConnectionResponse();
    switch (object.status) {
      default:
        if (typeof object.status === 'number') {
          message.status = object.status;
          break;
        }
        break;
      case 'OK':
      case 0:
        message.status = 0;
        break;
      case 'MALFORMED_MESSAGE':
      case 1:
        message.status = 1;
        break;
      case 'TIMEOUT':
      case 2:
        message.status = 2;
        break;
      case 'WRONG_TYPE':
      case 3:
        message.status = 3;
        break;
    }
    if (object.message != null) message.message = String(object.message);
    if (object.clientIdentifier != null)
      if (typeof object.clientIdentifier === 'string')
        $util.base64.decode(
          object.clientIdentifier,
          (message.clientIdentifier = $util.newBuffer(
            $util.base64.length(object.clientIdentifier)
          )),
          0
        );
      else if (object.clientIdentifier.length >= 0)
        message.clientIdentifier = object.clientIdentifier;
    return message;
  };

  /**
   * Creates a plain object from a ConnectionResponse message. Also converts values to other types if specified.
   * @function toObject
   * @memberof ConnectionResponse
   * @static
   * @param {ConnectionResponse} message ConnectionResponse
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  ConnectionResponse.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.defaults) {
      object.status = options.enums === String ? 'OK' : 0;
      object.message = '';
      if (options.bytes === String) object.clientIdentifier = '';
      else {
        object.clientIdentifier = [];
        if (options.bytes !== Array)
          object.clientIdentifier = $util.newBuffer(object.clientIdentifier);
      }
    }
    if (message.status != null && message.hasOwnProperty('status'))
      object.status =
        options.enums === String
          ? $root.ConnectionResponse.Status[message.status] === undefined
            ? message.status
            : $root.ConnectionResponse.Status[message.status]
          : message.status;
    if (message.message != null && message.hasOwnProperty('message'))
      object.message = message.message;
    if (
      message.clientIdentifier != null &&
      message.hasOwnProperty('clientIdentifier')
    )
      object.clientIdentifier =
        options.bytes === String
          ? $util.base64.encode(
              message.clientIdentifier,
              0,
              message.clientIdentifier.length
            )
          : options.bytes === Array
          ? Array.prototype.slice.call(message.clientIdentifier)
          : message.clientIdentifier;
    return object;
  };

  /**
   * Converts this ConnectionResponse to JSON.
   * @function toJSON
   * @memberof ConnectionResponse
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  ConnectionResponse.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for ConnectionResponse
   * @function getTypeUrl
   * @memberof ConnectionResponse
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ConnectionResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/ConnectionResponse';
  };

  /**
   * Status enum.
   * @name ConnectionResponse.Status
   * @enum {number}
   * @property {number} OK=0 OK value
   * @property {number} MALFORMED_MESSAGE=1 MALFORMED_MESSAGE value
   * @property {number} TIMEOUT=2 TIMEOUT value
   * @property {number} WRONG_TYPE=3 WRONG_TYPE value
   */
  ConnectionResponse.Status = (function () {
    var valuesById = {},
      values = Object.create(valuesById);
    values[(valuesById[0] = 'OK')] = 0;
    values[(valuesById[1] = 'MALFORMED_MESSAGE')] = 1;
    values[(valuesById[2] = 'TIMEOUT')] = 2;
    values[(valuesById[3] = 'WRONG_TYPE')] = 3;
    return values;
  })();

  return ConnectionResponse;
})();

$root.Request = (function () {
  /**
   * Properties of a Request.
   * @exports IRequest
   * @interface IRequest
   * @property {Array.<IProcedureCall>|null} [calls] Request calls
   */

  /**
   * Constructs a new Request.
   * @exports Request
   * @classdesc Represents a Request.
   * @implements IRequest
   * @constructor
   * @param {IRequest=} [properties] Properties to set
   */
  function Request(properties) {
    this.calls = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * Request calls.
   * @member {Array.<IProcedureCall>} calls
   * @memberof Request
   * @instance
   */
  Request.prototype.calls = $util.emptyArray;

  /**
   * Creates a new Request instance using the specified properties.
   * @function create
   * @memberof Request
   * @static
   * @param {IRequest=} [properties] Properties to set
   * @returns {Request} Request instance
   */
  Request.create = function create(properties) {
    return new Request(properties);
  };

  /**
   * Encodes the specified Request message. Does not implicitly {@link Request.verify|verify} messages.
   * @function encode
   * @memberof Request
   * @static
   * @param {IRequest} message Request message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Request.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.calls != null && message.calls.length)
      for (var i = 0; i < message.calls.length; ++i)
        $root.ProcedureCall.encode(
          message.calls[i],
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
    return writer;
  };

  /**
   * Encodes the specified Request message, length delimited. Does not implicitly {@link Request.verify|verify} messages.
   * @function encodeDelimited
   * @memberof Request
   * @static
   * @param {IRequest} message Request message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Request.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a Request message from the specified reader or buffer.
   * @function decode
   * @memberof Request
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {Request} Request
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Request.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.Request();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (!(message.calls && message.calls.length)) message.calls = [];
          message.calls.push(
            $root.ProcedureCall.decode(reader, reader.uint32())
          );
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes a Request message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof Request
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {Request} Request
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Request.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a Request message.
   * @function verify
   * @memberof Request
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  Request.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected';
    if (message.calls != null && message.hasOwnProperty('calls')) {
      if (!Array.isArray(message.calls)) return 'calls: array expected';
      for (var i = 0; i < message.calls.length; ++i) {
        var error = $root.ProcedureCall.verify(message.calls[i]);
        if (error) return 'calls.' + error;
      }
    }
    return null;
  };

  /**
   * Creates a Request message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof Request
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {Request} Request
   */
  Request.fromObject = function fromObject(object) {
    if (object instanceof $root.Request) return object;
    var message = new $root.Request();
    if (object.calls) {
      if (!Array.isArray(object.calls))
        throw TypeError('.Request.calls: array expected');
      message.calls = [];
      for (var i = 0; i < object.calls.length; ++i) {
        if (typeof object.calls[i] !== 'object')
          throw TypeError('.Request.calls: object expected');
        message.calls[i] = $root.ProcedureCall.fromObject(object.calls[i]);
      }
    }
    return message;
  };

  /**
   * Creates a plain object from a Request message. Also converts values to other types if specified.
   * @function toObject
   * @memberof Request
   * @static
   * @param {Request} message Request
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  Request.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.arrays || options.defaults) object.calls = [];
    if (message.calls && message.calls.length) {
      object.calls = [];
      for (var j = 0; j < message.calls.length; ++j)
        object.calls[j] = $root.ProcedureCall.toObject(
          message.calls[j],
          options
        );
    }
    return object;
  };

  /**
   * Converts this Request to JSON.
   * @function toJSON
   * @memberof Request
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  Request.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for Request
   * @function getTypeUrl
   * @memberof Request
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/Request';
  };

  return Request;
})();

$root.ProcedureCall = (function () {
  /**
   * Properties of a ProcedureCall.
   * @exports IProcedureCall
   * @interface IProcedureCall
   * @property {string|null} [service] ProcedureCall service
   * @property {string|null} [procedure] ProcedureCall procedure
   * @property {number|null} [serviceId] ProcedureCall serviceId
   * @property {number|null} [procedureId] ProcedureCall procedureId
   * @property {Array.<IArgument>|null} ["arguments"] ProcedureCall arguments
   */

  /**
   * Constructs a new ProcedureCall.
   * @exports ProcedureCall
   * @classdesc Represents a ProcedureCall.
   * @implements IProcedureCall
   * @constructor
   * @param {IProcedureCall=} [properties] Properties to set
   */
  function ProcedureCall(properties) {
    this['arguments'] = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProcedureCall service.
   * @member {string} service
   * @memberof ProcedureCall
   * @instance
   */
  ProcedureCall.prototype.service = '';

  /**
   * ProcedureCall procedure.
   * @member {string} procedure
   * @memberof ProcedureCall
   * @instance
   */
  ProcedureCall.prototype.procedure = '';

  /**
   * ProcedureCall serviceId.
   * @member {number} serviceId
   * @memberof ProcedureCall
   * @instance
   */
  ProcedureCall.prototype.serviceId = 0;

  /**
   * ProcedureCall procedureId.
   * @member {number} procedureId
   * @memberof ProcedureCall
   * @instance
   */
  ProcedureCall.prototype.procedureId = 0;

  /**
   * ProcedureCall arguments.
   * @member {Array.<IArgument>} arguments
   * @memberof ProcedureCall
   * @instance
   */
  ProcedureCall.prototype['arguments'] = $util.emptyArray;

  /**
   * Creates a new ProcedureCall instance using the specified properties.
   * @function create
   * @memberof ProcedureCall
   * @static
   * @param {IProcedureCall=} [properties] Properties to set
   * @returns {ProcedureCall} ProcedureCall instance
   */
  ProcedureCall.create = function create(properties) {
    return new ProcedureCall(properties);
  };

  /**
   * Encodes the specified ProcedureCall message. Does not implicitly {@link ProcedureCall.verify|verify} messages.
   * @function encode
   * @memberof ProcedureCall
   * @static
   * @param {IProcedureCall} message ProcedureCall message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProcedureCall.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.service != null &&
      Object.hasOwnProperty.call(message, 'service')
    )
      writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.service);
    if (
      message.procedure != null &&
      Object.hasOwnProperty.call(message, 'procedure')
    )
      writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.procedure);
    if (message['arguments'] != null && message['arguments'].length)
      for (var i = 0; i < message['arguments'].length; ++i)
        $root.Argument.encode(
          message['arguments'][i],
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
    if (
      message.serviceId != null &&
      Object.hasOwnProperty.call(message, 'serviceId')
    )
      writer.uint32(/* id 4, wireType 0 =*/ 32).uint32(message.serviceId);
    if (
      message.procedureId != null &&
      Object.hasOwnProperty.call(message, 'procedureId')
    )
      writer.uint32(/* id 5, wireType 0 =*/ 40).uint32(message.procedureId);
    return writer;
  };

  /**
   * Encodes the specified ProcedureCall message, length delimited. Does not implicitly {@link ProcedureCall.verify|verify} messages.
   * @function encodeDelimited
   * @memberof ProcedureCall
   * @static
   * @param {IProcedureCall} message ProcedureCall message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProcedureCall.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a ProcedureCall message from the specified reader or buffer.
   * @function decode
   * @memberof ProcedureCall
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProcedureCall} ProcedureCall
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProcedureCall.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProcedureCall();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          message.service = reader.string();
          break;
        }
        case 2: {
          message.procedure = reader.string();
          break;
        }
        case 4: {
          message.serviceId = reader.uint32();
          break;
        }
        case 5: {
          message.procedureId = reader.uint32();
          break;
        }
        case 3: {
          if (!(message['arguments'] && message['arguments'].length))
            message['arguments'] = [];
          message['arguments'].push(
            $root.Argument.decode(reader, reader.uint32())
          );
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes a ProcedureCall message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof ProcedureCall
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {ProcedureCall} ProcedureCall
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProcedureCall.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a ProcedureCall message.
   * @function verify
   * @memberof ProcedureCall
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  ProcedureCall.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected';
    if (message.service != null && message.hasOwnProperty('service'))
      if (!$util.isString(message.service)) return 'service: string expected';
    if (message.procedure != null && message.hasOwnProperty('procedure'))
      if (!$util.isString(message.procedure))
        return 'procedure: string expected';
    if (message.serviceId != null && message.hasOwnProperty('serviceId'))
      if (!$util.isInteger(message.serviceId))
        return 'serviceId: integer expected';
    if (message.procedureId != null && message.hasOwnProperty('procedureId'))
      if (!$util.isInteger(message.procedureId))
        return 'procedureId: integer expected';
    if (message['arguments'] != null && message.hasOwnProperty('arguments')) {
      if (!Array.isArray(message['arguments']))
        return 'arguments: array expected';
      for (var i = 0; i < message['arguments'].length; ++i) {
        var error = $root.Argument.verify(message['arguments'][i]);
        if (error) return 'arguments.' + error;
      }
    }
    return null;
  };

  /**
   * Creates a ProcedureCall message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof ProcedureCall
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {ProcedureCall} ProcedureCall
   */
  ProcedureCall.fromObject = function fromObject(object) {
    if (object instanceof $root.ProcedureCall) return object;
    var message = new $root.ProcedureCall();
    if (object.service != null) message.service = String(object.service);
    if (object.procedure != null) message.procedure = String(object.procedure);
    if (object.serviceId != null) message.serviceId = object.serviceId >>> 0;
    if (object.procedureId != null)
      message.procedureId = object.procedureId >>> 0;
    if (object['arguments']) {
      if (!Array.isArray(object['arguments']))
        throw TypeError('.ProcedureCall.arguments: array expected');
      message['arguments'] = [];
      for (var i = 0; i < object['arguments'].length; ++i) {
        if (typeof object['arguments'][i] !== 'object')
          throw TypeError('.ProcedureCall.arguments: object expected');
        message['arguments'][i] = $root.Argument.fromObject(
          object['arguments'][i]
        );
      }
    }
    return message;
  };

  /**
   * Creates a plain object from a ProcedureCall message. Also converts values to other types if specified.
   * @function toObject
   * @memberof ProcedureCall
   * @static
   * @param {ProcedureCall} message ProcedureCall
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  ProcedureCall.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.arrays || options.defaults) object['arguments'] = [];
    if (options.defaults) {
      object.service = '';
      object.procedure = '';
      object.serviceId = 0;
      object.procedureId = 0;
    }
    if (message.service != null && message.hasOwnProperty('service'))
      object.service = message.service;
    if (message.procedure != null && message.hasOwnProperty('procedure'))
      object.procedure = message.procedure;
    if (message['arguments'] && message['arguments'].length) {
      object['arguments'] = [];
      for (var j = 0; j < message['arguments'].length; ++j)
        object['arguments'][j] = $root.Argument.toObject(
          message['arguments'][j],
          options
        );
    }
    if (message.serviceId != null && message.hasOwnProperty('serviceId'))
      object.serviceId = message.serviceId;
    if (message.procedureId != null && message.hasOwnProperty('procedureId'))
      object.procedureId = message.procedureId;
    return object;
  };

  /**
   * Converts this ProcedureCall to JSON.
   * @function toJSON
   * @memberof ProcedureCall
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  ProcedureCall.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for ProcedureCall
   * @function getTypeUrl
   * @memberof ProcedureCall
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProcedureCall.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/ProcedureCall';
  };

  return ProcedureCall;
})();

$root.Argument = (function () {
  /**
   * Properties of an Argument.
   * @exports IArgument
   * @interface IArgument
   * @property {number|null} [position] Argument position
   * @property {Uint8Array|null} [value] Argument value
   */

  /**
   * Constructs a new Argument.
   * @exports Argument
   * @classdesc Represents an Argument.
   * @implements IArgument
   * @constructor
   * @param {IArgument=} [properties] Properties to set
   */
  function Argument(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * Argument position.
   * @member {number} position
   * @memberof Argument
   * @instance
   */
  Argument.prototype.position = 0;

  /**
   * Argument value.
   * @member {Uint8Array} value
   * @memberof Argument
   * @instance
   */
  Argument.prototype.value = $util.newBuffer([]);

  /**
   * Creates a new Argument instance using the specified properties.
   * @function create
   * @memberof Argument
   * @static
   * @param {IArgument=} [properties] Properties to set
   * @returns {Argument} Argument instance
   */
  Argument.create = function create(properties) {
    return new Argument(properties);
  };

  /**
   * Encodes the specified Argument message. Does not implicitly {@link Argument.verify|verify} messages.
   * @function encode
   * @memberof Argument
   * @static
   * @param {IArgument} message Argument message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Argument.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.position != null &&
      Object.hasOwnProperty.call(message, 'position')
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.position);
    if (message.value != null && Object.hasOwnProperty.call(message, 'value'))
      writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.value);
    return writer;
  };

  /**
   * Encodes the specified Argument message, length delimited. Does not implicitly {@link Argument.verify|verify} messages.
   * @function encodeDelimited
   * @memberof Argument
   * @static
   * @param {IArgument} message Argument message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Argument.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes an Argument message from the specified reader or buffer.
   * @function decode
   * @memberof Argument
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {Argument} Argument
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Argument.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.Argument();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          message.position = reader.uint32();
          break;
        }
        case 2: {
          message.value = reader.bytes();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes an Argument message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof Argument
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {Argument} Argument
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Argument.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies an Argument message.
   * @function verify
   * @memberof Argument
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  Argument.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected';
    if (message.position != null && message.hasOwnProperty('position'))
      if (!$util.isInteger(message.position))
        return 'position: integer expected';
    if (message.value != null && message.hasOwnProperty('value'))
      if (
        !(
          (message.value && typeof message.value.length === 'number') ||
          $util.isString(message.value)
        )
      )
        return 'value: buffer expected';
    return null;
  };

  /**
   * Creates an Argument message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof Argument
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {Argument} Argument
   */
  Argument.fromObject = function fromObject(object) {
    if (object instanceof $root.Argument) return object;
    var message = new $root.Argument();
    if (object.position != null) message.position = object.position >>> 0;
    if (object.value != null)
      if (typeof object.value === 'string')
        $util.base64.decode(
          object.value,
          (message.value = $util.newBuffer($util.base64.length(object.value))),
          0
        );
      else if (object.value.length >= 0) message.value = object.value;
    return message;
  };

  /**
   * Creates a plain object from an Argument message. Also converts values to other types if specified.
   * @function toObject
   * @memberof Argument
   * @static
   * @param {Argument} message Argument
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  Argument.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.defaults) {
      object.position = 0;
      if (options.bytes === String) object.value = '';
      else {
        object.value = [];
        if (options.bytes !== Array)
          object.value = $util.newBuffer(object.value);
      }
    }
    if (message.position != null && message.hasOwnProperty('position'))
      object.position = message.position;
    if (message.value != null && message.hasOwnProperty('value'))
      object.value =
        options.bytes === String
          ? $util.base64.encode(message.value, 0, message.value.length)
          : options.bytes === Array
          ? Array.prototype.slice.call(message.value)
          : message.value;
    return object;
  };

  /**
   * Converts this Argument to JSON.
   * @function toJSON
   * @memberof Argument
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  Argument.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for Argument
   * @function getTypeUrl
   * @memberof Argument
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  Argument.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/Argument';
  };

  return Argument;
})();

$root.Response = (function () {
  /**
   * Properties of a Response.
   * @exports IResponse
   * @interface IResponse
   * @property {IError|null} [error] Response error
   * @property {Array.<IProcedureResult>|null} [results] Response results
   */

  /**
   * Constructs a new Response.
   * @exports Response
   * @classdesc Represents a Response.
   * @implements IResponse
   * @constructor
   * @param {IResponse=} [properties] Properties to set
   */
  function Response(properties) {
    this.results = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * Response error.
   * @member {IError|null|undefined} error
   * @memberof Response
   * @instance
   */
  Response.prototype.error = null;

  /**
   * Response results.
   * @member {Array.<IProcedureResult>} results
   * @memberof Response
   * @instance
   */
  Response.prototype.results = $util.emptyArray;

  /**
   * Creates a new Response instance using the specified properties.
   * @function create
   * @memberof Response
   * @static
   * @param {IResponse=} [properties] Properties to set
   * @returns {Response} Response instance
   */
  Response.create = function create(properties) {
    return new Response(properties);
  };

  /**
   * Encodes the specified Response message. Does not implicitly {@link Response.verify|verify} messages.
   * @function encode
   * @memberof Response
   * @static
   * @param {IResponse} message Response message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Response.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.error != null && Object.hasOwnProperty.call(message, 'error'))
      $root.Error.encode(
        message.error,
        writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
      ).ldelim();
    if (message.results != null && message.results.length)
      for (var i = 0; i < message.results.length; ++i)
        $root.ProcedureResult.encode(
          message.results[i],
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim();
    return writer;
  };

  /**
   * Encodes the specified Response message, length delimited. Does not implicitly {@link Response.verify|verify} messages.
   * @function encodeDelimited
   * @memberof Response
   * @static
   * @param {IResponse} message Response message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Response.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a Response message from the specified reader or buffer.
   * @function decode
   * @memberof Response
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {Response} Response
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Response.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.Response();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          message.error = $root.Error.decode(reader, reader.uint32());
          break;
        }
        case 2: {
          if (!(message.results && message.results.length))
            message.results = [];
          message.results.push(
            $root.ProcedureResult.decode(reader, reader.uint32())
          );
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes a Response message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof Response
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {Response} Response
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Response.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a Response message.
   * @function verify
   * @memberof Response
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  Response.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected';
    if (message.error != null && message.hasOwnProperty('error')) {
      var error = $root.Error.verify(message.error);
      if (error) return 'error.' + error;
    }
    if (message.results != null && message.hasOwnProperty('results')) {
      if (!Array.isArray(message.results)) return 'results: array expected';
      for (var i = 0; i < message.results.length; ++i) {
        var error = $root.ProcedureResult.verify(message.results[i]);
        if (error) return 'results.' + error;
      }
    }
    return null;
  };

  /**
   * Creates a Response message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof Response
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {Response} Response
   */
  Response.fromObject = function fromObject(object) {
    if (object instanceof $root.Response) return object;
    var message = new $root.Response();
    if (object.error != null) {
      if (typeof object.error !== 'object')
        throw TypeError('.Response.error: object expected');
      message.error = $root.Error.fromObject(object.error);
    }
    if (object.results) {
      if (!Array.isArray(object.results))
        throw TypeError('.Response.results: array expected');
      message.results = [];
      for (var i = 0; i < object.results.length; ++i) {
        if (typeof object.results[i] !== 'object')
          throw TypeError('.Response.results: object expected');
        message.results[i] = $root.ProcedureResult.fromObject(
          object.results[i]
        );
      }
    }
    return message;
  };

  /**
   * Creates a plain object from a Response message. Also converts values to other types if specified.
   * @function toObject
   * @memberof Response
   * @static
   * @param {Response} message Response
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  Response.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.arrays || options.defaults) object.results = [];
    if (options.defaults) object.error = null;
    if (message.error != null && message.hasOwnProperty('error'))
      object.error = $root.Error.toObject(message.error, options);
    if (message.results && message.results.length) {
      object.results = [];
      for (var j = 0; j < message.results.length; ++j)
        object.results[j] = $root.ProcedureResult.toObject(
          message.results[j],
          options
        );
    }
    return object;
  };

  /**
   * Converts this Response to JSON.
   * @function toJSON
   * @memberof Response
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  Response.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for Response
   * @function getTypeUrl
   * @memberof Response
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/Response';
  };

  return Response;
})();

$root.ProcedureResult = (function () {
  /**
   * Properties of a ProcedureResult.
   * @exports IProcedureResult
   * @interface IProcedureResult
   * @property {IError|null} [error] ProcedureResult error
   * @property {Uint8Array|null} [value] ProcedureResult value
   */

  /**
   * Constructs a new ProcedureResult.
   * @exports ProcedureResult
   * @classdesc Represents a ProcedureResult.
   * @implements IProcedureResult
   * @constructor
   * @param {IProcedureResult=} [properties] Properties to set
   */
  function ProcedureResult(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProcedureResult error.
   * @member {IError|null|undefined} error
   * @memberof ProcedureResult
   * @instance
   */
  ProcedureResult.prototype.error = null;

  /**
   * ProcedureResult value.
   * @member {Uint8Array} value
   * @memberof ProcedureResult
   * @instance
   */
  ProcedureResult.prototype.value = $util.newBuffer([]);

  /**
   * Creates a new ProcedureResult instance using the specified properties.
   * @function create
   * @memberof ProcedureResult
   * @static
   * @param {IProcedureResult=} [properties] Properties to set
   * @returns {ProcedureResult} ProcedureResult instance
   */
  ProcedureResult.create = function create(properties) {
    return new ProcedureResult(properties);
  };

  /**
   * Encodes the specified ProcedureResult message. Does not implicitly {@link ProcedureResult.verify|verify} messages.
   * @function encode
   * @memberof ProcedureResult
   * @static
   * @param {IProcedureResult} message ProcedureResult message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProcedureResult.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.error != null && Object.hasOwnProperty.call(message, 'error'))
      $root.Error.encode(
        message.error,
        writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
      ).ldelim();
    if (message.value != null && Object.hasOwnProperty.call(message, 'value'))
      writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.value);
    return writer;
  };

  /**
   * Encodes the specified ProcedureResult message, length delimited. Does not implicitly {@link ProcedureResult.verify|verify} messages.
   * @function encodeDelimited
   * @memberof ProcedureResult
   * @static
   * @param {IProcedureResult} message ProcedureResult message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProcedureResult.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a ProcedureResult message from the specified reader or buffer.
   * @function decode
   * @memberof ProcedureResult
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProcedureResult} ProcedureResult
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProcedureResult.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProcedureResult();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          message.error = $root.Error.decode(reader, reader.uint32());
          break;
        }
        case 2: {
          message.value = reader.bytes();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes a ProcedureResult message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof ProcedureResult
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {ProcedureResult} ProcedureResult
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProcedureResult.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a ProcedureResult message.
   * @function verify
   * @memberof ProcedureResult
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  ProcedureResult.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected';
    if (message.error != null && message.hasOwnProperty('error')) {
      var error = $root.Error.verify(message.error);
      if (error) return 'error.' + error;
    }
    if (message.value != null && message.hasOwnProperty('value'))
      if (
        !(
          (message.value && typeof message.value.length === 'number') ||
          $util.isString(message.value)
        )
      )
        return 'value: buffer expected';
    return null;
  };

  /**
   * Creates a ProcedureResult message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof ProcedureResult
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {ProcedureResult} ProcedureResult
   */
  ProcedureResult.fromObject = function fromObject(object) {
    if (object instanceof $root.ProcedureResult) return object;
    var message = new $root.ProcedureResult();
    if (object.error != null) {
      if (typeof object.error !== 'object')
        throw TypeError('.ProcedureResult.error: object expected');
      message.error = $root.Error.fromObject(object.error);
    }
    if (object.value != null)
      if (typeof object.value === 'string')
        $util.base64.decode(
          object.value,
          (message.value = $util.newBuffer($util.base64.length(object.value))),
          0
        );
      else if (object.value.length >= 0) message.value = object.value;
    return message;
  };

  /**
   * Creates a plain object from a ProcedureResult message. Also converts values to other types if specified.
   * @function toObject
   * @memberof ProcedureResult
   * @static
   * @param {ProcedureResult} message ProcedureResult
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  ProcedureResult.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.defaults) {
      object.error = null;
      if (options.bytes === String) object.value = '';
      else {
        object.value = [];
        if (options.bytes !== Array)
          object.value = $util.newBuffer(object.value);
      }
    }
    if (message.error != null && message.hasOwnProperty('error'))
      object.error = $root.Error.toObject(message.error, options);
    if (message.value != null && message.hasOwnProperty('value'))
      object.value =
        options.bytes === String
          ? $util.base64.encode(message.value, 0, message.value.length)
          : options.bytes === Array
          ? Array.prototype.slice.call(message.value)
          : message.value;
    return object;
  };

  /**
   * Converts this ProcedureResult to JSON.
   * @function toJSON
   * @memberof ProcedureResult
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  ProcedureResult.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for ProcedureResult
   * @function getTypeUrl
   * @memberof ProcedureResult
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProcedureResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/ProcedureResult';
  };

  return ProcedureResult;
})();

$root.Error = (function () {
  /**
   * Properties of an Error.
   * @exports IError
   * @interface IError
   * @property {string|null} [service] Error service
   * @property {string|null} [name] Error name
   * @property {string|null} [description] Error description
   * @property {string|null} [stackTrace] Error stackTrace
   */

  /**
   * Constructs a new Error.
   * @exports Error
   * @classdesc Represents an Error.
   * @implements IError
   * @constructor
   * @param {IError=} [properties] Properties to set
   */
  function Error(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * Error service.
   * @member {string} service
   * @memberof Error
   * @instance
   */
  Error.prototype.service = '';

  /**
   * Error name.
   * @member {string} name
   * @memberof Error
   * @instance
   */
  Error.prototype.name = '';

  /**
   * Error description.
   * @member {string} description
   * @memberof Error
   * @instance
   */
  Error.prototype.description = '';

  /**
   * Error stackTrace.
   * @member {string} stackTrace
   * @memberof Error
   * @instance
   */
  Error.prototype.stackTrace = '';

  /**
   * Creates a new Error instance using the specified properties.
   * @function create
   * @memberof Error
   * @static
   * @param {IError=} [properties] Properties to set
   * @returns {Error} Error instance
   */
  Error.create = function create(properties) {
    return new Error(properties);
  };

  /**
   * Encodes the specified Error message. Does not implicitly {@link Error.verify|verify} messages.
   * @function encode
   * @memberof Error
   * @static
   * @param {IError} message Error message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Error.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.service != null &&
      Object.hasOwnProperty.call(message, 'service')
    )
      writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.service);
    if (message.name != null && Object.hasOwnProperty.call(message, 'name'))
      writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.name);
    if (
      message.description != null &&
      Object.hasOwnProperty.call(message, 'description')
    )
      writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.description);
    if (
      message.stackTrace != null &&
      Object.hasOwnProperty.call(message, 'stackTrace')
    )
      writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.stackTrace);
    return writer;
  };

  /**
   * Encodes the specified Error message, length delimited. Does not implicitly {@link Error.verify|verify} messages.
   * @function encodeDelimited
   * @memberof Error
   * @static
   * @param {IError} message Error message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Error.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes an Error message from the specified reader or buffer.
   * @function decode
   * @memberof Error
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {Error} Error
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Error.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.Error();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          message.service = reader.string();
          break;
        }
        case 2: {
          message.name = reader.string();
          break;
        }
        case 3: {
          message.description = reader.string();
          break;
        }
        case 4: {
          message.stackTrace = reader.string();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes an Error message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof Error
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {Error} Error
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Error.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies an Error message.
   * @function verify
   * @memberof Error
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  Error.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected';
    if (message.service != null && message.hasOwnProperty('service'))
      if (!$util.isString(message.service)) return 'service: string expected';
    if (message.name != null && message.hasOwnProperty('name'))
      if (!$util.isString(message.name)) return 'name: string expected';
    if (message.description != null && message.hasOwnProperty('description'))
      if (!$util.isString(message.description))
        return 'description: string expected';
    if (message.stackTrace != null && message.hasOwnProperty('stackTrace'))
      if (!$util.isString(message.stackTrace))
        return 'stackTrace: string expected';
    return null;
  };

  /**
   * Creates an Error message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof Error
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {Error} Error
   */
  Error.fromObject = function fromObject(object) {
    if (object instanceof $root.Error) return object;
    var message = new $root.Error();
    if (object.service != null) message.service = String(object.service);
    if (object.name != null) message.name = String(object.name);
    if (object.description != null)
      message.description = String(object.description);
    if (object.stackTrace != null)
      message.stackTrace = String(object.stackTrace);
    return message;
  };

  /**
   * Creates a plain object from an Error message. Also converts values to other types if specified.
   * @function toObject
   * @memberof Error
   * @static
   * @param {Error} message Error
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  Error.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.defaults) {
      object.service = '';
      object.name = '';
      object.description = '';
      object.stackTrace = '';
    }
    if (message.service != null && message.hasOwnProperty('service'))
      object.service = message.service;
    if (message.name != null && message.hasOwnProperty('name'))
      object.name = message.name;
    if (message.description != null && message.hasOwnProperty('description'))
      object.description = message.description;
    if (message.stackTrace != null && message.hasOwnProperty('stackTrace'))
      object.stackTrace = message.stackTrace;
    return object;
  };

  /**
   * Converts this Error to JSON.
   * @function toJSON
   * @memberof Error
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  Error.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for Error
   * @function getTypeUrl
   * @memberof Error
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  Error.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/Error';
  };

  return Error;
})();

$root.StreamUpdate = (function () {
  /**
   * Properties of a StreamUpdate.
   * @exports IStreamUpdate
   * @interface IStreamUpdate
   * @property {Array.<IStreamResult>|null} [results] StreamUpdate results
   */

  /**
   * Constructs a new StreamUpdate.
   * @exports StreamUpdate
   * @classdesc Represents a StreamUpdate.
   * @implements IStreamUpdate
   * @constructor
   * @param {IStreamUpdate=} [properties] Properties to set
   */
  function StreamUpdate(properties) {
    this.results = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * StreamUpdate results.
   * @member {Array.<IStreamResult>} results
   * @memberof StreamUpdate
   * @instance
   */
  StreamUpdate.prototype.results = $util.emptyArray;

  /**
   * Creates a new StreamUpdate instance using the specified properties.
   * @function create
   * @memberof StreamUpdate
   * @static
   * @param {IStreamUpdate=} [properties] Properties to set
   * @returns {StreamUpdate} StreamUpdate instance
   */
  StreamUpdate.create = function create(properties) {
    return new StreamUpdate(properties);
  };

  /**
   * Encodes the specified StreamUpdate message. Does not implicitly {@link StreamUpdate.verify|verify} messages.
   * @function encode
   * @memberof StreamUpdate
   * @static
   * @param {IStreamUpdate} message StreamUpdate message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  StreamUpdate.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.results != null && message.results.length)
      for (var i = 0; i < message.results.length; ++i)
        $root.StreamResult.encode(
          message.results[i],
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
    return writer;
  };

  /**
   * Encodes the specified StreamUpdate message, length delimited. Does not implicitly {@link StreamUpdate.verify|verify} messages.
   * @function encodeDelimited
   * @memberof StreamUpdate
   * @static
   * @param {IStreamUpdate} message StreamUpdate message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  StreamUpdate.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a StreamUpdate message from the specified reader or buffer.
   * @function decode
   * @memberof StreamUpdate
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {StreamUpdate} StreamUpdate
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  StreamUpdate.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.StreamUpdate();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (!(message.results && message.results.length))
            message.results = [];
          message.results.push(
            $root.StreamResult.decode(reader, reader.uint32())
          );
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes a StreamUpdate message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof StreamUpdate
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {StreamUpdate} StreamUpdate
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  StreamUpdate.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a StreamUpdate message.
   * @function verify
   * @memberof StreamUpdate
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  StreamUpdate.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected';
    if (message.results != null && message.hasOwnProperty('results')) {
      if (!Array.isArray(message.results)) return 'results: array expected';
      for (var i = 0; i < message.results.length; ++i) {
        var error = $root.StreamResult.verify(message.results[i]);
        if (error) return 'results.' + error;
      }
    }
    return null;
  };

  /**
   * Creates a StreamUpdate message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof StreamUpdate
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {StreamUpdate} StreamUpdate
   */
  StreamUpdate.fromObject = function fromObject(object) {
    if (object instanceof $root.StreamUpdate) return object;
    var message = new $root.StreamUpdate();
    if (object.results) {
      if (!Array.isArray(object.results))
        throw TypeError('.StreamUpdate.results: array expected');
      message.results = [];
      for (var i = 0; i < object.results.length; ++i) {
        if (typeof object.results[i] !== 'object')
          throw TypeError('.StreamUpdate.results: object expected');
        message.results[i] = $root.StreamResult.fromObject(object.results[i]);
      }
    }
    return message;
  };

  /**
   * Creates a plain object from a StreamUpdate message. Also converts values to other types if specified.
   * @function toObject
   * @memberof StreamUpdate
   * @static
   * @param {StreamUpdate} message StreamUpdate
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  StreamUpdate.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.arrays || options.defaults) object.results = [];
    if (message.results && message.results.length) {
      object.results = [];
      for (var j = 0; j < message.results.length; ++j)
        object.results[j] = $root.StreamResult.toObject(
          message.results[j],
          options
        );
    }
    return object;
  };

  /**
   * Converts this StreamUpdate to JSON.
   * @function toJSON
   * @memberof StreamUpdate
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  StreamUpdate.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for StreamUpdate
   * @function getTypeUrl
   * @memberof StreamUpdate
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  StreamUpdate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/StreamUpdate';
  };

  return StreamUpdate;
})();

$root.StreamResult = (function () {
  /**
   * Properties of a StreamResult.
   * @exports IStreamResult
   * @interface IStreamResult
   * @property {number|Long|null} [id] StreamResult id
   * @property {IProcedureResult|null} [result] StreamResult result
   */

  /**
   * Constructs a new StreamResult.
   * @exports StreamResult
   * @classdesc Represents a StreamResult.
   * @implements IStreamResult
   * @constructor
   * @param {IStreamResult=} [properties] Properties to set
   */
  function StreamResult(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * StreamResult id.
   * @member {number|Long} id
   * @memberof StreamResult
   * @instance
   */
  StreamResult.prototype.id = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

  /**
   * StreamResult result.
   * @member {IProcedureResult|null|undefined} result
   * @memberof StreamResult
   * @instance
   */
  StreamResult.prototype.result = null;

  /**
   * Creates a new StreamResult instance using the specified properties.
   * @function create
   * @memberof StreamResult
   * @static
   * @param {IStreamResult=} [properties] Properties to set
   * @returns {StreamResult} StreamResult instance
   */
  StreamResult.create = function create(properties) {
    return new StreamResult(properties);
  };

  /**
   * Encodes the specified StreamResult message. Does not implicitly {@link StreamResult.verify|verify} messages.
   * @function encode
   * @memberof StreamResult
   * @static
   * @param {IStreamResult} message StreamResult message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  StreamResult.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
      writer.uint32(/* id 1, wireType 0 =*/ 8).uint64(message.id);
    if (message.result != null && Object.hasOwnProperty.call(message, 'result'))
      $root.ProcedureResult.encode(
        message.result,
        writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
      ).ldelim();
    return writer;
  };

  /**
   * Encodes the specified StreamResult message, length delimited. Does not implicitly {@link StreamResult.verify|verify} messages.
   * @function encodeDelimited
   * @memberof StreamResult
   * @static
   * @param {IStreamResult} message StreamResult message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  StreamResult.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a StreamResult message from the specified reader or buffer.
   * @function decode
   * @memberof StreamResult
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {StreamResult} StreamResult
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  StreamResult.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.StreamResult();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          message.id = reader.uint64();
          break;
        }
        case 2: {
          message.result = $root.ProcedureResult.decode(
            reader,
            reader.uint32()
          );
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes a StreamResult message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof StreamResult
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {StreamResult} StreamResult
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  StreamResult.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a StreamResult message.
   * @function verify
   * @memberof StreamResult
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  StreamResult.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected';
    if (message.id != null && message.hasOwnProperty('id'))
      if (
        !$util.isInteger(message.id) &&
        !(
          message.id &&
          $util.isInteger(message.id.low) &&
          $util.isInteger(message.id.high)
        )
      )
        return 'id: integer|Long expected';
    if (message.result != null && message.hasOwnProperty('result')) {
      var error = $root.ProcedureResult.verify(message.result);
      if (error) return 'result.' + error;
    }
    return null;
  };

  /**
   * Creates a StreamResult message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof StreamResult
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {StreamResult} StreamResult
   */
  StreamResult.fromObject = function fromObject(object) {
    if (object instanceof $root.StreamResult) return object;
    var message = new $root.StreamResult();
    if (object.id != null)
      if ($util.Long)
        (message.id = $util.Long.fromValue(object.id)).unsigned = true;
      else if (typeof object.id === 'string')
        message.id = parseInt(object.id, 10);
      else if (typeof object.id === 'number') message.id = object.id;
      else if (typeof object.id === 'object')
        message.id = new $util.LongBits(
          object.id.low >>> 0,
          object.id.high >>> 0
        ).toNumber(true);
    if (object.result != null) {
      if (typeof object.result !== 'object')
        throw TypeError('.StreamResult.result: object expected');
      message.result = $root.ProcedureResult.fromObject(object.result);
    }
    return message;
  };

  /**
   * Creates a plain object from a StreamResult message. Also converts values to other types if specified.
   * @function toObject
   * @memberof StreamResult
   * @static
   * @param {StreamResult} message StreamResult
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  StreamResult.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.defaults) {
      if ($util.Long) {
        var long = new $util.Long(0, 0, true);
        object.id =
          options.longs === String
            ? long.toString()
            : options.longs === Number
            ? long.toNumber()
            : long;
      } else object.id = options.longs === String ? '0' : 0;
      object.result = null;
    }
    if (message.id != null && message.hasOwnProperty('id'))
      if (typeof message.id === 'number')
        object.id = options.longs === String ? String(message.id) : message.id;
      else
        object.id =
          options.longs === String
            ? $util.Long.prototype.toString.call(message.id)
            : options.longs === Number
            ? new $util.LongBits(
                message.id.low >>> 0,
                message.id.high >>> 0
              ).toNumber(true)
            : message.id;
    if (message.result != null && message.hasOwnProperty('result'))
      object.result = $root.ProcedureResult.toObject(message.result, options);
    return object;
  };

  /**
   * Converts this StreamResult to JSON.
   * @function toJSON
   * @memberof StreamResult
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  StreamResult.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for StreamResult
   * @function getTypeUrl
   * @memberof StreamResult
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  StreamResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/StreamResult';
  };

  return StreamResult;
})();

$root.Services = (function () {
  /**
   * Properties of a Services.
   * @exports IServices
   * @interface IServices
   * @property {Array.<IService>|null} [services] Services services
   */

  /**
   * Constructs a new Services.
   * @exports Services
   * @classdesc Represents a Services.
   * @implements IServices
   * @constructor
   * @param {IServices=} [properties] Properties to set
   */
  function Services(properties) {
    this.services = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * Services services.
   * @member {Array.<IService>} services
   * @memberof Services
   * @instance
   */
  Services.prototype.services = $util.emptyArray;

  /**
   * Creates a new Services instance using the specified properties.
   * @function create
   * @memberof Services
   * @static
   * @param {IServices=} [properties] Properties to set
   * @returns {Services} Services instance
   */
  Services.create = function create(properties) {
    return new Services(properties);
  };

  /**
   * Encodes the specified Services message. Does not implicitly {@link Services.verify|verify} messages.
   * @function encode
   * @memberof Services
   * @static
   * @param {IServices} message Services message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Services.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.services != null && message.services.length)
      for (var i = 0; i < message.services.length; ++i)
        $root.Service.encode(
          message.services[i],
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
    return writer;
  };

  /**
   * Encodes the specified Services message, length delimited. Does not implicitly {@link Services.verify|verify} messages.
   * @function encodeDelimited
   * @memberof Services
   * @static
   * @param {IServices} message Services message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Services.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a Services message from the specified reader or buffer.
   * @function decode
   * @memberof Services
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {Services} Services
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Services.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.Services();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (!(message.services && message.services.length))
            message.services = [];
          message.services.push($root.Service.decode(reader, reader.uint32()));
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes a Services message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof Services
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {Services} Services
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Services.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a Services message.
   * @function verify
   * @memberof Services
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  Services.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected';
    if (message.services != null && message.hasOwnProperty('services')) {
      if (!Array.isArray(message.services)) return 'services: array expected';
      for (var i = 0; i < message.services.length; ++i) {
        var error = $root.Service.verify(message.services[i]);
        if (error) return 'services.' + error;
      }
    }
    return null;
  };

  /**
   * Creates a Services message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof Services
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {Services} Services
   */
  Services.fromObject = function fromObject(object) {
    if (object instanceof $root.Services) return object;
    var message = new $root.Services();
    if (object.services) {
      if (!Array.isArray(object.services))
        throw TypeError('.Services.services: array expected');
      message.services = [];
      for (var i = 0; i < object.services.length; ++i) {
        if (typeof object.services[i] !== 'object')
          throw TypeError('.Services.services: object expected');
        message.services[i] = $root.Service.fromObject(object.services[i]);
      }
    }
    return message;
  };

  /**
   * Creates a plain object from a Services message. Also converts values to other types if specified.
   * @function toObject
   * @memberof Services
   * @static
   * @param {Services} message Services
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  Services.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.arrays || options.defaults) object.services = [];
    if (message.services && message.services.length) {
      object.services = [];
      for (var j = 0; j < message.services.length; ++j)
        object.services[j] = $root.Service.toObject(
          message.services[j],
          options
        );
    }
    return object;
  };

  /**
   * Converts this Services to JSON.
   * @function toJSON
   * @memberof Services
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  Services.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for Services
   * @function getTypeUrl
   * @memberof Services
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  Services.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/Services';
  };

  return Services;
})();

$root.Service = (function () {
  /**
   * Properties of a Service.
   * @exports IService
   * @interface IService
   * @property {string|null} [name] Service name
   * @property {Array.<IProcedure>|null} [procedures] Service procedures
   * @property {Array.<IClass>|null} [classes] Service classes
   * @property {Array.<IEnumeration>|null} [enumerations] Service enumerations
   * @property {Array.<IException>|null} [exceptions] Service exceptions
   * @property {string|null} [documentation] Service documentation
   */

  /**
   * Constructs a new Service.
   * @exports Service
   * @classdesc Represents a Service.
   * @implements IService
   * @constructor
   * @param {IService=} [properties] Properties to set
   */
  function Service(properties) {
    this.procedures = [];
    this.classes = [];
    this.enumerations = [];
    this.exceptions = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * Service name.
   * @member {string} name
   * @memberof Service
   * @instance
   */
  Service.prototype.name = '';

  /**
   * Service procedures.
   * @member {Array.<IProcedure>} procedures
   * @memberof Service
   * @instance
   */
  Service.prototype.procedures = $util.emptyArray;

  /**
   * Service classes.
   * @member {Array.<IClass>} classes
   * @memberof Service
   * @instance
   */
  Service.prototype.classes = $util.emptyArray;

  /**
   * Service enumerations.
   * @member {Array.<IEnumeration>} enumerations
   * @memberof Service
   * @instance
   */
  Service.prototype.enumerations = $util.emptyArray;

  /**
   * Service exceptions.
   * @member {Array.<IException>} exceptions
   * @memberof Service
   * @instance
   */
  Service.prototype.exceptions = $util.emptyArray;

  /**
   * Service documentation.
   * @member {string} documentation
   * @memberof Service
   * @instance
   */
  Service.prototype.documentation = '';

  /**
   * Creates a new Service instance using the specified properties.
   * @function create
   * @memberof Service
   * @static
   * @param {IService=} [properties] Properties to set
   * @returns {Service} Service instance
   */
  Service.create = function create(properties) {
    return new Service(properties);
  };

  /**
   * Encodes the specified Service message. Does not implicitly {@link Service.verify|verify} messages.
   * @function encode
   * @memberof Service
   * @static
   * @param {IService} message Service message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Service.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.name != null && Object.hasOwnProperty.call(message, 'name'))
      writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.name);
    if (message.procedures != null && message.procedures.length)
      for (var i = 0; i < message.procedures.length; ++i)
        $root.Procedure.encode(
          message.procedures[i],
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim();
    if (message.classes != null && message.classes.length)
      for (var i = 0; i < message.classes.length; ++i)
        $root.Class.encode(
          message.classes[i],
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
    if (message.enumerations != null && message.enumerations.length)
      for (var i = 0; i < message.enumerations.length; ++i)
        $root.Enumeration.encode(
          message.enumerations[i],
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
        ).ldelim();
    if (message.exceptions != null && message.exceptions.length)
      for (var i = 0; i < message.exceptions.length; ++i)
        $root.Exception.encode(
          message.exceptions[i],
          writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
        ).ldelim();
    if (
      message.documentation != null &&
      Object.hasOwnProperty.call(message, 'documentation')
    )
      writer.uint32(/* id 6, wireType 2 =*/ 50).string(message.documentation);
    return writer;
  };

  /**
   * Encodes the specified Service message, length delimited. Does not implicitly {@link Service.verify|verify} messages.
   * @function encodeDelimited
   * @memberof Service
   * @static
   * @param {IService} message Service message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Service.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a Service message from the specified reader or buffer.
   * @function decode
   * @memberof Service
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {Service} Service
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Service.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.Service();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          message.name = reader.string();
          break;
        }
        case 2: {
          if (!(message.procedures && message.procedures.length))
            message.procedures = [];
          message.procedures.push(
            $root.Procedure.decode(reader, reader.uint32())
          );
          break;
        }
        case 3: {
          if (!(message.classes && message.classes.length))
            message.classes = [];
          message.classes.push($root.Class.decode(reader, reader.uint32()));
          break;
        }
        case 4: {
          if (!(message.enumerations && message.enumerations.length))
            message.enumerations = [];
          message.enumerations.push(
            $root.Enumeration.decode(reader, reader.uint32())
          );
          break;
        }
        case 5: {
          if (!(message.exceptions && message.exceptions.length))
            message.exceptions = [];
          message.exceptions.push(
            $root.Exception.decode(reader, reader.uint32())
          );
          break;
        }
        case 6: {
          message.documentation = reader.string();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes a Service message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof Service
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {Service} Service
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Service.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a Service message.
   * @function verify
   * @memberof Service
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  Service.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected';
    if (message.name != null && message.hasOwnProperty('name'))
      if (!$util.isString(message.name)) return 'name: string expected';
    if (message.procedures != null && message.hasOwnProperty('procedures')) {
      if (!Array.isArray(message.procedures))
        return 'procedures: array expected';
      for (var i = 0; i < message.procedures.length; ++i) {
        var error = $root.Procedure.verify(message.procedures[i]);
        if (error) return 'procedures.' + error;
      }
    }
    if (message.classes != null && message.hasOwnProperty('classes')) {
      if (!Array.isArray(message.classes)) return 'classes: array expected';
      for (var i = 0; i < message.classes.length; ++i) {
        var error = $root.Class.verify(message.classes[i]);
        if (error) return 'classes.' + error;
      }
    }
    if (
      message.enumerations != null &&
      message.hasOwnProperty('enumerations')
    ) {
      if (!Array.isArray(message.enumerations))
        return 'enumerations: array expected';
      for (var i = 0; i < message.enumerations.length; ++i) {
        var error = $root.Enumeration.verify(message.enumerations[i]);
        if (error) return 'enumerations.' + error;
      }
    }
    if (message.exceptions != null && message.hasOwnProperty('exceptions')) {
      if (!Array.isArray(message.exceptions))
        return 'exceptions: array expected';
      for (var i = 0; i < message.exceptions.length; ++i) {
        var error = $root.Exception.verify(message.exceptions[i]);
        if (error) return 'exceptions.' + error;
      }
    }
    if (
      message.documentation != null &&
      message.hasOwnProperty('documentation')
    )
      if (!$util.isString(message.documentation))
        return 'documentation: string expected';
    return null;
  };

  /**
   * Creates a Service message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof Service
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {Service} Service
   */
  Service.fromObject = function fromObject(object) {
    if (object instanceof $root.Service) return object;
    var message = new $root.Service();
    if (object.name != null) message.name = String(object.name);
    if (object.procedures) {
      if (!Array.isArray(object.procedures))
        throw TypeError('.Service.procedures: array expected');
      message.procedures = [];
      for (var i = 0; i < object.procedures.length; ++i) {
        if (typeof object.procedures[i] !== 'object')
          throw TypeError('.Service.procedures: object expected');
        message.procedures[i] = $root.Procedure.fromObject(
          object.procedures[i]
        );
      }
    }
    if (object.classes) {
      if (!Array.isArray(object.classes))
        throw TypeError('.Service.classes: array expected');
      message.classes = [];
      for (var i = 0; i < object.classes.length; ++i) {
        if (typeof object.classes[i] !== 'object')
          throw TypeError('.Service.classes: object expected');
        message.classes[i] = $root.Class.fromObject(object.classes[i]);
      }
    }
    if (object.enumerations) {
      if (!Array.isArray(object.enumerations))
        throw TypeError('.Service.enumerations: array expected');
      message.enumerations = [];
      for (var i = 0; i < object.enumerations.length; ++i) {
        if (typeof object.enumerations[i] !== 'object')
          throw TypeError('.Service.enumerations: object expected');
        message.enumerations[i] = $root.Enumeration.fromObject(
          object.enumerations[i]
        );
      }
    }
    if (object.exceptions) {
      if (!Array.isArray(object.exceptions))
        throw TypeError('.Service.exceptions: array expected');
      message.exceptions = [];
      for (var i = 0; i < object.exceptions.length; ++i) {
        if (typeof object.exceptions[i] !== 'object')
          throw TypeError('.Service.exceptions: object expected');
        message.exceptions[i] = $root.Exception.fromObject(
          object.exceptions[i]
        );
      }
    }
    if (object.documentation != null)
      message.documentation = String(object.documentation);
    return message;
  };

  /**
   * Creates a plain object from a Service message. Also converts values to other types if specified.
   * @function toObject
   * @memberof Service
   * @static
   * @param {Service} message Service
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  Service.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.arrays || options.defaults) {
      object.procedures = [];
      object.classes = [];
      object.enumerations = [];
      object.exceptions = [];
    }
    if (options.defaults) {
      object.name = '';
      object.documentation = '';
    }
    if (message.name != null && message.hasOwnProperty('name'))
      object.name = message.name;
    if (message.procedures && message.procedures.length) {
      object.procedures = [];
      for (var j = 0; j < message.procedures.length; ++j)
        object.procedures[j] = $root.Procedure.toObject(
          message.procedures[j],
          options
        );
    }
    if (message.classes && message.classes.length) {
      object.classes = [];
      for (var j = 0; j < message.classes.length; ++j)
        object.classes[j] = $root.Class.toObject(message.classes[j], options);
    }
    if (message.enumerations && message.enumerations.length) {
      object.enumerations = [];
      for (var j = 0; j < message.enumerations.length; ++j)
        object.enumerations[j] = $root.Enumeration.toObject(
          message.enumerations[j],
          options
        );
    }
    if (message.exceptions && message.exceptions.length) {
      object.exceptions = [];
      for (var j = 0; j < message.exceptions.length; ++j)
        object.exceptions[j] = $root.Exception.toObject(
          message.exceptions[j],
          options
        );
    }
    if (
      message.documentation != null &&
      message.hasOwnProperty('documentation')
    )
      object.documentation = message.documentation;
    return object;
  };

  /**
   * Converts this Service to JSON.
   * @function toJSON
   * @memberof Service
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  Service.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for Service
   * @function getTypeUrl
   * @memberof Service
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  Service.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/Service';
  };

  return Service;
})();

$root.Procedure = (function () {
  /**
   * Properties of a Procedure.
   * @exports IProcedure
   * @interface IProcedure
   * @property {string|null} [name] Procedure name
   * @property {Array.<IParameter>|null} [parameters] Procedure parameters
   * @property {IType|null} [returnType] Procedure returnType
   * @property {boolean|null} [returnIsNullable] Procedure returnIsNullable
   * @property {Array.<Procedure.GameScene>|null} [gameScenes] Procedure gameScenes
   * @property {string|null} [documentation] Procedure documentation
   */

  /**
   * Constructs a new Procedure.
   * @exports Procedure
   * @classdesc Represents a Procedure.
   * @implements IProcedure
   * @constructor
   * @param {IProcedure=} [properties] Properties to set
   */
  function Procedure(properties) {
    this.parameters = [];
    this.gameScenes = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * Procedure name.
   * @member {string} name
   * @memberof Procedure
   * @instance
   */
  Procedure.prototype.name = '';

  /**
   * Procedure parameters.
   * @member {Array.<IParameter>} parameters
   * @memberof Procedure
   * @instance
   */
  Procedure.prototype.parameters = $util.emptyArray;

  /**
   * Procedure returnType.
   * @member {IType|null|undefined} returnType
   * @memberof Procedure
   * @instance
   */
  Procedure.prototype.returnType = null;

  /**
   * Procedure returnIsNullable.
   * @member {boolean} returnIsNullable
   * @memberof Procedure
   * @instance
   */
  Procedure.prototype.returnIsNullable = false;

  /**
   * Procedure gameScenes.
   * @member {Array.<Procedure.GameScene>} gameScenes
   * @memberof Procedure
   * @instance
   */
  Procedure.prototype.gameScenes = $util.emptyArray;

  /**
   * Procedure documentation.
   * @member {string} documentation
   * @memberof Procedure
   * @instance
   */
  Procedure.prototype.documentation = '';

  /**
   * Creates a new Procedure instance using the specified properties.
   * @function create
   * @memberof Procedure
   * @static
   * @param {IProcedure=} [properties] Properties to set
   * @returns {Procedure} Procedure instance
   */
  Procedure.create = function create(properties) {
    return new Procedure(properties);
  };

  /**
   * Encodes the specified Procedure message. Does not implicitly {@link Procedure.verify|verify} messages.
   * @function encode
   * @memberof Procedure
   * @static
   * @param {IProcedure} message Procedure message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Procedure.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.name != null && Object.hasOwnProperty.call(message, 'name'))
      writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.name);
    if (message.parameters != null && message.parameters.length)
      for (var i = 0; i < message.parameters.length; ++i)
        $root.Parameter.encode(
          message.parameters[i],
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim();
    if (
      message.returnType != null &&
      Object.hasOwnProperty.call(message, 'returnType')
    )
      $root.Type.encode(
        message.returnType,
        writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
      ).ldelim();
    if (
      message.returnIsNullable != null &&
      Object.hasOwnProperty.call(message, 'returnIsNullable')
    )
      writer.uint32(/* id 4, wireType 0 =*/ 32).bool(message.returnIsNullable);
    if (
      message.documentation != null &&
      Object.hasOwnProperty.call(message, 'documentation')
    )
      writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.documentation);
    if (message.gameScenes != null && message.gameScenes.length) {
      writer.uint32(/* id 6, wireType 2 =*/ 50).fork();
      for (var i = 0; i < message.gameScenes.length; ++i)
        writer.int32(message.gameScenes[i]);
      writer.ldelim();
    }
    return writer;
  };

  /**
   * Encodes the specified Procedure message, length delimited. Does not implicitly {@link Procedure.verify|verify} messages.
   * @function encodeDelimited
   * @memberof Procedure
   * @static
   * @param {IProcedure} message Procedure message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Procedure.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a Procedure message from the specified reader or buffer.
   * @function decode
   * @memberof Procedure
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {Procedure} Procedure
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Procedure.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.Procedure();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          message.name = reader.string();
          break;
        }
        case 2: {
          if (!(message.parameters && message.parameters.length))
            message.parameters = [];
          message.parameters.push(
            $root.Parameter.decode(reader, reader.uint32())
          );
          break;
        }
        case 3: {
          message.returnType = $root.Type.decode(reader, reader.uint32());
          break;
        }
        case 4: {
          message.returnIsNullable = reader.bool();
          break;
        }
        case 6: {
          if (!(message.gameScenes && message.gameScenes.length))
            message.gameScenes = [];
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) message.gameScenes.push(reader.int32());
          } else message.gameScenes.push(reader.int32());
          break;
        }
        case 5: {
          message.documentation = reader.string();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes a Procedure message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof Procedure
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {Procedure} Procedure
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Procedure.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a Procedure message.
   * @function verify
   * @memberof Procedure
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  Procedure.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected';
    if (message.name != null && message.hasOwnProperty('name'))
      if (!$util.isString(message.name)) return 'name: string expected';
    if (message.parameters != null && message.hasOwnProperty('parameters')) {
      if (!Array.isArray(message.parameters))
        return 'parameters: array expected';
      for (var i = 0; i < message.parameters.length; ++i) {
        var error = $root.Parameter.verify(message.parameters[i]);
        if (error) return 'parameters.' + error;
      }
    }
    if (message.returnType != null && message.hasOwnProperty('returnType')) {
      var error = $root.Type.verify(message.returnType);
      if (error) return 'returnType.' + error;
    }
    if (
      message.returnIsNullable != null &&
      message.hasOwnProperty('returnIsNullable')
    )
      if (typeof message.returnIsNullable !== 'boolean')
        return 'returnIsNullable: boolean expected';
    if (message.gameScenes != null && message.hasOwnProperty('gameScenes')) {
      if (!Array.isArray(message.gameScenes))
        return 'gameScenes: array expected';
      for (var i = 0; i < message.gameScenes.length; ++i)
        switch (message.gameScenes[i]) {
          default:
            return 'gameScenes: enum value[] expected';
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
        }
    }
    if (
      message.documentation != null &&
      message.hasOwnProperty('documentation')
    )
      if (!$util.isString(message.documentation))
        return 'documentation: string expected';
    return null;
  };

  /**
   * Creates a Procedure message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof Procedure
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {Procedure} Procedure
   */
  Procedure.fromObject = function fromObject(object) {
    if (object instanceof $root.Procedure) return object;
    var message = new $root.Procedure();
    if (object.name != null) message.name = String(object.name);
    if (object.parameters) {
      if (!Array.isArray(object.parameters))
        throw TypeError('.Procedure.parameters: array expected');
      message.parameters = [];
      for (var i = 0; i < object.parameters.length; ++i) {
        if (typeof object.parameters[i] !== 'object')
          throw TypeError('.Procedure.parameters: object expected');
        message.parameters[i] = $root.Parameter.fromObject(
          object.parameters[i]
        );
      }
    }
    if (object.returnType != null) {
      if (typeof object.returnType !== 'object')
        throw TypeError('.Procedure.returnType: object expected');
      message.returnType = $root.Type.fromObject(object.returnType);
    }
    if (object.returnIsNullable != null)
      message.returnIsNullable = Boolean(object.returnIsNullable);
    if (object.gameScenes) {
      if (!Array.isArray(object.gameScenes))
        throw TypeError('.Procedure.gameScenes: array expected');
      message.gameScenes = [];
      for (var i = 0; i < object.gameScenes.length; ++i)
        switch (object.gameScenes[i]) {
          default:
            if (typeof object.gameScenes[i] === 'number') {
              message.gameScenes[i] = object.gameScenes[i];
              break;
            }
          case 'SPACE_CENTER':
          case 0:
            message.gameScenes[i] = 0;
            break;
          case 'FLIGHT':
          case 1:
            message.gameScenes[i] = 1;
            break;
          case 'TRACKING_STATION':
          case 2:
            message.gameScenes[i] = 2;
            break;
          case 'EDITOR_VAB':
          case 3:
            message.gameScenes[i] = 3;
            break;
          case 'EDITOR_SPH':
          case 4:
            message.gameScenes[i] = 4;
            break;
          case 'MISSION_BUILDER':
          case 5:
            message.gameScenes[i] = 5;
            break;
        }
    }
    if (object.documentation != null)
      message.documentation = String(object.documentation);
    return message;
  };

  /**
   * Creates a plain object from a Procedure message. Also converts values to other types if specified.
   * @function toObject
   * @memberof Procedure
   * @static
   * @param {Procedure} message Procedure
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  Procedure.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.arrays || options.defaults) {
      object.parameters = [];
      object.gameScenes = [];
    }
    if (options.defaults) {
      object.name = '';
      object.returnType = null;
      object.returnIsNullable = false;
      object.documentation = '';
    }
    if (message.name != null && message.hasOwnProperty('name'))
      object.name = message.name;
    if (message.parameters && message.parameters.length) {
      object.parameters = [];
      for (var j = 0; j < message.parameters.length; ++j)
        object.parameters[j] = $root.Parameter.toObject(
          message.parameters[j],
          options
        );
    }
    if (message.returnType != null && message.hasOwnProperty('returnType'))
      object.returnType = $root.Type.toObject(message.returnType, options);
    if (
      message.returnIsNullable != null &&
      message.hasOwnProperty('returnIsNullable')
    )
      object.returnIsNullable = message.returnIsNullable;
    if (
      message.documentation != null &&
      message.hasOwnProperty('documentation')
    )
      object.documentation = message.documentation;
    if (message.gameScenes && message.gameScenes.length) {
      object.gameScenes = [];
      for (var j = 0; j < message.gameScenes.length; ++j)
        object.gameScenes[j] =
          options.enums === String
            ? $root.Procedure.GameScene[message.gameScenes[j]] === undefined
              ? message.gameScenes[j]
              : $root.Procedure.GameScene[message.gameScenes[j]]
            : message.gameScenes[j];
    }
    return object;
  };

  /**
   * Converts this Procedure to JSON.
   * @function toJSON
   * @memberof Procedure
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  Procedure.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for Procedure
   * @function getTypeUrl
   * @memberof Procedure
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  Procedure.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/Procedure';
  };

  /**
   * GameScene enum.
   * @name Procedure.GameScene
   * @enum {number}
   * @property {number} SPACE_CENTER=0 SPACE_CENTER value
   * @property {number} FLIGHT=1 FLIGHT value
   * @property {number} TRACKING_STATION=2 TRACKING_STATION value
   * @property {number} EDITOR_VAB=3 EDITOR_VAB value
   * @property {number} EDITOR_SPH=4 EDITOR_SPH value
   * @property {number} MISSION_BUILDER=5 MISSION_BUILDER value
   */
  Procedure.GameScene = (function () {
    var valuesById = {},
      values = Object.create(valuesById);
    values[(valuesById[0] = 'SPACE_CENTER')] = 0;
    values[(valuesById[1] = 'FLIGHT')] = 1;
    values[(valuesById[2] = 'TRACKING_STATION')] = 2;
    values[(valuesById[3] = 'EDITOR_VAB')] = 3;
    values[(valuesById[4] = 'EDITOR_SPH')] = 4;
    values[(valuesById[5] = 'MISSION_BUILDER')] = 5;
    return values;
  })();

  return Procedure;
})();

$root.Parameter = (function () {
  /**
   * Properties of a Parameter.
   * @exports IParameter
   * @interface IParameter
   * @property {string|null} [name] Parameter name
   * @property {IType|null} [type] Parameter type
   * @property {Uint8Array|null} [defaultValue] Parameter defaultValue
   * @property {boolean|null} [nullable] Parameter nullable
   */

  /**
   * Constructs a new Parameter.
   * @exports Parameter
   * @classdesc Represents a Parameter.
   * @implements IParameter
   * @constructor
   * @param {IParameter=} [properties] Properties to set
   */
  function Parameter(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * Parameter name.
   * @member {string} name
   * @memberof Parameter
   * @instance
   */
  Parameter.prototype.name = '';

  /**
   * Parameter type.
   * @member {IType|null|undefined} type
   * @memberof Parameter
   * @instance
   */
  Parameter.prototype.type = null;

  /**
   * Parameter defaultValue.
   * @member {Uint8Array} defaultValue
   * @memberof Parameter
   * @instance
   */
  Parameter.prototype.defaultValue = $util.newBuffer([]);

  /**
   * Parameter nullable.
   * @member {boolean} nullable
   * @memberof Parameter
   * @instance
   */
  Parameter.prototype.nullable = false;

  /**
   * Creates a new Parameter instance using the specified properties.
   * @function create
   * @memberof Parameter
   * @static
   * @param {IParameter=} [properties] Properties to set
   * @returns {Parameter} Parameter instance
   */
  Parameter.create = function create(properties) {
    return new Parameter(properties);
  };

  /**
   * Encodes the specified Parameter message. Does not implicitly {@link Parameter.verify|verify} messages.
   * @function encode
   * @memberof Parameter
   * @static
   * @param {IParameter} message Parameter message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Parameter.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.name != null && Object.hasOwnProperty.call(message, 'name'))
      writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.name);
    if (message.type != null && Object.hasOwnProperty.call(message, 'type'))
      $root.Type.encode(
        message.type,
        writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
      ).ldelim();
    if (
      message.defaultValue != null &&
      Object.hasOwnProperty.call(message, 'defaultValue')
    )
      writer.uint32(/* id 3, wireType 2 =*/ 26).bytes(message.defaultValue);
    if (
      message.nullable != null &&
      Object.hasOwnProperty.call(message, 'nullable')
    )
      writer.uint32(/* id 4, wireType 0 =*/ 32).bool(message.nullable);
    return writer;
  };

  /**
   * Encodes the specified Parameter message, length delimited. Does not implicitly {@link Parameter.verify|verify} messages.
   * @function encodeDelimited
   * @memberof Parameter
   * @static
   * @param {IParameter} message Parameter message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Parameter.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a Parameter message from the specified reader or buffer.
   * @function decode
   * @memberof Parameter
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {Parameter} Parameter
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Parameter.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.Parameter();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          message.name = reader.string();
          break;
        }
        case 2: {
          message.type = $root.Type.decode(reader, reader.uint32());
          break;
        }
        case 3: {
          message.defaultValue = reader.bytes();
          break;
        }
        case 4: {
          message.nullable = reader.bool();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes a Parameter message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof Parameter
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {Parameter} Parameter
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Parameter.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a Parameter message.
   * @function verify
   * @memberof Parameter
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  Parameter.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected';
    if (message.name != null && message.hasOwnProperty('name'))
      if (!$util.isString(message.name)) return 'name: string expected';
    if (message.type != null && message.hasOwnProperty('type')) {
      var error = $root.Type.verify(message.type);
      if (error) return 'type.' + error;
    }
    if (message.defaultValue != null && message.hasOwnProperty('defaultValue'))
      if (
        !(
          (message.defaultValue &&
            typeof message.defaultValue.length === 'number') ||
          $util.isString(message.defaultValue)
        )
      )
        return 'defaultValue: buffer expected';
    if (message.nullable != null && message.hasOwnProperty('nullable'))
      if (typeof message.nullable !== 'boolean')
        return 'nullable: boolean expected';
    return null;
  };

  /**
   * Creates a Parameter message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof Parameter
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {Parameter} Parameter
   */
  Parameter.fromObject = function fromObject(object) {
    if (object instanceof $root.Parameter) return object;
    var message = new $root.Parameter();
    if (object.name != null) message.name = String(object.name);
    if (object.type != null) {
      if (typeof object.type !== 'object')
        throw TypeError('.Parameter.type: object expected');
      message.type = $root.Type.fromObject(object.type);
    }
    if (object.defaultValue != null)
      if (typeof object.defaultValue === 'string')
        $util.base64.decode(
          object.defaultValue,
          (message.defaultValue = $util.newBuffer(
            $util.base64.length(object.defaultValue)
          )),
          0
        );
      else if (object.defaultValue.length >= 0)
        message.defaultValue = object.defaultValue;
    if (object.nullable != null) message.nullable = Boolean(object.nullable);
    return message;
  };

  /**
   * Creates a plain object from a Parameter message. Also converts values to other types if specified.
   * @function toObject
   * @memberof Parameter
   * @static
   * @param {Parameter} message Parameter
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  Parameter.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.defaults) {
      object.name = '';
      object.type = null;
      if (options.bytes === String) object.defaultValue = '';
      else {
        object.defaultValue = [];
        if (options.bytes !== Array)
          object.defaultValue = $util.newBuffer(object.defaultValue);
      }
      object.nullable = false;
    }
    if (message.name != null && message.hasOwnProperty('name'))
      object.name = message.name;
    if (message.type != null && message.hasOwnProperty('type'))
      object.type = $root.Type.toObject(message.type, options);
    if (message.defaultValue != null && message.hasOwnProperty('defaultValue'))
      object.defaultValue =
        options.bytes === String
          ? $util.base64.encode(
              message.defaultValue,
              0,
              message.defaultValue.length
            )
          : options.bytes === Array
          ? Array.prototype.slice.call(message.defaultValue)
          : message.defaultValue;
    if (message.nullable != null && message.hasOwnProperty('nullable'))
      object.nullable = message.nullable;
    return object;
  };

  /**
   * Converts this Parameter to JSON.
   * @function toJSON
   * @memberof Parameter
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  Parameter.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for Parameter
   * @function getTypeUrl
   * @memberof Parameter
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  Parameter.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/Parameter';
  };

  return Parameter;
})();

$root.Class = (function () {
  /**
   * Properties of a Class.
   * @exports IClass
   * @interface IClass
   * @property {string|null} [name] Class name
   * @property {string|null} [documentation] Class documentation
   */

  /**
   * Constructs a new Class.
   * @exports Class
   * @classdesc Represents a Class.
   * @implements IClass
   * @constructor
   * @param {IClass=} [properties] Properties to set
   */
  function Class(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * Class name.
   * @member {string} name
   * @memberof Class
   * @instance
   */
  Class.prototype.name = '';

  /**
   * Class documentation.
   * @member {string} documentation
   * @memberof Class
   * @instance
   */
  Class.prototype.documentation = '';

  /**
   * Creates a new Class instance using the specified properties.
   * @function create
   * @memberof Class
   * @static
   * @param {IClass=} [properties] Properties to set
   * @returns {Class} Class instance
   */
  Class.create = function create(properties) {
    return new Class(properties);
  };

  /**
   * Encodes the specified Class message. Does not implicitly {@link Class.verify|verify} messages.
   * @function encode
   * @memberof Class
   * @static
   * @param {IClass} message Class message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Class.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.name != null && Object.hasOwnProperty.call(message, 'name'))
      writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.name);
    if (
      message.documentation != null &&
      Object.hasOwnProperty.call(message, 'documentation')
    )
      writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.documentation);
    return writer;
  };

  /**
   * Encodes the specified Class message, length delimited. Does not implicitly {@link Class.verify|verify} messages.
   * @function encodeDelimited
   * @memberof Class
   * @static
   * @param {IClass} message Class message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Class.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a Class message from the specified reader or buffer.
   * @function decode
   * @memberof Class
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {Class} Class
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Class.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.Class();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          message.name = reader.string();
          break;
        }
        case 2: {
          message.documentation = reader.string();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes a Class message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof Class
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {Class} Class
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Class.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a Class message.
   * @function verify
   * @memberof Class
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  Class.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected';
    if (message.name != null && message.hasOwnProperty('name'))
      if (!$util.isString(message.name)) return 'name: string expected';
    if (
      message.documentation != null &&
      message.hasOwnProperty('documentation')
    )
      if (!$util.isString(message.documentation))
        return 'documentation: string expected';
    return null;
  };

  /**
   * Creates a Class message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof Class
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {Class} Class
   */
  Class.fromObject = function fromObject(object) {
    if (object instanceof $root.Class) return object;
    var message = new $root.Class();
    if (object.name != null) message.name = String(object.name);
    if (object.documentation != null)
      message.documentation = String(object.documentation);
    return message;
  };

  /**
   * Creates a plain object from a Class message. Also converts values to other types if specified.
   * @function toObject
   * @memberof Class
   * @static
   * @param {Class} message Class
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  Class.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.defaults) {
      object.name = '';
      object.documentation = '';
    }
    if (message.name != null && message.hasOwnProperty('name'))
      object.name = message.name;
    if (
      message.documentation != null &&
      message.hasOwnProperty('documentation')
    )
      object.documentation = message.documentation;
    return object;
  };

  /**
   * Converts this Class to JSON.
   * @function toJSON
   * @memberof Class
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  Class.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for Class
   * @function getTypeUrl
   * @memberof Class
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  Class.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/Class';
  };

  return Class;
})();

$root.Enumeration = (function () {
  /**
   * Properties of an Enumeration.
   * @exports IEnumeration
   * @interface IEnumeration
   * @property {string|null} [name] Enumeration name
   * @property {Array.<IEnumerationValue>|null} [values] Enumeration values
   * @property {string|null} [documentation] Enumeration documentation
   */

  /**
   * Constructs a new Enumeration.
   * @exports Enumeration
   * @classdesc Represents an Enumeration.
   * @implements IEnumeration
   * @constructor
   * @param {IEnumeration=} [properties] Properties to set
   */
  function Enumeration(properties) {
    this.values = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * Enumeration name.
   * @member {string} name
   * @memberof Enumeration
   * @instance
   */
  Enumeration.prototype.name = '';

  /**
   * Enumeration values.
   * @member {Array.<IEnumerationValue>} values
   * @memberof Enumeration
   * @instance
   */
  Enumeration.prototype.values = $util.emptyArray;

  /**
   * Enumeration documentation.
   * @member {string} documentation
   * @memberof Enumeration
   * @instance
   */
  Enumeration.prototype.documentation = '';

  /**
   * Creates a new Enumeration instance using the specified properties.
   * @function create
   * @memberof Enumeration
   * @static
   * @param {IEnumeration=} [properties] Properties to set
   * @returns {Enumeration} Enumeration instance
   */
  Enumeration.create = function create(properties) {
    return new Enumeration(properties);
  };

  /**
   * Encodes the specified Enumeration message. Does not implicitly {@link Enumeration.verify|verify} messages.
   * @function encode
   * @memberof Enumeration
   * @static
   * @param {IEnumeration} message Enumeration message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Enumeration.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.name != null && Object.hasOwnProperty.call(message, 'name'))
      writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.name);
    if (message.values != null && message.values.length)
      for (var i = 0; i < message.values.length; ++i)
        $root.EnumerationValue.encode(
          message.values[i],
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim();
    if (
      message.documentation != null &&
      Object.hasOwnProperty.call(message, 'documentation')
    )
      writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.documentation);
    return writer;
  };

  /**
   * Encodes the specified Enumeration message, length delimited. Does not implicitly {@link Enumeration.verify|verify} messages.
   * @function encodeDelimited
   * @memberof Enumeration
   * @static
   * @param {IEnumeration} message Enumeration message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Enumeration.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes an Enumeration message from the specified reader or buffer.
   * @function decode
   * @memberof Enumeration
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {Enumeration} Enumeration
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Enumeration.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.Enumeration();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          message.name = reader.string();
          break;
        }
        case 2: {
          if (!(message.values && message.values.length)) message.values = [];
          message.values.push(
            $root.EnumerationValue.decode(reader, reader.uint32())
          );
          break;
        }
        case 3: {
          message.documentation = reader.string();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes an Enumeration message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof Enumeration
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {Enumeration} Enumeration
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Enumeration.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies an Enumeration message.
   * @function verify
   * @memberof Enumeration
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  Enumeration.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected';
    if (message.name != null && message.hasOwnProperty('name'))
      if (!$util.isString(message.name)) return 'name: string expected';
    if (message.values != null && message.hasOwnProperty('values')) {
      if (!Array.isArray(message.values)) return 'values: array expected';
      for (var i = 0; i < message.values.length; ++i) {
        var error = $root.EnumerationValue.verify(message.values[i]);
        if (error) return 'values.' + error;
      }
    }
    if (
      message.documentation != null &&
      message.hasOwnProperty('documentation')
    )
      if (!$util.isString(message.documentation))
        return 'documentation: string expected';
    return null;
  };

  /**
   * Creates an Enumeration message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof Enumeration
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {Enumeration} Enumeration
   */
  Enumeration.fromObject = function fromObject(object) {
    if (object instanceof $root.Enumeration) return object;
    var message = new $root.Enumeration();
    if (object.name != null) message.name = String(object.name);
    if (object.values) {
      if (!Array.isArray(object.values))
        throw TypeError('.Enumeration.values: array expected');
      message.values = [];
      for (var i = 0; i < object.values.length; ++i) {
        if (typeof object.values[i] !== 'object')
          throw TypeError('.Enumeration.values: object expected');
        message.values[i] = $root.EnumerationValue.fromObject(object.values[i]);
      }
    }
    if (object.documentation != null)
      message.documentation = String(object.documentation);
    return message;
  };

  /**
   * Creates a plain object from an Enumeration message. Also converts values to other types if specified.
   * @function toObject
   * @memberof Enumeration
   * @static
   * @param {Enumeration} message Enumeration
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  Enumeration.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.arrays || options.defaults) object.values = [];
    if (options.defaults) {
      object.name = '';
      object.documentation = '';
    }
    if (message.name != null && message.hasOwnProperty('name'))
      object.name = message.name;
    if (message.values && message.values.length) {
      object.values = [];
      for (var j = 0; j < message.values.length; ++j)
        object.values[j] = $root.EnumerationValue.toObject(
          message.values[j],
          options
        );
    }
    if (
      message.documentation != null &&
      message.hasOwnProperty('documentation')
    )
      object.documentation = message.documentation;
    return object;
  };

  /**
   * Converts this Enumeration to JSON.
   * @function toJSON
   * @memberof Enumeration
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  Enumeration.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for Enumeration
   * @function getTypeUrl
   * @memberof Enumeration
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  Enumeration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/Enumeration';
  };

  return Enumeration;
})();

$root.EnumerationValue = (function () {
  /**
   * Properties of an EnumerationValue.
   * @exports IEnumerationValue
   * @interface IEnumerationValue
   * @property {string|null} [name] EnumerationValue name
   * @property {number|null} [value] EnumerationValue value
   * @property {string|null} [documentation] EnumerationValue documentation
   */

  /**
   * Constructs a new EnumerationValue.
   * @exports EnumerationValue
   * @classdesc Represents an EnumerationValue.
   * @implements IEnumerationValue
   * @constructor
   * @param {IEnumerationValue=} [properties] Properties to set
   */
  function EnumerationValue(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * EnumerationValue name.
   * @member {string} name
   * @memberof EnumerationValue
   * @instance
   */
  EnumerationValue.prototype.name = '';

  /**
   * EnumerationValue value.
   * @member {number} value
   * @memberof EnumerationValue
   * @instance
   */
  EnumerationValue.prototype.value = 0;

  /**
   * EnumerationValue documentation.
   * @member {string} documentation
   * @memberof EnumerationValue
   * @instance
   */
  EnumerationValue.prototype.documentation = '';

  /**
   * Creates a new EnumerationValue instance using the specified properties.
   * @function create
   * @memberof EnumerationValue
   * @static
   * @param {IEnumerationValue=} [properties] Properties to set
   * @returns {EnumerationValue} EnumerationValue instance
   */
  EnumerationValue.create = function create(properties) {
    return new EnumerationValue(properties);
  };

  /**
   * Encodes the specified EnumerationValue message. Does not implicitly {@link EnumerationValue.verify|verify} messages.
   * @function encode
   * @memberof EnumerationValue
   * @static
   * @param {IEnumerationValue} message EnumerationValue message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  EnumerationValue.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.name != null && Object.hasOwnProperty.call(message, 'name'))
      writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.name);
    if (message.value != null && Object.hasOwnProperty.call(message, 'value'))
      writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.value);
    if (
      message.documentation != null &&
      Object.hasOwnProperty.call(message, 'documentation')
    )
      writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.documentation);
    return writer;
  };

  /**
   * Encodes the specified EnumerationValue message, length delimited. Does not implicitly {@link EnumerationValue.verify|verify} messages.
   * @function encodeDelimited
   * @memberof EnumerationValue
   * @static
   * @param {IEnumerationValue} message EnumerationValue message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  EnumerationValue.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes an EnumerationValue message from the specified reader or buffer.
   * @function decode
   * @memberof EnumerationValue
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {EnumerationValue} EnumerationValue
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  EnumerationValue.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.EnumerationValue();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          message.name = reader.string();
          break;
        }
        case 2: {
          message.value = reader.int32();
          break;
        }
        case 3: {
          message.documentation = reader.string();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes an EnumerationValue message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof EnumerationValue
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {EnumerationValue} EnumerationValue
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  EnumerationValue.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies an EnumerationValue message.
   * @function verify
   * @memberof EnumerationValue
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  EnumerationValue.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected';
    if (message.name != null && message.hasOwnProperty('name'))
      if (!$util.isString(message.name)) return 'name: string expected';
    if (message.value != null && message.hasOwnProperty('value'))
      if (!$util.isInteger(message.value)) return 'value: integer expected';
    if (
      message.documentation != null &&
      message.hasOwnProperty('documentation')
    )
      if (!$util.isString(message.documentation))
        return 'documentation: string expected';
    return null;
  };

  /**
   * Creates an EnumerationValue message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof EnumerationValue
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {EnumerationValue} EnumerationValue
   */
  EnumerationValue.fromObject = function fromObject(object) {
    if (object instanceof $root.EnumerationValue) return object;
    var message = new $root.EnumerationValue();
    if (object.name != null) message.name = String(object.name);
    if (object.value != null) message.value = object.value | 0;
    if (object.documentation != null)
      message.documentation = String(object.documentation);
    return message;
  };

  /**
   * Creates a plain object from an EnumerationValue message. Also converts values to other types if specified.
   * @function toObject
   * @memberof EnumerationValue
   * @static
   * @param {EnumerationValue} message EnumerationValue
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  EnumerationValue.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.defaults) {
      object.name = '';
      object.value = 0;
      object.documentation = '';
    }
    if (message.name != null && message.hasOwnProperty('name'))
      object.name = message.name;
    if (message.value != null && message.hasOwnProperty('value'))
      object.value = message.value;
    if (
      message.documentation != null &&
      message.hasOwnProperty('documentation')
    )
      object.documentation = message.documentation;
    return object;
  };

  /**
   * Converts this EnumerationValue to JSON.
   * @function toJSON
   * @memberof EnumerationValue
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  EnumerationValue.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for EnumerationValue
   * @function getTypeUrl
   * @memberof EnumerationValue
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  EnumerationValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/EnumerationValue';
  };

  return EnumerationValue;
})();

$root.Exception = (function () {
  /**
   * Properties of an Exception.
   * @exports IException
   * @interface IException
   * @property {string|null} [name] Exception name
   * @property {string|null} [documentation] Exception documentation
   */

  /**
   * Constructs a new Exception.
   * @exports Exception
   * @classdesc Represents an Exception.
   * @implements IException
   * @constructor
   * @param {IException=} [properties] Properties to set
   */
  function Exception(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * Exception name.
   * @member {string} name
   * @memberof Exception
   * @instance
   */
  Exception.prototype.name = '';

  /**
   * Exception documentation.
   * @member {string} documentation
   * @memberof Exception
   * @instance
   */
  Exception.prototype.documentation = '';

  /**
   * Creates a new Exception instance using the specified properties.
   * @function create
   * @memberof Exception
   * @static
   * @param {IException=} [properties] Properties to set
   * @returns {Exception} Exception instance
   */
  Exception.create = function create(properties) {
    return new Exception(properties);
  };

  /**
   * Encodes the specified Exception message. Does not implicitly {@link Exception.verify|verify} messages.
   * @function encode
   * @memberof Exception
   * @static
   * @param {IException} message Exception message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Exception.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.name != null && Object.hasOwnProperty.call(message, 'name'))
      writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.name);
    if (
      message.documentation != null &&
      Object.hasOwnProperty.call(message, 'documentation')
    )
      writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.documentation);
    return writer;
  };

  /**
   * Encodes the specified Exception message, length delimited. Does not implicitly {@link Exception.verify|verify} messages.
   * @function encodeDelimited
   * @memberof Exception
   * @static
   * @param {IException} message Exception message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Exception.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes an Exception message from the specified reader or buffer.
   * @function decode
   * @memberof Exception
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {Exception} Exception
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Exception.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.Exception();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          message.name = reader.string();
          break;
        }
        case 2: {
          message.documentation = reader.string();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes an Exception message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof Exception
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {Exception} Exception
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Exception.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies an Exception message.
   * @function verify
   * @memberof Exception
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  Exception.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected';
    if (message.name != null && message.hasOwnProperty('name'))
      if (!$util.isString(message.name)) return 'name: string expected';
    if (
      message.documentation != null &&
      message.hasOwnProperty('documentation')
    )
      if (!$util.isString(message.documentation))
        return 'documentation: string expected';
    return null;
  };

  /**
   * Creates an Exception message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof Exception
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {Exception} Exception
   */
  Exception.fromObject = function fromObject(object) {
    if (object instanceof $root.Exception) return object;
    var message = new $root.Exception();
    if (object.name != null) message.name = String(object.name);
    if (object.documentation != null)
      message.documentation = String(object.documentation);
    return message;
  };

  /**
   * Creates a plain object from an Exception message. Also converts values to other types if specified.
   * @function toObject
   * @memberof Exception
   * @static
   * @param {Exception} message Exception
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  Exception.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.defaults) {
      object.name = '';
      object.documentation = '';
    }
    if (message.name != null && message.hasOwnProperty('name'))
      object.name = message.name;
    if (
      message.documentation != null &&
      message.hasOwnProperty('documentation')
    )
      object.documentation = message.documentation;
    return object;
  };

  /**
   * Converts this Exception to JSON.
   * @function toJSON
   * @memberof Exception
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  Exception.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for Exception
   * @function getTypeUrl
   * @memberof Exception
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  Exception.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/Exception';
  };

  return Exception;
})();

$root.Type = (function () {
  /**
   * Properties of a Type.
   * @exports IType
   * @interface IType
   * @property {Type.TypeCode|null} [code] Type code
   * @property {string|null} [service] Type service
   * @property {string|null} [name] Type name
   * @property {Array.<IType>|null} [types] Type types
   */

  /**
   * Constructs a new Type.
   * @exports Type
   * @classdesc Represents a Type.
   * @implements IType
   * @constructor
   * @param {IType=} [properties] Properties to set
   */
  function Type(properties) {
    this.types = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * Type code.
   * @member {Type.TypeCode} code
   * @memberof Type
   * @instance
   */
  Type.prototype.code = 0;

  /**
   * Type service.
   * @member {string} service
   * @memberof Type
   * @instance
   */
  Type.prototype.service = '';

  /**
   * Type name.
   * @member {string} name
   * @memberof Type
   * @instance
   */
  Type.prototype.name = '';

  /**
   * Type types.
   * @member {Array.<IType>} types
   * @memberof Type
   * @instance
   */
  Type.prototype.types = $util.emptyArray;

  /**
   * Creates a new Type instance using the specified properties.
   * @function create
   * @memberof Type
   * @static
   * @param {IType=} [properties] Properties to set
   * @returns {Type} Type instance
   */
  Type.create = function create(properties) {
    return new Type(properties);
  };

  /**
   * Encodes the specified Type message. Does not implicitly {@link Type.verify|verify} messages.
   * @function encode
   * @memberof Type
   * @static
   * @param {IType} message Type message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Type.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.code != null && Object.hasOwnProperty.call(message, 'code'))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.code);
    if (
      message.service != null &&
      Object.hasOwnProperty.call(message, 'service')
    )
      writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.service);
    if (message.name != null && Object.hasOwnProperty.call(message, 'name'))
      writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.name);
    if (message.types != null && message.types.length)
      for (var i = 0; i < message.types.length; ++i)
        $root.Type.encode(
          message.types[i],
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
        ).ldelim();
    return writer;
  };

  /**
   * Encodes the specified Type message, length delimited. Does not implicitly {@link Type.verify|verify} messages.
   * @function encodeDelimited
   * @memberof Type
   * @static
   * @param {IType} message Type message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Type.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a Type message from the specified reader or buffer.
   * @function decode
   * @memberof Type
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {Type} Type
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Type.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.Type();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          message.code = reader.int32();
          break;
        }
        case 2: {
          message.service = reader.string();
          break;
        }
        case 3: {
          message.name = reader.string();
          break;
        }
        case 4: {
          if (!(message.types && message.types.length)) message.types = [];
          message.types.push($root.Type.decode(reader, reader.uint32()));
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes a Type message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof Type
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {Type} Type
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Type.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a Type message.
   * @function verify
   * @memberof Type
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  Type.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected';
    if (message.code != null && message.hasOwnProperty('code'))
      switch (message.code) {
        default:
          return 'code: enum value expected';
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 100:
        case 101:
        case 200:
        case 201:
        case 202:
        case 203:
        case 204:
        case 300:
        case 301:
        case 302:
        case 303:
          break;
      }
    if (message.service != null && message.hasOwnProperty('service'))
      if (!$util.isString(message.service)) return 'service: string expected';
    if (message.name != null && message.hasOwnProperty('name'))
      if (!$util.isString(message.name)) return 'name: string expected';
    if (message.types != null && message.hasOwnProperty('types')) {
      if (!Array.isArray(message.types)) return 'types: array expected';
      for (var i = 0; i < message.types.length; ++i) {
        var error = $root.Type.verify(message.types[i]);
        if (error) return 'types.' + error;
      }
    }
    return null;
  };

  /**
   * Creates a Type message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof Type
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {Type} Type
   */
  Type.fromObject = function fromObject(object) {
    if (object instanceof $root.Type) return object;
    var message = new $root.Type();
    switch (object.code) {
      default:
        if (typeof object.code === 'number') {
          message.code = object.code;
          break;
        }
        break;
      case 'NONE':
      case 0:
        message.code = 0;
        break;
      case 'DOUBLE':
      case 1:
        message.code = 1;
        break;
      case 'FLOAT':
      case 2:
        message.code = 2;
        break;
      case 'SINT32':
      case 3:
        message.code = 3;
        break;
      case 'SINT64':
      case 4:
        message.code = 4;
        break;
      case 'UINT32':
      case 5:
        message.code = 5;
        break;
      case 'UINT64':
      case 6:
        message.code = 6;
        break;
      case 'BOOL':
      case 7:
        message.code = 7;
        break;
      case 'STRING':
      case 8:
        message.code = 8;
        break;
      case 'BYTES':
      case 9:
        message.code = 9;
        break;
      case 'CLASS':
      case 100:
        message.code = 100;
        break;
      case 'ENUMERATION':
      case 101:
        message.code = 101;
        break;
      case 'EVENT':
      case 200:
        message.code = 200;
        break;
      case 'PROCEDURE_CALL':
      case 201:
        message.code = 201;
        break;
      case 'STREAM':
      case 202:
        message.code = 202;
        break;
      case 'STATUS':
      case 203:
        message.code = 203;
        break;
      case 'SERVICES':
      case 204:
        message.code = 204;
        break;
      case 'TUPLE':
      case 300:
        message.code = 300;
        break;
      case 'LIST':
      case 301:
        message.code = 301;
        break;
      case 'SET':
      case 302:
        message.code = 302;
        break;
      case 'DICTIONARY':
      case 303:
        message.code = 303;
        break;
    }
    if (object.service != null) message.service = String(object.service);
    if (object.name != null) message.name = String(object.name);
    if (object.types) {
      if (!Array.isArray(object.types))
        throw TypeError('.Type.types: array expected');
      message.types = [];
      for (var i = 0; i < object.types.length; ++i) {
        if (typeof object.types[i] !== 'object')
          throw TypeError('.Type.types: object expected');
        message.types[i] = $root.Type.fromObject(object.types[i]);
      }
    }
    return message;
  };

  /**
   * Creates a plain object from a Type message. Also converts values to other types if specified.
   * @function toObject
   * @memberof Type
   * @static
   * @param {Type} message Type
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  Type.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.arrays || options.defaults) object.types = [];
    if (options.defaults) {
      object.code = options.enums === String ? 'NONE' : 0;
      object.service = '';
      object.name = '';
    }
    if (message.code != null && message.hasOwnProperty('code'))
      object.code =
        options.enums === String
          ? $root.Type.TypeCode[message.code] === undefined
            ? message.code
            : $root.Type.TypeCode[message.code]
          : message.code;
    if (message.service != null && message.hasOwnProperty('service'))
      object.service = message.service;
    if (message.name != null && message.hasOwnProperty('name'))
      object.name = message.name;
    if (message.types && message.types.length) {
      object.types = [];
      for (var j = 0; j < message.types.length; ++j)
        object.types[j] = $root.Type.toObject(message.types[j], options);
    }
    return object;
  };

  /**
   * Converts this Type to JSON.
   * @function toJSON
   * @memberof Type
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  Type.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for Type
   * @function getTypeUrl
   * @memberof Type
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  Type.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/Type';
  };

  /**
   * TypeCode enum.
   * @name Type.TypeCode
   * @enum {number}
   * @property {number} NONE=0 NONE value
   * @property {number} DOUBLE=1 DOUBLE value
   * @property {number} FLOAT=2 FLOAT value
   * @property {number} SINT32=3 SINT32 value
   * @property {number} SINT64=4 SINT64 value
   * @property {number} UINT32=5 UINT32 value
   * @property {number} UINT64=6 UINT64 value
   * @property {number} BOOL=7 BOOL value
   * @property {number} STRING=8 STRING value
   * @property {number} BYTES=9 BYTES value
   * @property {number} CLASS=100 CLASS value
   * @property {number} ENUMERATION=101 ENUMERATION value
   * @property {number} EVENT=200 EVENT value
   * @property {number} PROCEDURE_CALL=201 PROCEDURE_CALL value
   * @property {number} STREAM=202 STREAM value
   * @property {number} STATUS=203 STATUS value
   * @property {number} SERVICES=204 SERVICES value
   * @property {number} TUPLE=300 TUPLE value
   * @property {number} LIST=301 LIST value
   * @property {number} SET=302 SET value
   * @property {number} DICTIONARY=303 DICTIONARY value
   */
  Type.TypeCode = (function () {
    var valuesById = {},
      values = Object.create(valuesById);
    values[(valuesById[0] = 'NONE')] = 0;
    values[(valuesById[1] = 'DOUBLE')] = 1;
    values[(valuesById[2] = 'FLOAT')] = 2;
    values[(valuesById[3] = 'SINT32')] = 3;
    values[(valuesById[4] = 'SINT64')] = 4;
    values[(valuesById[5] = 'UINT32')] = 5;
    values[(valuesById[6] = 'UINT64')] = 6;
    values[(valuesById[7] = 'BOOL')] = 7;
    values[(valuesById[8] = 'STRING')] = 8;
    values[(valuesById[9] = 'BYTES')] = 9;
    values[(valuesById[100] = 'CLASS')] = 100;
    values[(valuesById[101] = 'ENUMERATION')] = 101;
    values[(valuesById[200] = 'EVENT')] = 200;
    values[(valuesById[201] = 'PROCEDURE_CALL')] = 201;
    values[(valuesById[202] = 'STREAM')] = 202;
    values[(valuesById[203] = 'STATUS')] = 203;
    values[(valuesById[204] = 'SERVICES')] = 204;
    values[(valuesById[300] = 'TUPLE')] = 300;
    values[(valuesById[301] = 'LIST')] = 301;
    values[(valuesById[302] = 'SET')] = 302;
    values[(valuesById[303] = 'DICTIONARY')] = 303;
    return values;
  })();

  return Type;
})();

$root.Tuple = (function () {
  /**
   * Properties of a Tuple.
   * @exports ITuple
   * @interface ITuple
   * @property {Array.<Uint8Array>|null} [items] Tuple items
   */

  /**
   * Constructs a new Tuple.
   * @exports Tuple
   * @classdesc Represents a Tuple.
   * @implements ITuple
   * @constructor
   * @param {ITuple=} [properties] Properties to set
   */
  function Tuple(properties) {
    this.items = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * Tuple items.
   * @member {Array.<Uint8Array>} items
   * @memberof Tuple
   * @instance
   */
  Tuple.prototype.items = $util.emptyArray;

  /**
   * Creates a new Tuple instance using the specified properties.
   * @function create
   * @memberof Tuple
   * @static
   * @param {ITuple=} [properties] Properties to set
   * @returns {Tuple} Tuple instance
   */
  Tuple.create = function create(properties) {
    return new Tuple(properties);
  };

  /**
   * Encodes the specified Tuple message. Does not implicitly {@link Tuple.verify|verify} messages.
   * @function encode
   * @memberof Tuple
   * @static
   * @param {ITuple} message Tuple message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Tuple.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.items != null && message.items.length)
      for (var i = 0; i < message.items.length; ++i)
        writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.items[i]);
    return writer;
  };

  /**
   * Encodes the specified Tuple message, length delimited. Does not implicitly {@link Tuple.verify|verify} messages.
   * @function encodeDelimited
   * @memberof Tuple
   * @static
   * @param {ITuple} message Tuple message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Tuple.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a Tuple message from the specified reader or buffer.
   * @function decode
   * @memberof Tuple
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {Tuple} Tuple
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Tuple.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.Tuple();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (!(message.items && message.items.length)) message.items = [];
          message.items.push(reader.bytes());
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes a Tuple message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof Tuple
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {Tuple} Tuple
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Tuple.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a Tuple message.
   * @function verify
   * @memberof Tuple
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  Tuple.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected';
    if (message.items != null && message.hasOwnProperty('items')) {
      if (!Array.isArray(message.items)) return 'items: array expected';
      for (var i = 0; i < message.items.length; ++i)
        if (
          !(
            (message.items[i] && typeof message.items[i].length === 'number') ||
            $util.isString(message.items[i])
          )
        )
          return 'items: buffer[] expected';
    }
    return null;
  };

  /**
   * Creates a Tuple message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof Tuple
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {Tuple} Tuple
   */
  Tuple.fromObject = function fromObject(object) {
    if (object instanceof $root.Tuple) return object;
    var message = new $root.Tuple();
    if (object.items) {
      if (!Array.isArray(object.items))
        throw TypeError('.Tuple.items: array expected');
      message.items = [];
      for (var i = 0; i < object.items.length; ++i)
        if (typeof object.items[i] === 'string')
          $util.base64.decode(
            object.items[i],
            (message.items[i] = $util.newBuffer(
              $util.base64.length(object.items[i])
            )),
            0
          );
        else if (object.items[i].length >= 0)
          message.items[i] = object.items[i];
    }
    return message;
  };

  /**
   * Creates a plain object from a Tuple message. Also converts values to other types if specified.
   * @function toObject
   * @memberof Tuple
   * @static
   * @param {Tuple} message Tuple
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  Tuple.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.arrays || options.defaults) object.items = [];
    if (message.items && message.items.length) {
      object.items = [];
      for (var j = 0; j < message.items.length; ++j)
        object.items[j] =
          options.bytes === String
            ? $util.base64.encode(message.items[j], 0, message.items[j].length)
            : options.bytes === Array
            ? Array.prototype.slice.call(message.items[j])
            : message.items[j];
    }
    return object;
  };

  /**
   * Converts this Tuple to JSON.
   * @function toJSON
   * @memberof Tuple
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  Tuple.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for Tuple
   * @function getTypeUrl
   * @memberof Tuple
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  Tuple.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/Tuple';
  };

  return Tuple;
})();

$root.List = (function () {
  /**
   * Properties of a List.
   * @exports IList
   * @interface IList
   * @property {Array.<Uint8Array>|null} [items] List items
   */

  /**
   * Constructs a new List.
   * @exports List
   * @classdesc Represents a List.
   * @implements IList
   * @constructor
   * @param {IList=} [properties] Properties to set
   */
  function List(properties) {
    this.items = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * List items.
   * @member {Array.<Uint8Array>} items
   * @memberof List
   * @instance
   */
  List.prototype.items = $util.emptyArray;

  /**
   * Creates a new List instance using the specified properties.
   * @function create
   * @memberof List
   * @static
   * @param {IList=} [properties] Properties to set
   * @returns {List} List instance
   */
  List.create = function create(properties) {
    return new List(properties);
  };

  /**
   * Encodes the specified List message. Does not implicitly {@link List.verify|verify} messages.
   * @function encode
   * @memberof List
   * @static
   * @param {IList} message List message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  List.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.items != null && message.items.length)
      for (var i = 0; i < message.items.length; ++i)
        writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.items[i]);
    return writer;
  };

  /**
   * Encodes the specified List message, length delimited. Does not implicitly {@link List.verify|verify} messages.
   * @function encodeDelimited
   * @memberof List
   * @static
   * @param {IList} message List message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  List.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a List message from the specified reader or buffer.
   * @function decode
   * @memberof List
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {List} List
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  List.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.List();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (!(message.items && message.items.length)) message.items = [];
          message.items.push(reader.bytes());
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes a List message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof List
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {List} List
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  List.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a List message.
   * @function verify
   * @memberof List
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  List.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected';
    if (message.items != null && message.hasOwnProperty('items')) {
      if (!Array.isArray(message.items)) return 'items: array expected';
      for (var i = 0; i < message.items.length; ++i)
        if (
          !(
            (message.items[i] && typeof message.items[i].length === 'number') ||
            $util.isString(message.items[i])
          )
        )
          return 'items: buffer[] expected';
    }
    return null;
  };

  /**
   * Creates a List message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof List
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {List} List
   */
  List.fromObject = function fromObject(object) {
    if (object instanceof $root.List) return object;
    var message = new $root.List();
    if (object.items) {
      if (!Array.isArray(object.items))
        throw TypeError('.List.items: array expected');
      message.items = [];
      for (var i = 0; i < object.items.length; ++i)
        if (typeof object.items[i] === 'string')
          $util.base64.decode(
            object.items[i],
            (message.items[i] = $util.newBuffer(
              $util.base64.length(object.items[i])
            )),
            0
          );
        else if (object.items[i].length >= 0)
          message.items[i] = object.items[i];
    }
    return message;
  };

  /**
   * Creates a plain object from a List message. Also converts values to other types if specified.
   * @function toObject
   * @memberof List
   * @static
   * @param {List} message List
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  List.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.arrays || options.defaults) object.items = [];
    if (message.items && message.items.length) {
      object.items = [];
      for (var j = 0; j < message.items.length; ++j)
        object.items[j] =
          options.bytes === String
            ? $util.base64.encode(message.items[j], 0, message.items[j].length)
            : options.bytes === Array
            ? Array.prototype.slice.call(message.items[j])
            : message.items[j];
    }
    return object;
  };

  /**
   * Converts this List to JSON.
   * @function toJSON
   * @memberof List
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  List.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for List
   * @function getTypeUrl
   * @memberof List
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  List.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/List';
  };

  return List;
})();

$root.Set = (function () {
  /**
   * Properties of a Set.
   * @exports ISet
   * @interface ISet
   * @property {Array.<Uint8Array>|null} [items] Set items
   */

  /**
   * Constructs a new Set.
   * @exports Set
   * @classdesc Represents a Set.
   * @implements ISet
   * @constructor
   * @param {ISet=} [properties] Properties to set
   */
  function Set(properties) {
    this.items = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * Set items.
   * @member {Array.<Uint8Array>} items
   * @memberof Set
   * @instance
   */
  Set.prototype.items = $util.emptyArray;

  /**
   * Creates a new Set instance using the specified properties.
   * @function create
   * @memberof Set
   * @static
   * @param {ISet=} [properties] Properties to set
   * @returns {Set} Set instance
   */
  Set.create = function create(properties) {
    return new Set(properties);
  };

  /**
   * Encodes the specified Set message. Does not implicitly {@link Set.verify|verify} messages.
   * @function encode
   * @memberof Set
   * @static
   * @param {ISet} message Set message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Set.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.items != null && message.items.length)
      for (var i = 0; i < message.items.length; ++i)
        writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.items[i]);
    return writer;
  };

  /**
   * Encodes the specified Set message, length delimited. Does not implicitly {@link Set.verify|verify} messages.
   * @function encodeDelimited
   * @memberof Set
   * @static
   * @param {ISet} message Set message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Set.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a Set message from the specified reader or buffer.
   * @function decode
   * @memberof Set
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {Set} Set
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Set.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.Set();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (!(message.items && message.items.length)) message.items = [];
          message.items.push(reader.bytes());
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes a Set message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof Set
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {Set} Set
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Set.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a Set message.
   * @function verify
   * @memberof Set
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  Set.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected';
    if (message.items != null && message.hasOwnProperty('items')) {
      if (!Array.isArray(message.items)) return 'items: array expected';
      for (var i = 0; i < message.items.length; ++i)
        if (
          !(
            (message.items[i] && typeof message.items[i].length === 'number') ||
            $util.isString(message.items[i])
          )
        )
          return 'items: buffer[] expected';
    }
    return null;
  };

  /**
   * Creates a Set message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof Set
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {Set} Set
   */
  Set.fromObject = function fromObject(object) {
    if (object instanceof $root.Set) return object;
    var message = new $root.Set();
    if (object.items) {
      if (!Array.isArray(object.items))
        throw TypeError('.Set.items: array expected');
      message.items = [];
      for (var i = 0; i < object.items.length; ++i)
        if (typeof object.items[i] === 'string')
          $util.base64.decode(
            object.items[i],
            (message.items[i] = $util.newBuffer(
              $util.base64.length(object.items[i])
            )),
            0
          );
        else if (object.items[i].length >= 0)
          message.items[i] = object.items[i];
    }
    return message;
  };

  /**
   * Creates a plain object from a Set message. Also converts values to other types if specified.
   * @function toObject
   * @memberof Set
   * @static
   * @param {Set} message Set
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  Set.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.arrays || options.defaults) object.items = [];
    if (message.items && message.items.length) {
      object.items = [];
      for (var j = 0; j < message.items.length; ++j)
        object.items[j] =
          options.bytes === String
            ? $util.base64.encode(message.items[j], 0, message.items[j].length)
            : options.bytes === Array
            ? Array.prototype.slice.call(message.items[j])
            : message.items[j];
    }
    return object;
  };

  /**
   * Converts this Set to JSON.
   * @function toJSON
   * @memberof Set
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  Set.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for Set
   * @function getTypeUrl
   * @memberof Set
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  Set.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/Set';
  };

  return Set;
})();

$root.Dictionary = (function () {
  /**
   * Properties of a Dictionary.
   * @exports IDictionary
   * @interface IDictionary
   * @property {Array.<IDictionaryEntry>|null} [entries] Dictionary entries
   */

  /**
   * Constructs a new Dictionary.
   * @exports Dictionary
   * @classdesc Represents a Dictionary.
   * @implements IDictionary
   * @constructor
   * @param {IDictionary=} [properties] Properties to set
   */
  function Dictionary(properties) {
    this.entries = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * Dictionary entries.
   * @member {Array.<IDictionaryEntry>} entries
   * @memberof Dictionary
   * @instance
   */
  Dictionary.prototype.entries = $util.emptyArray;

  /**
   * Creates a new Dictionary instance using the specified properties.
   * @function create
   * @memberof Dictionary
   * @static
   * @param {IDictionary=} [properties] Properties to set
   * @returns {Dictionary} Dictionary instance
   */
  Dictionary.create = function create(properties) {
    return new Dictionary(properties);
  };

  /**
   * Encodes the specified Dictionary message. Does not implicitly {@link Dictionary.verify|verify} messages.
   * @function encode
   * @memberof Dictionary
   * @static
   * @param {IDictionary} message Dictionary message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Dictionary.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.entries != null && message.entries.length)
      for (var i = 0; i < message.entries.length; ++i)
        $root.DictionaryEntry.encode(
          message.entries[i],
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
    return writer;
  };

  /**
   * Encodes the specified Dictionary message, length delimited. Does not implicitly {@link Dictionary.verify|verify} messages.
   * @function encodeDelimited
   * @memberof Dictionary
   * @static
   * @param {IDictionary} message Dictionary message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Dictionary.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a Dictionary message from the specified reader or buffer.
   * @function decode
   * @memberof Dictionary
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {Dictionary} Dictionary
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Dictionary.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.Dictionary();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (!(message.entries && message.entries.length))
            message.entries = [];
          message.entries.push(
            $root.DictionaryEntry.decode(reader, reader.uint32())
          );
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes a Dictionary message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof Dictionary
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {Dictionary} Dictionary
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Dictionary.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a Dictionary message.
   * @function verify
   * @memberof Dictionary
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  Dictionary.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected';
    if (message.entries != null && message.hasOwnProperty('entries')) {
      if (!Array.isArray(message.entries)) return 'entries: array expected';
      for (var i = 0; i < message.entries.length; ++i) {
        var error = $root.DictionaryEntry.verify(message.entries[i]);
        if (error) return 'entries.' + error;
      }
    }
    return null;
  };

  /**
   * Creates a Dictionary message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof Dictionary
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {Dictionary} Dictionary
   */
  Dictionary.fromObject = function fromObject(object) {
    if (object instanceof $root.Dictionary) return object;
    var message = new $root.Dictionary();
    if (object.entries) {
      if (!Array.isArray(object.entries))
        throw TypeError('.Dictionary.entries: array expected');
      message.entries = [];
      for (var i = 0; i < object.entries.length; ++i) {
        if (typeof object.entries[i] !== 'object')
          throw TypeError('.Dictionary.entries: object expected');
        message.entries[i] = $root.DictionaryEntry.fromObject(
          object.entries[i]
        );
      }
    }
    return message;
  };

  /**
   * Creates a plain object from a Dictionary message. Also converts values to other types if specified.
   * @function toObject
   * @memberof Dictionary
   * @static
   * @param {Dictionary} message Dictionary
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  Dictionary.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.arrays || options.defaults) object.entries = [];
    if (message.entries && message.entries.length) {
      object.entries = [];
      for (var j = 0; j < message.entries.length; ++j)
        object.entries[j] = $root.DictionaryEntry.toObject(
          message.entries[j],
          options
        );
    }
    return object;
  };

  /**
   * Converts this Dictionary to JSON.
   * @function toJSON
   * @memberof Dictionary
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  Dictionary.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for Dictionary
   * @function getTypeUrl
   * @memberof Dictionary
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  Dictionary.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/Dictionary';
  };

  return Dictionary;
})();

$root.DictionaryEntry = (function () {
  /**
   * Properties of a DictionaryEntry.
   * @exports IDictionaryEntry
   * @interface IDictionaryEntry
   * @property {Uint8Array|null} [key] DictionaryEntry key
   * @property {Uint8Array|null} [value] DictionaryEntry value
   */

  /**
   * Constructs a new DictionaryEntry.
   * @exports DictionaryEntry
   * @classdesc Represents a DictionaryEntry.
   * @implements IDictionaryEntry
   * @constructor
   * @param {IDictionaryEntry=} [properties] Properties to set
   */
  function DictionaryEntry(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * DictionaryEntry key.
   * @member {Uint8Array} key
   * @memberof DictionaryEntry
   * @instance
   */
  DictionaryEntry.prototype.key = $util.newBuffer([]);

  /**
   * DictionaryEntry value.
   * @member {Uint8Array} value
   * @memberof DictionaryEntry
   * @instance
   */
  DictionaryEntry.prototype.value = $util.newBuffer([]);

  /**
   * Creates a new DictionaryEntry instance using the specified properties.
   * @function create
   * @memberof DictionaryEntry
   * @static
   * @param {IDictionaryEntry=} [properties] Properties to set
   * @returns {DictionaryEntry} DictionaryEntry instance
   */
  DictionaryEntry.create = function create(properties) {
    return new DictionaryEntry(properties);
  };

  /**
   * Encodes the specified DictionaryEntry message. Does not implicitly {@link DictionaryEntry.verify|verify} messages.
   * @function encode
   * @memberof DictionaryEntry
   * @static
   * @param {IDictionaryEntry} message DictionaryEntry message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  DictionaryEntry.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.key != null && Object.hasOwnProperty.call(message, 'key'))
      writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.key);
    if (message.value != null && Object.hasOwnProperty.call(message, 'value'))
      writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.value);
    return writer;
  };

  /**
   * Encodes the specified DictionaryEntry message, length delimited. Does not implicitly {@link DictionaryEntry.verify|verify} messages.
   * @function encodeDelimited
   * @memberof DictionaryEntry
   * @static
   * @param {IDictionaryEntry} message DictionaryEntry message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  DictionaryEntry.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a DictionaryEntry message from the specified reader or buffer.
   * @function decode
   * @memberof DictionaryEntry
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {DictionaryEntry} DictionaryEntry
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  DictionaryEntry.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.DictionaryEntry();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          message.key = reader.bytes();
          break;
        }
        case 2: {
          message.value = reader.bytes();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes a DictionaryEntry message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof DictionaryEntry
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {DictionaryEntry} DictionaryEntry
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  DictionaryEntry.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a DictionaryEntry message.
   * @function verify
   * @memberof DictionaryEntry
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  DictionaryEntry.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected';
    if (message.key != null && message.hasOwnProperty('key'))
      if (
        !(
          (message.key && typeof message.key.length === 'number') ||
          $util.isString(message.key)
        )
      )
        return 'key: buffer expected';
    if (message.value != null && message.hasOwnProperty('value'))
      if (
        !(
          (message.value && typeof message.value.length === 'number') ||
          $util.isString(message.value)
        )
      )
        return 'value: buffer expected';
    return null;
  };

  /**
   * Creates a DictionaryEntry message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof DictionaryEntry
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {DictionaryEntry} DictionaryEntry
   */
  DictionaryEntry.fromObject = function fromObject(object) {
    if (object instanceof $root.DictionaryEntry) return object;
    var message = new $root.DictionaryEntry();
    if (object.key != null)
      if (typeof object.key === 'string')
        $util.base64.decode(
          object.key,
          (message.key = $util.newBuffer($util.base64.length(object.key))),
          0
        );
      else if (object.key.length >= 0) message.key = object.key;
    if (object.value != null)
      if (typeof object.value === 'string')
        $util.base64.decode(
          object.value,
          (message.value = $util.newBuffer($util.base64.length(object.value))),
          0
        );
      else if (object.value.length >= 0) message.value = object.value;
    return message;
  };

  /**
   * Creates a plain object from a DictionaryEntry message. Also converts values to other types if specified.
   * @function toObject
   * @memberof DictionaryEntry
   * @static
   * @param {DictionaryEntry} message DictionaryEntry
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  DictionaryEntry.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.defaults) {
      if (options.bytes === String) object.key = '';
      else {
        object.key = [];
        if (options.bytes !== Array) object.key = $util.newBuffer(object.key);
      }
      if (options.bytes === String) object.value = '';
      else {
        object.value = [];
        if (options.bytes !== Array)
          object.value = $util.newBuffer(object.value);
      }
    }
    if (message.key != null && message.hasOwnProperty('key'))
      object.key =
        options.bytes === String
          ? $util.base64.encode(message.key, 0, message.key.length)
          : options.bytes === Array
          ? Array.prototype.slice.call(message.key)
          : message.key;
    if (message.value != null && message.hasOwnProperty('value'))
      object.value =
        options.bytes === String
          ? $util.base64.encode(message.value, 0, message.value.length)
          : options.bytes === Array
          ? Array.prototype.slice.call(message.value)
          : message.value;
    return object;
  };

  /**
   * Converts this DictionaryEntry to JSON.
   * @function toJSON
   * @memberof DictionaryEntry
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  DictionaryEntry.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for DictionaryEntry
   * @function getTypeUrl
   * @memberof DictionaryEntry
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  DictionaryEntry.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/DictionaryEntry';
  };

  return DictionaryEntry;
})();

$root.Stream = (function () {
  /**
   * Properties of a Stream.
   * @exports IStream
   * @interface IStream
   * @property {number|Long|null} [id] Stream id
   */

  /**
   * Constructs a new Stream.
   * @exports Stream
   * @classdesc Represents a Stream.
   * @implements IStream
   * @constructor
   * @param {IStream=} [properties] Properties to set
   */
  function Stream(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * Stream id.
   * @member {number|Long} id
   * @memberof Stream
   * @instance
   */
  Stream.prototype.id = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

  /**
   * Creates a new Stream instance using the specified properties.
   * @function create
   * @memberof Stream
   * @static
   * @param {IStream=} [properties] Properties to set
   * @returns {Stream} Stream instance
   */
  Stream.create = function create(properties) {
    return new Stream(properties);
  };

  /**
   * Encodes the specified Stream message. Does not implicitly {@link Stream.verify|verify} messages.
   * @function encode
   * @memberof Stream
   * @static
   * @param {IStream} message Stream message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Stream.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
      writer.uint32(/* id 1, wireType 0 =*/ 8).uint64(message.id);
    return writer;
  };

  /**
   * Encodes the specified Stream message, length delimited. Does not implicitly {@link Stream.verify|verify} messages.
   * @function encodeDelimited
   * @memberof Stream
   * @static
   * @param {IStream} message Stream message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Stream.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a Stream message from the specified reader or buffer.
   * @function decode
   * @memberof Stream
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {Stream} Stream
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Stream.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.Stream();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          message.id = reader.uint64();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes a Stream message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof Stream
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {Stream} Stream
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Stream.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a Stream message.
   * @function verify
   * @memberof Stream
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  Stream.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected';
    if (message.id != null && message.hasOwnProperty('id'))
      if (
        !$util.isInteger(message.id) &&
        !(
          message.id &&
          $util.isInteger(message.id.low) &&
          $util.isInteger(message.id.high)
        )
      )
        return 'id: integer|Long expected';
    return null;
  };

  /**
   * Creates a Stream message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof Stream
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {Stream} Stream
   */
  Stream.fromObject = function fromObject(object) {
    if (object instanceof $root.Stream) return object;
    var message = new $root.Stream();
    if (object.id != null)
      if ($util.Long)
        (message.id = $util.Long.fromValue(object.id)).unsigned = true;
      else if (typeof object.id === 'string')
        message.id = parseInt(object.id, 10);
      else if (typeof object.id === 'number') message.id = object.id;
      else if (typeof object.id === 'object')
        message.id = new $util.LongBits(
          object.id.low >>> 0,
          object.id.high >>> 0
        ).toNumber(true);
    return message;
  };

  /**
   * Creates a plain object from a Stream message. Also converts values to other types if specified.
   * @function toObject
   * @memberof Stream
   * @static
   * @param {Stream} message Stream
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  Stream.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.defaults)
      if ($util.Long) {
        var long = new $util.Long(0, 0, true);
        object.id =
          options.longs === String
            ? long.toString()
            : options.longs === Number
            ? long.toNumber()
            : long;
      } else object.id = options.longs === String ? '0' : 0;
    if (message.id != null && message.hasOwnProperty('id'))
      if (typeof message.id === 'number')
        object.id = options.longs === String ? String(message.id) : message.id;
      else
        object.id =
          options.longs === String
            ? $util.Long.prototype.toString.call(message.id)
            : options.longs === Number
            ? new $util.LongBits(
                message.id.low >>> 0,
                message.id.high >>> 0
              ).toNumber(true)
            : message.id;
    return object;
  };

  /**
   * Converts this Stream to JSON.
   * @function toJSON
   * @memberof Stream
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  Stream.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for Stream
   * @function getTypeUrl
   * @memberof Stream
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  Stream.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/Stream';
  };

  return Stream;
})();

$root.Event = (function () {
  /**
   * Properties of an Event.
   * @exports IEvent
   * @interface IEvent
   * @property {IStream|null} [stream] Event stream
   */

  /**
   * Constructs a new Event.
   * @exports Event
   * @classdesc Represents an Event.
   * @implements IEvent
   * @constructor
   * @param {IEvent=} [properties] Properties to set
   */
  function Event(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * Event stream.
   * @member {IStream|null|undefined} stream
   * @memberof Event
   * @instance
   */
  Event.prototype.stream = null;

  /**
   * Creates a new Event instance using the specified properties.
   * @function create
   * @memberof Event
   * @static
   * @param {IEvent=} [properties] Properties to set
   * @returns {Event} Event instance
   */
  Event.create = function create(properties) {
    return new Event(properties);
  };

  /**
   * Encodes the specified Event message. Does not implicitly {@link Event.verify|verify} messages.
   * @function encode
   * @memberof Event
   * @static
   * @param {IEvent} message Event message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Event.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.stream != null && Object.hasOwnProperty.call(message, 'stream'))
      $root.Stream.encode(
        message.stream,
        writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
      ).ldelim();
    return writer;
  };

  /**
   * Encodes the specified Event message, length delimited. Does not implicitly {@link Event.verify|verify} messages.
   * @function encodeDelimited
   * @memberof Event
   * @static
   * @param {IEvent} message Event message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Event.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes an Event message from the specified reader or buffer.
   * @function decode
   * @memberof Event
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {Event} Event
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Event.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.Event();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          message.stream = $root.Stream.decode(reader, reader.uint32());
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes an Event message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof Event
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {Event} Event
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Event.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies an Event message.
   * @function verify
   * @memberof Event
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  Event.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected';
    if (message.stream != null && message.hasOwnProperty('stream')) {
      var error = $root.Stream.verify(message.stream);
      if (error) return 'stream.' + error;
    }
    return null;
  };

  /**
   * Creates an Event message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof Event
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {Event} Event
   */
  Event.fromObject = function fromObject(object) {
    if (object instanceof $root.Event) return object;
    var message = new $root.Event();
    if (object.stream != null) {
      if (typeof object.stream !== 'object')
        throw TypeError('.Event.stream: object expected');
      message.stream = $root.Stream.fromObject(object.stream);
    }
    return message;
  };

  /**
   * Creates a plain object from an Event message. Also converts values to other types if specified.
   * @function toObject
   * @memberof Event
   * @static
   * @param {Event} message Event
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  Event.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.defaults) object.stream = null;
    if (message.stream != null && message.hasOwnProperty('stream'))
      object.stream = $root.Stream.toObject(message.stream, options);
    return object;
  };

  /**
   * Converts this Event to JSON.
   * @function toJSON
   * @memberof Event
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  Event.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for Event
   * @function getTypeUrl
   * @memberof Event
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  Event.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/Event';
  };

  return Event;
})();

$root.Status = (function () {
  /**
   * Properties of a Status.
   * @exports IStatus
   * @interface IStatus
   * @property {string|null} [version] Status version
   * @property {number|Long|null} [bytesRead] Status bytesRead
   * @property {number|Long|null} [bytesWritten] Status bytesWritten
   * @property {number|null} [bytesReadRate] Status bytesReadRate
   * @property {number|null} [bytesWrittenRate] Status bytesWrittenRate
   * @property {number|Long|null} [rpcsExecuted] Status rpcsExecuted
   * @property {number|null} [rpcRate] Status rpcRate
   * @property {boolean|null} [oneRpcPerUpdate] Status oneRpcPerUpdate
   * @property {number|null} [maxTimePerUpdate] Status maxTimePerUpdate
   * @property {boolean|null} [adaptiveRateControl] Status adaptiveRateControl
   * @property {boolean|null} [blockingRecv] Status blockingRecv
   * @property {number|null} [recvTimeout] Status recvTimeout
   * @property {number|null} [timePerRpcUpdate] Status timePerRpcUpdate
   * @property {number|null} [pollTimePerRpcUpdate] Status pollTimePerRpcUpdate
   * @property {number|null} [execTimePerRpcUpdate] Status execTimePerRpcUpdate
   * @property {number|null} [streamRpcs] Status streamRpcs
   * @property {number|Long|null} [streamRpcsExecuted] Status streamRpcsExecuted
   * @property {number|null} [streamRpcRate] Status streamRpcRate
   * @property {number|null} [timePerStreamUpdate] Status timePerStreamUpdate
   */

  /**
   * Constructs a new Status.
   * @exports Status
   * @classdesc Represents a Status.
   * @implements IStatus
   * @constructor
   * @param {IStatus=} [properties] Properties to set
   */
  function Status(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * Status version.
   * @member {string} version
   * @memberof Status
   * @instance
   */
  Status.prototype.version = '';

  /**
   * Status bytesRead.
   * @member {number|Long} bytesRead
   * @memberof Status
   * @instance
   */
  Status.prototype.bytesRead = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

  /**
   * Status bytesWritten.
   * @member {number|Long} bytesWritten
   * @memberof Status
   * @instance
   */
  Status.prototype.bytesWritten = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * Status bytesReadRate.
   * @member {number} bytesReadRate
   * @memberof Status
   * @instance
   */
  Status.prototype.bytesReadRate = 0;

  /**
   * Status bytesWrittenRate.
   * @member {number} bytesWrittenRate
   * @memberof Status
   * @instance
   */
  Status.prototype.bytesWrittenRate = 0;

  /**
   * Status rpcsExecuted.
   * @member {number|Long} rpcsExecuted
   * @memberof Status
   * @instance
   */
  Status.prototype.rpcsExecuted = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * Status rpcRate.
   * @member {number} rpcRate
   * @memberof Status
   * @instance
   */
  Status.prototype.rpcRate = 0;

  /**
   * Status oneRpcPerUpdate.
   * @member {boolean} oneRpcPerUpdate
   * @memberof Status
   * @instance
   */
  Status.prototype.oneRpcPerUpdate = false;

  /**
   * Status maxTimePerUpdate.
   * @member {number} maxTimePerUpdate
   * @memberof Status
   * @instance
   */
  Status.prototype.maxTimePerUpdate = 0;

  /**
   * Status adaptiveRateControl.
   * @member {boolean} adaptiveRateControl
   * @memberof Status
   * @instance
   */
  Status.prototype.adaptiveRateControl = false;

  /**
   * Status blockingRecv.
   * @member {boolean} blockingRecv
   * @memberof Status
   * @instance
   */
  Status.prototype.blockingRecv = false;

  /**
   * Status recvTimeout.
   * @member {number} recvTimeout
   * @memberof Status
   * @instance
   */
  Status.prototype.recvTimeout = 0;

  /**
   * Status timePerRpcUpdate.
   * @member {number} timePerRpcUpdate
   * @memberof Status
   * @instance
   */
  Status.prototype.timePerRpcUpdate = 0;

  /**
   * Status pollTimePerRpcUpdate.
   * @member {number} pollTimePerRpcUpdate
   * @memberof Status
   * @instance
   */
  Status.prototype.pollTimePerRpcUpdate = 0;

  /**
   * Status execTimePerRpcUpdate.
   * @member {number} execTimePerRpcUpdate
   * @memberof Status
   * @instance
   */
  Status.prototype.execTimePerRpcUpdate = 0;

  /**
   * Status streamRpcs.
   * @member {number} streamRpcs
   * @memberof Status
   * @instance
   */
  Status.prototype.streamRpcs = 0;

  /**
   * Status streamRpcsExecuted.
   * @member {number|Long} streamRpcsExecuted
   * @memberof Status
   * @instance
   */
  Status.prototype.streamRpcsExecuted = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * Status streamRpcRate.
   * @member {number} streamRpcRate
   * @memberof Status
   * @instance
   */
  Status.prototype.streamRpcRate = 0;

  /**
   * Status timePerStreamUpdate.
   * @member {number} timePerStreamUpdate
   * @memberof Status
   * @instance
   */
  Status.prototype.timePerStreamUpdate = 0;

  /**
   * Creates a new Status instance using the specified properties.
   * @function create
   * @memberof Status
   * @static
   * @param {IStatus=} [properties] Properties to set
   * @returns {Status} Status instance
   */
  Status.create = function create(properties) {
    return new Status(properties);
  };

  /**
   * Encodes the specified Status message. Does not implicitly {@link Status.verify|verify} messages.
   * @function encode
   * @memberof Status
   * @static
   * @param {IStatus} message Status message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Status.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.version != null &&
      Object.hasOwnProperty.call(message, 'version')
    )
      writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.version);
    if (
      message.bytesRead != null &&
      Object.hasOwnProperty.call(message, 'bytesRead')
    )
      writer.uint32(/* id 2, wireType 0 =*/ 16).uint64(message.bytesRead);
    if (
      message.bytesWritten != null &&
      Object.hasOwnProperty.call(message, 'bytesWritten')
    )
      writer.uint32(/* id 3, wireType 0 =*/ 24).uint64(message.bytesWritten);
    if (
      message.bytesReadRate != null &&
      Object.hasOwnProperty.call(message, 'bytesReadRate')
    )
      writer.uint32(/* id 4, wireType 5 =*/ 37).float(message.bytesReadRate);
    if (
      message.bytesWrittenRate != null &&
      Object.hasOwnProperty.call(message, 'bytesWrittenRate')
    )
      writer.uint32(/* id 5, wireType 5 =*/ 45).float(message.bytesWrittenRate);
    if (
      message.rpcsExecuted != null &&
      Object.hasOwnProperty.call(message, 'rpcsExecuted')
    )
      writer.uint32(/* id 6, wireType 0 =*/ 48).uint64(message.rpcsExecuted);
    if (
      message.rpcRate != null &&
      Object.hasOwnProperty.call(message, 'rpcRate')
    )
      writer.uint32(/* id 7, wireType 5 =*/ 61).float(message.rpcRate);
    if (
      message.oneRpcPerUpdate != null &&
      Object.hasOwnProperty.call(message, 'oneRpcPerUpdate')
    )
      writer.uint32(/* id 8, wireType 0 =*/ 64).bool(message.oneRpcPerUpdate);
    if (
      message.maxTimePerUpdate != null &&
      Object.hasOwnProperty.call(message, 'maxTimePerUpdate')
    )
      writer
        .uint32(/* id 9, wireType 0 =*/ 72)
        .uint32(message.maxTimePerUpdate);
    if (
      message.adaptiveRateControl != null &&
      Object.hasOwnProperty.call(message, 'adaptiveRateControl')
    )
      writer
        .uint32(/* id 10, wireType 0 =*/ 80)
        .bool(message.adaptiveRateControl);
    if (
      message.blockingRecv != null &&
      Object.hasOwnProperty.call(message, 'blockingRecv')
    )
      writer.uint32(/* id 11, wireType 0 =*/ 88).bool(message.blockingRecv);
    if (
      message.recvTimeout != null &&
      Object.hasOwnProperty.call(message, 'recvTimeout')
    )
      writer.uint32(/* id 12, wireType 0 =*/ 96).uint32(message.recvTimeout);
    if (
      message.timePerRpcUpdate != null &&
      Object.hasOwnProperty.call(message, 'timePerRpcUpdate')
    )
      writer
        .uint32(/* id 13, wireType 5 =*/ 109)
        .float(message.timePerRpcUpdate);
    if (
      message.pollTimePerRpcUpdate != null &&
      Object.hasOwnProperty.call(message, 'pollTimePerRpcUpdate')
    )
      writer
        .uint32(/* id 14, wireType 5 =*/ 117)
        .float(message.pollTimePerRpcUpdate);
    if (
      message.execTimePerRpcUpdate != null &&
      Object.hasOwnProperty.call(message, 'execTimePerRpcUpdate')
    )
      writer
        .uint32(/* id 15, wireType 5 =*/ 125)
        .float(message.execTimePerRpcUpdate);
    if (
      message.streamRpcs != null &&
      Object.hasOwnProperty.call(message, 'streamRpcs')
    )
      writer.uint32(/* id 16, wireType 0 =*/ 128).uint32(message.streamRpcs);
    if (
      message.streamRpcsExecuted != null &&
      Object.hasOwnProperty.call(message, 'streamRpcsExecuted')
    )
      writer
        .uint32(/* id 17, wireType 0 =*/ 136)
        .uint64(message.streamRpcsExecuted);
    if (
      message.streamRpcRate != null &&
      Object.hasOwnProperty.call(message, 'streamRpcRate')
    )
      writer.uint32(/* id 18, wireType 5 =*/ 149).float(message.streamRpcRate);
    if (
      message.timePerStreamUpdate != null &&
      Object.hasOwnProperty.call(message, 'timePerStreamUpdate')
    )
      writer
        .uint32(/* id 19, wireType 5 =*/ 157)
        .float(message.timePerStreamUpdate);
    return writer;
  };

  /**
   * Encodes the specified Status message, length delimited. Does not implicitly {@link Status.verify|verify} messages.
   * @function encodeDelimited
   * @memberof Status
   * @static
   * @param {IStatus} message Status message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Status.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a Status message from the specified reader or buffer.
   * @function decode
   * @memberof Status
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {Status} Status
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Status.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.Status();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          message.version = reader.string();
          break;
        }
        case 2: {
          message.bytesRead = reader.uint64();
          break;
        }
        case 3: {
          message.bytesWritten = reader.uint64();
          break;
        }
        case 4: {
          message.bytesReadRate = reader.float();
          break;
        }
        case 5: {
          message.bytesWrittenRate = reader.float();
          break;
        }
        case 6: {
          message.rpcsExecuted = reader.uint64();
          break;
        }
        case 7: {
          message.rpcRate = reader.float();
          break;
        }
        case 8: {
          message.oneRpcPerUpdate = reader.bool();
          break;
        }
        case 9: {
          message.maxTimePerUpdate = reader.uint32();
          break;
        }
        case 10: {
          message.adaptiveRateControl = reader.bool();
          break;
        }
        case 11: {
          message.blockingRecv = reader.bool();
          break;
        }
        case 12: {
          message.recvTimeout = reader.uint32();
          break;
        }
        case 13: {
          message.timePerRpcUpdate = reader.float();
          break;
        }
        case 14: {
          message.pollTimePerRpcUpdate = reader.float();
          break;
        }
        case 15: {
          message.execTimePerRpcUpdate = reader.float();
          break;
        }
        case 16: {
          message.streamRpcs = reader.uint32();
          break;
        }
        case 17: {
          message.streamRpcsExecuted = reader.uint64();
          break;
        }
        case 18: {
          message.streamRpcRate = reader.float();
          break;
        }
        case 19: {
          message.timePerStreamUpdate = reader.float();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes a Status message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof Status
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {Status} Status
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Status.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a Status message.
   * @function verify
   * @memberof Status
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  Status.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected';
    if (message.version != null && message.hasOwnProperty('version'))
      if (!$util.isString(message.version)) return 'version: string expected';
    if (message.bytesRead != null && message.hasOwnProperty('bytesRead'))
      if (
        !$util.isInteger(message.bytesRead) &&
        !(
          message.bytesRead &&
          $util.isInteger(message.bytesRead.low) &&
          $util.isInteger(message.bytesRead.high)
        )
      )
        return 'bytesRead: integer|Long expected';
    if (message.bytesWritten != null && message.hasOwnProperty('bytesWritten'))
      if (
        !$util.isInteger(message.bytesWritten) &&
        !(
          message.bytesWritten &&
          $util.isInteger(message.bytesWritten.low) &&
          $util.isInteger(message.bytesWritten.high)
        )
      )
        return 'bytesWritten: integer|Long expected';
    if (
      message.bytesReadRate != null &&
      message.hasOwnProperty('bytesReadRate')
    )
      if (typeof message.bytesReadRate !== 'number')
        return 'bytesReadRate: number expected';
    if (
      message.bytesWrittenRate != null &&
      message.hasOwnProperty('bytesWrittenRate')
    )
      if (typeof message.bytesWrittenRate !== 'number')
        return 'bytesWrittenRate: number expected';
    if (message.rpcsExecuted != null && message.hasOwnProperty('rpcsExecuted'))
      if (
        !$util.isInteger(message.rpcsExecuted) &&
        !(
          message.rpcsExecuted &&
          $util.isInteger(message.rpcsExecuted.low) &&
          $util.isInteger(message.rpcsExecuted.high)
        )
      )
        return 'rpcsExecuted: integer|Long expected';
    if (message.rpcRate != null && message.hasOwnProperty('rpcRate'))
      if (typeof message.rpcRate !== 'number')
        return 'rpcRate: number expected';
    if (
      message.oneRpcPerUpdate != null &&
      message.hasOwnProperty('oneRpcPerUpdate')
    )
      if (typeof message.oneRpcPerUpdate !== 'boolean')
        return 'oneRpcPerUpdate: boolean expected';
    if (
      message.maxTimePerUpdate != null &&
      message.hasOwnProperty('maxTimePerUpdate')
    )
      if (!$util.isInteger(message.maxTimePerUpdate))
        return 'maxTimePerUpdate: integer expected';
    if (
      message.adaptiveRateControl != null &&
      message.hasOwnProperty('adaptiveRateControl')
    )
      if (typeof message.adaptiveRateControl !== 'boolean')
        return 'adaptiveRateControl: boolean expected';
    if (message.blockingRecv != null && message.hasOwnProperty('blockingRecv'))
      if (typeof message.blockingRecv !== 'boolean')
        return 'blockingRecv: boolean expected';
    if (message.recvTimeout != null && message.hasOwnProperty('recvTimeout'))
      if (!$util.isInteger(message.recvTimeout))
        return 'recvTimeout: integer expected';
    if (
      message.timePerRpcUpdate != null &&
      message.hasOwnProperty('timePerRpcUpdate')
    )
      if (typeof message.timePerRpcUpdate !== 'number')
        return 'timePerRpcUpdate: number expected';
    if (
      message.pollTimePerRpcUpdate != null &&
      message.hasOwnProperty('pollTimePerRpcUpdate')
    )
      if (typeof message.pollTimePerRpcUpdate !== 'number')
        return 'pollTimePerRpcUpdate: number expected';
    if (
      message.execTimePerRpcUpdate != null &&
      message.hasOwnProperty('execTimePerRpcUpdate')
    )
      if (typeof message.execTimePerRpcUpdate !== 'number')
        return 'execTimePerRpcUpdate: number expected';
    if (message.streamRpcs != null && message.hasOwnProperty('streamRpcs'))
      if (!$util.isInteger(message.streamRpcs))
        return 'streamRpcs: integer expected';
    if (
      message.streamRpcsExecuted != null &&
      message.hasOwnProperty('streamRpcsExecuted')
    )
      if (
        !$util.isInteger(message.streamRpcsExecuted) &&
        !(
          message.streamRpcsExecuted &&
          $util.isInteger(message.streamRpcsExecuted.low) &&
          $util.isInteger(message.streamRpcsExecuted.high)
        )
      )
        return 'streamRpcsExecuted: integer|Long expected';
    if (
      message.streamRpcRate != null &&
      message.hasOwnProperty('streamRpcRate')
    )
      if (typeof message.streamRpcRate !== 'number')
        return 'streamRpcRate: number expected';
    if (
      message.timePerStreamUpdate != null &&
      message.hasOwnProperty('timePerStreamUpdate')
    )
      if (typeof message.timePerStreamUpdate !== 'number')
        return 'timePerStreamUpdate: number expected';
    return null;
  };

  /**
   * Creates a Status message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof Status
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {Status} Status
   */
  Status.fromObject = function fromObject(object) {
    if (object instanceof $root.Status) return object;
    var message = new $root.Status();
    if (object.version != null) message.version = String(object.version);
    if (object.bytesRead != null)
      if ($util.Long)
        (message.bytesRead = $util.Long.fromValue(
          object.bytesRead
        )).unsigned = true;
      else if (typeof object.bytesRead === 'string')
        message.bytesRead = parseInt(object.bytesRead, 10);
      else if (typeof object.bytesRead === 'number')
        message.bytesRead = object.bytesRead;
      else if (typeof object.bytesRead === 'object')
        message.bytesRead = new $util.LongBits(
          object.bytesRead.low >>> 0,
          object.bytesRead.high >>> 0
        ).toNumber(true);
    if (object.bytesWritten != null)
      if ($util.Long)
        (message.bytesWritten = $util.Long.fromValue(
          object.bytesWritten
        )).unsigned = true;
      else if (typeof object.bytesWritten === 'string')
        message.bytesWritten = parseInt(object.bytesWritten, 10);
      else if (typeof object.bytesWritten === 'number')
        message.bytesWritten = object.bytesWritten;
      else if (typeof object.bytesWritten === 'object')
        message.bytesWritten = new $util.LongBits(
          object.bytesWritten.low >>> 0,
          object.bytesWritten.high >>> 0
        ).toNumber(true);
    if (object.bytesReadRate != null)
      message.bytesReadRate = Number(object.bytesReadRate);
    if (object.bytesWrittenRate != null)
      message.bytesWrittenRate = Number(object.bytesWrittenRate);
    if (object.rpcsExecuted != null)
      if ($util.Long)
        (message.rpcsExecuted = $util.Long.fromValue(
          object.rpcsExecuted
        )).unsigned = true;
      else if (typeof object.rpcsExecuted === 'string')
        message.rpcsExecuted = parseInt(object.rpcsExecuted, 10);
      else if (typeof object.rpcsExecuted === 'number')
        message.rpcsExecuted = object.rpcsExecuted;
      else if (typeof object.rpcsExecuted === 'object')
        message.rpcsExecuted = new $util.LongBits(
          object.rpcsExecuted.low >>> 0,
          object.rpcsExecuted.high >>> 0
        ).toNumber(true);
    if (object.rpcRate != null) message.rpcRate = Number(object.rpcRate);
    if (object.oneRpcPerUpdate != null)
      message.oneRpcPerUpdate = Boolean(object.oneRpcPerUpdate);
    if (object.maxTimePerUpdate != null)
      message.maxTimePerUpdate = object.maxTimePerUpdate >>> 0;
    if (object.adaptiveRateControl != null)
      message.adaptiveRateControl = Boolean(object.adaptiveRateControl);
    if (object.blockingRecv != null)
      message.blockingRecv = Boolean(object.blockingRecv);
    if (object.recvTimeout != null)
      message.recvTimeout = object.recvTimeout >>> 0;
    if (object.timePerRpcUpdate != null)
      message.timePerRpcUpdate = Number(object.timePerRpcUpdate);
    if (object.pollTimePerRpcUpdate != null)
      message.pollTimePerRpcUpdate = Number(object.pollTimePerRpcUpdate);
    if (object.execTimePerRpcUpdate != null)
      message.execTimePerRpcUpdate = Number(object.execTimePerRpcUpdate);
    if (object.streamRpcs != null) message.streamRpcs = object.streamRpcs >>> 0;
    if (object.streamRpcsExecuted != null)
      if ($util.Long)
        (message.streamRpcsExecuted = $util.Long.fromValue(
          object.streamRpcsExecuted
        )).unsigned = true;
      else if (typeof object.streamRpcsExecuted === 'string')
        message.streamRpcsExecuted = parseInt(object.streamRpcsExecuted, 10);
      else if (typeof object.streamRpcsExecuted === 'number')
        message.streamRpcsExecuted = object.streamRpcsExecuted;
      else if (typeof object.streamRpcsExecuted === 'object')
        message.streamRpcsExecuted = new $util.LongBits(
          object.streamRpcsExecuted.low >>> 0,
          object.streamRpcsExecuted.high >>> 0
        ).toNumber(true);
    if (object.streamRpcRate != null)
      message.streamRpcRate = Number(object.streamRpcRate);
    if (object.timePerStreamUpdate != null)
      message.timePerStreamUpdate = Number(object.timePerStreamUpdate);
    return message;
  };

  /**
   * Creates a plain object from a Status message. Also converts values to other types if specified.
   * @function toObject
   * @memberof Status
   * @static
   * @param {Status} message Status
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  Status.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.defaults) {
      object.version = '';
      if ($util.Long) {
        var long = new $util.Long(0, 0, true);
        object.bytesRead =
          options.longs === String
            ? long.toString()
            : options.longs === Number
            ? long.toNumber()
            : long;
      } else object.bytesRead = options.longs === String ? '0' : 0;
      if ($util.Long) {
        var long = new $util.Long(0, 0, true);
        object.bytesWritten =
          options.longs === String
            ? long.toString()
            : options.longs === Number
            ? long.toNumber()
            : long;
      } else object.bytesWritten = options.longs === String ? '0' : 0;
      object.bytesReadRate = 0;
      object.bytesWrittenRate = 0;
      if ($util.Long) {
        var long = new $util.Long(0, 0, true);
        object.rpcsExecuted =
          options.longs === String
            ? long.toString()
            : options.longs === Number
            ? long.toNumber()
            : long;
      } else object.rpcsExecuted = options.longs === String ? '0' : 0;
      object.rpcRate = 0;
      object.oneRpcPerUpdate = false;
      object.maxTimePerUpdate = 0;
      object.adaptiveRateControl = false;
      object.blockingRecv = false;
      object.recvTimeout = 0;
      object.timePerRpcUpdate = 0;
      object.pollTimePerRpcUpdate = 0;
      object.execTimePerRpcUpdate = 0;
      object.streamRpcs = 0;
      if ($util.Long) {
        var long = new $util.Long(0, 0, true);
        object.streamRpcsExecuted =
          options.longs === String
            ? long.toString()
            : options.longs === Number
            ? long.toNumber()
            : long;
      } else object.streamRpcsExecuted = options.longs === String ? '0' : 0;
      object.streamRpcRate = 0;
      object.timePerStreamUpdate = 0;
    }
    if (message.version != null && message.hasOwnProperty('version'))
      object.version = message.version;
    if (message.bytesRead != null && message.hasOwnProperty('bytesRead'))
      if (typeof message.bytesRead === 'number')
        object.bytesRead =
          options.longs === String
            ? String(message.bytesRead)
            : message.bytesRead;
      else
        object.bytesRead =
          options.longs === String
            ? $util.Long.prototype.toString.call(message.bytesRead)
            : options.longs === Number
            ? new $util.LongBits(
                message.bytesRead.low >>> 0,
                message.bytesRead.high >>> 0
              ).toNumber(true)
            : message.bytesRead;
    if (message.bytesWritten != null && message.hasOwnProperty('bytesWritten'))
      if (typeof message.bytesWritten === 'number')
        object.bytesWritten =
          options.longs === String
            ? String(message.bytesWritten)
            : message.bytesWritten;
      else
        object.bytesWritten =
          options.longs === String
            ? $util.Long.prototype.toString.call(message.bytesWritten)
            : options.longs === Number
            ? new $util.LongBits(
                message.bytesWritten.low >>> 0,
                message.bytesWritten.high >>> 0
              ).toNumber(true)
            : message.bytesWritten;
    if (
      message.bytesReadRate != null &&
      message.hasOwnProperty('bytesReadRate')
    )
      object.bytesReadRate =
        options.json && !isFinite(message.bytesReadRate)
          ? String(message.bytesReadRate)
          : message.bytesReadRate;
    if (
      message.bytesWrittenRate != null &&
      message.hasOwnProperty('bytesWrittenRate')
    )
      object.bytesWrittenRate =
        options.json && !isFinite(message.bytesWrittenRate)
          ? String(message.bytesWrittenRate)
          : message.bytesWrittenRate;
    if (message.rpcsExecuted != null && message.hasOwnProperty('rpcsExecuted'))
      if (typeof message.rpcsExecuted === 'number')
        object.rpcsExecuted =
          options.longs === String
            ? String(message.rpcsExecuted)
            : message.rpcsExecuted;
      else
        object.rpcsExecuted =
          options.longs === String
            ? $util.Long.prototype.toString.call(message.rpcsExecuted)
            : options.longs === Number
            ? new $util.LongBits(
                message.rpcsExecuted.low >>> 0,
                message.rpcsExecuted.high >>> 0
              ).toNumber(true)
            : message.rpcsExecuted;
    if (message.rpcRate != null && message.hasOwnProperty('rpcRate'))
      object.rpcRate =
        options.json && !isFinite(message.rpcRate)
          ? String(message.rpcRate)
          : message.rpcRate;
    if (
      message.oneRpcPerUpdate != null &&
      message.hasOwnProperty('oneRpcPerUpdate')
    )
      object.oneRpcPerUpdate = message.oneRpcPerUpdate;
    if (
      message.maxTimePerUpdate != null &&
      message.hasOwnProperty('maxTimePerUpdate')
    )
      object.maxTimePerUpdate = message.maxTimePerUpdate;
    if (
      message.adaptiveRateControl != null &&
      message.hasOwnProperty('adaptiveRateControl')
    )
      object.adaptiveRateControl = message.adaptiveRateControl;
    if (message.blockingRecv != null && message.hasOwnProperty('blockingRecv'))
      object.blockingRecv = message.blockingRecv;
    if (message.recvTimeout != null && message.hasOwnProperty('recvTimeout'))
      object.recvTimeout = message.recvTimeout;
    if (
      message.timePerRpcUpdate != null &&
      message.hasOwnProperty('timePerRpcUpdate')
    )
      object.timePerRpcUpdate =
        options.json && !isFinite(message.timePerRpcUpdate)
          ? String(message.timePerRpcUpdate)
          : message.timePerRpcUpdate;
    if (
      message.pollTimePerRpcUpdate != null &&
      message.hasOwnProperty('pollTimePerRpcUpdate')
    )
      object.pollTimePerRpcUpdate =
        options.json && !isFinite(message.pollTimePerRpcUpdate)
          ? String(message.pollTimePerRpcUpdate)
          : message.pollTimePerRpcUpdate;
    if (
      message.execTimePerRpcUpdate != null &&
      message.hasOwnProperty('execTimePerRpcUpdate')
    )
      object.execTimePerRpcUpdate =
        options.json && !isFinite(message.execTimePerRpcUpdate)
          ? String(message.execTimePerRpcUpdate)
          : message.execTimePerRpcUpdate;
    if (message.streamRpcs != null && message.hasOwnProperty('streamRpcs'))
      object.streamRpcs = message.streamRpcs;
    if (
      message.streamRpcsExecuted != null &&
      message.hasOwnProperty('streamRpcsExecuted')
    )
      if (typeof message.streamRpcsExecuted === 'number')
        object.streamRpcsExecuted =
          options.longs === String
            ? String(message.streamRpcsExecuted)
            : message.streamRpcsExecuted;
      else
        object.streamRpcsExecuted =
          options.longs === String
            ? $util.Long.prototype.toString.call(message.streamRpcsExecuted)
            : options.longs === Number
            ? new $util.LongBits(
                message.streamRpcsExecuted.low >>> 0,
                message.streamRpcsExecuted.high >>> 0
              ).toNumber(true)
            : message.streamRpcsExecuted;
    if (
      message.streamRpcRate != null &&
      message.hasOwnProperty('streamRpcRate')
    )
      object.streamRpcRate =
        options.json && !isFinite(message.streamRpcRate)
          ? String(message.streamRpcRate)
          : message.streamRpcRate;
    if (
      message.timePerStreamUpdate != null &&
      message.hasOwnProperty('timePerStreamUpdate')
    )
      object.timePerStreamUpdate =
        options.json && !isFinite(message.timePerStreamUpdate)
          ? String(message.timePerStreamUpdate)
          : message.timePerStreamUpdate;
    return object;
  };

  /**
   * Converts this Status to JSON.
   * @function toJSON
   * @memberof Status
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  Status.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for Status
   * @function getTypeUrl
   * @memberof Status
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  Status.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/Status';
  };

  return Status;
})();

$root.MultiplexedRequest = (function () {
  /**
   * Properties of a MultiplexedRequest.
   * @exports IMultiplexedRequest
   * @interface IMultiplexedRequest
   * @property {IConnectionRequest|null} [connectionRequest] MultiplexedRequest connectionRequest
   * @property {IRequest|null} [request] MultiplexedRequest request
   */

  /**
   * Constructs a new MultiplexedRequest.
   * @exports MultiplexedRequest
   * @classdesc Represents a MultiplexedRequest.
   * @implements IMultiplexedRequest
   * @constructor
   * @param {IMultiplexedRequest=} [properties] Properties to set
   */
  function MultiplexedRequest(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * MultiplexedRequest connectionRequest.
   * @member {IConnectionRequest|null|undefined} connectionRequest
   * @memberof MultiplexedRequest
   * @instance
   */
  MultiplexedRequest.prototype.connectionRequest = null;

  /**
   * MultiplexedRequest request.
   * @member {IRequest|null|undefined} request
   * @memberof MultiplexedRequest
   * @instance
   */
  MultiplexedRequest.prototype.request = null;

  /**
   * Creates a new MultiplexedRequest instance using the specified properties.
   * @function create
   * @memberof MultiplexedRequest
   * @static
   * @param {IMultiplexedRequest=} [properties] Properties to set
   * @returns {MultiplexedRequest} MultiplexedRequest instance
   */
  MultiplexedRequest.create = function create(properties) {
    return new MultiplexedRequest(properties);
  };

  /**
   * Encodes the specified MultiplexedRequest message. Does not implicitly {@link MultiplexedRequest.verify|verify} messages.
   * @function encode
   * @memberof MultiplexedRequest
   * @static
   * @param {IMultiplexedRequest} message MultiplexedRequest message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  MultiplexedRequest.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.connectionRequest != null &&
      Object.hasOwnProperty.call(message, 'connectionRequest')
    )
      $root.ConnectionRequest.encode(
        message.connectionRequest,
        writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
      ).ldelim();
    if (
      message.request != null &&
      Object.hasOwnProperty.call(message, 'request')
    )
      $root.Request.encode(
        message.request,
        writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
      ).ldelim();
    return writer;
  };

  /**
   * Encodes the specified MultiplexedRequest message, length delimited. Does not implicitly {@link MultiplexedRequest.verify|verify} messages.
   * @function encodeDelimited
   * @memberof MultiplexedRequest
   * @static
   * @param {IMultiplexedRequest} message MultiplexedRequest message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  MultiplexedRequest.encodeDelimited = function encodeDelimited(
    message,
    writer
  ) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a MultiplexedRequest message from the specified reader or buffer.
   * @function decode
   * @memberof MultiplexedRequest
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {MultiplexedRequest} MultiplexedRequest
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  MultiplexedRequest.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.MultiplexedRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          message.connectionRequest = $root.ConnectionRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        }
        case 2: {
          message.request = $root.Request.decode(reader, reader.uint32());
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes a MultiplexedRequest message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof MultiplexedRequest
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {MultiplexedRequest} MultiplexedRequest
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  MultiplexedRequest.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a MultiplexedRequest message.
   * @function verify
   * @memberof MultiplexedRequest
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  MultiplexedRequest.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected';
    if (
      message.connectionRequest != null &&
      message.hasOwnProperty('connectionRequest')
    ) {
      var error = $root.ConnectionRequest.verify(message.connectionRequest);
      if (error) return 'connectionRequest.' + error;
    }
    if (message.request != null && message.hasOwnProperty('request')) {
      var error = $root.Request.verify(message.request);
      if (error) return 'request.' + error;
    }
    return null;
  };

  /**
   * Creates a MultiplexedRequest message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof MultiplexedRequest
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {MultiplexedRequest} MultiplexedRequest
   */
  MultiplexedRequest.fromObject = function fromObject(object) {
    if (object instanceof $root.MultiplexedRequest) return object;
    var message = new $root.MultiplexedRequest();
    if (object.connectionRequest != null) {
      if (typeof object.connectionRequest !== 'object')
        throw TypeError(
          '.MultiplexedRequest.connectionRequest: object expected'
        );
      message.connectionRequest = $root.ConnectionRequest.fromObject(
        object.connectionRequest
      );
    }
    if (object.request != null) {
      if (typeof object.request !== 'object')
        throw TypeError('.MultiplexedRequest.request: object expected');
      message.request = $root.Request.fromObject(object.request);
    }
    return message;
  };

  /**
   * Creates a plain object from a MultiplexedRequest message. Also converts values to other types if specified.
   * @function toObject
   * @memberof MultiplexedRequest
   * @static
   * @param {MultiplexedRequest} message MultiplexedRequest
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  MultiplexedRequest.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.defaults) {
      object.connectionRequest = null;
      object.request = null;
    }
    if (
      message.connectionRequest != null &&
      message.hasOwnProperty('connectionRequest')
    )
      object.connectionRequest = $root.ConnectionRequest.toObject(
        message.connectionRequest,
        options
      );
    if (message.request != null && message.hasOwnProperty('request'))
      object.request = $root.Request.toObject(message.request, options);
    return object;
  };

  /**
   * Converts this MultiplexedRequest to JSON.
   * @function toJSON
   * @memberof MultiplexedRequest
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  MultiplexedRequest.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for MultiplexedRequest
   * @function getTypeUrl
   * @memberof MultiplexedRequest
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  MultiplexedRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/MultiplexedRequest';
  };

  return MultiplexedRequest;
})();

$root.MultiplexedResponse = (function () {
  /**
   * Properties of a MultiplexedResponse.
   * @exports IMultiplexedResponse
   * @interface IMultiplexedResponse
   * @property {IResponse|null} [response] MultiplexedResponse response
   * @property {IStreamUpdate|null} [streamUpdate] MultiplexedResponse streamUpdate
   */

  /**
   * Constructs a new MultiplexedResponse.
   * @exports MultiplexedResponse
   * @classdesc Represents a MultiplexedResponse.
   * @implements IMultiplexedResponse
   * @constructor
   * @param {IMultiplexedResponse=} [properties] Properties to set
   */
  function MultiplexedResponse(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * MultiplexedResponse response.
   * @member {IResponse|null|undefined} response
   * @memberof MultiplexedResponse
   * @instance
   */
  MultiplexedResponse.prototype.response = null;

  /**
   * MultiplexedResponse streamUpdate.
   * @member {IStreamUpdate|null|undefined} streamUpdate
   * @memberof MultiplexedResponse
   * @instance
   */
  MultiplexedResponse.prototype.streamUpdate = null;

  /**
   * Creates a new MultiplexedResponse instance using the specified properties.
   * @function create
   * @memberof MultiplexedResponse
   * @static
   * @param {IMultiplexedResponse=} [properties] Properties to set
   * @returns {MultiplexedResponse} MultiplexedResponse instance
   */
  MultiplexedResponse.create = function create(properties) {
    return new MultiplexedResponse(properties);
  };

  /**
   * Encodes the specified MultiplexedResponse message. Does not implicitly {@link MultiplexedResponse.verify|verify} messages.
   * @function encode
   * @memberof MultiplexedResponse
   * @static
   * @param {IMultiplexedResponse} message MultiplexedResponse message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  MultiplexedResponse.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.response != null &&
      Object.hasOwnProperty.call(message, 'response')
    )
      $root.Response.encode(
        message.response,
        writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
      ).ldelim();
    if (
      message.streamUpdate != null &&
      Object.hasOwnProperty.call(message, 'streamUpdate')
    )
      $root.StreamUpdate.encode(
        message.streamUpdate,
        writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
      ).ldelim();
    return writer;
  };

  /**
   * Encodes the specified MultiplexedResponse message, length delimited. Does not implicitly {@link MultiplexedResponse.verify|verify} messages.
   * @function encodeDelimited
   * @memberof MultiplexedResponse
   * @static
   * @param {IMultiplexedResponse} message MultiplexedResponse message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  MultiplexedResponse.encodeDelimited = function encodeDelimited(
    message,
    writer
  ) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a MultiplexedResponse message from the specified reader or buffer.
   * @function decode
   * @memberof MultiplexedResponse
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {MultiplexedResponse} MultiplexedResponse
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  MultiplexedResponse.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.MultiplexedResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          message.response = $root.Response.decode(reader, reader.uint32());
          break;
        }
        case 2: {
          message.streamUpdate = $root.StreamUpdate.decode(
            reader,
            reader.uint32()
          );
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes a MultiplexedResponse message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof MultiplexedResponse
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {MultiplexedResponse} MultiplexedResponse
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  MultiplexedResponse.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a MultiplexedResponse message.
   * @function verify
   * @memberof MultiplexedResponse
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  MultiplexedResponse.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected';
    if (message.response != null && message.hasOwnProperty('response')) {
      var error = $root.Response.verify(message.response);
      if (error) return 'response.' + error;
    }
    if (
      message.streamUpdate != null &&
      message.hasOwnProperty('streamUpdate')
    ) {
      var error = $root.StreamUpdate.verify(message.streamUpdate);
      if (error) return 'streamUpdate.' + error;
    }
    return null;
  };

  /**
   * Creates a MultiplexedResponse message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof MultiplexedResponse
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {MultiplexedResponse} MultiplexedResponse
   */
  MultiplexedResponse.fromObject = function fromObject(object) {
    if (object instanceof $root.MultiplexedResponse) return object;
    var message = new $root.MultiplexedResponse();
    if (object.response != null) {
      if (typeof object.response !== 'object')
        throw TypeError('.MultiplexedResponse.response: object expected');
      message.response = $root.Response.fromObject(object.response);
    }
    if (object.streamUpdate != null) {
      if (typeof object.streamUpdate !== 'object')
        throw TypeError('.MultiplexedResponse.streamUpdate: object expected');
      message.streamUpdate = $root.StreamUpdate.fromObject(object.streamUpdate);
    }
    return message;
  };

  /**
   * Creates a plain object from a MultiplexedResponse message. Also converts values to other types if specified.
   * @function toObject
   * @memberof MultiplexedResponse
   * @static
   * @param {MultiplexedResponse} message MultiplexedResponse
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  MultiplexedResponse.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.defaults) {
      object.response = null;
      object.streamUpdate = null;
    }
    if (message.response != null && message.hasOwnProperty('response'))
      object.response = $root.Response.toObject(message.response, options);
    if (message.streamUpdate != null && message.hasOwnProperty('streamUpdate'))
      object.streamUpdate = $root.StreamUpdate.toObject(
        message.streamUpdate,
        options
      );
    return object;
  };

  /**
   * Converts this MultiplexedResponse to JSON.
   * @function toJSON
   * @memberof MultiplexedResponse
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  MultiplexedResponse.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for MultiplexedResponse
   * @function getTypeUrl
   * @memberof MultiplexedResponse
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  MultiplexedResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/MultiplexedResponse';
  };

  return MultiplexedResponse;
})();

module.exports = $root;

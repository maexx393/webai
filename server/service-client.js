/*
   Copyright 2017 IBM Corp.
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
       http://www.apache.org/licenses/LICENSE-2.0
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

'use strict';

const request = require('request');
const log4js = require('../utils/log4js-logger-util');
const logger = log4js.getLogger('server/service-client');
const debug = require('debug')('sample');
const TOKEN_PATH = '/v3/identity/token';

const modelInfo = require('../config/model.json');
const schema = modelInfo['model-schema'].map(obj => obj.name);


var wml_credentials = {
    "apikey": "",
    "instance_id": ""
};



function getAuthToken( apikey )
{
    // Use the IBM Cloud REST API to get an access token
    //
    var IBM_Cloud_IAM_uid = "qwerty";
    var IBM_Cloud_IAM_pwd = "AriLvg_-EiRtF2-8Tm-qbwfeVQ15aNWuTkcnU27rvO8R";
    
    return new Promise( function( resolve, reject )
var request = require("request");

var options = { method: 'POST', url: 'https://eu-gb.ml.cloud.ibm.com/v4/deployments/d712faf3-304d-4ebf-a087-90d6fb3c5cf8/predictions', 
                       headers: { 'Postman-Token': 'bdf71fd9-6123-4667-8521-910fa10837d4', 'cache-control': 'no-cache', 'ML-Instance-ID': '701c17b8-3637-4fb5-a35f-97e8976704bd', 
                       Authorization: 'Bearer eyJraWQiOiIyMDE5MDcyNCIsImFsZyI6IlJTMjU2In0.eyJpYW1faWQiOiJpYW0tU2VydmljZUlkLWY0MGRiZmY3LTY4OGEtNDIyZS04YmJjLWQwY2EwNWJmNGU3NyIsImlkIjoiaWFtLVNlcnZpY2VJZC1mNDBkYmZmNy02ODhhLTQyMmUtOGJiYy1kMGNhMDViZjRlNzciLCJyZWFsbWlkIjoiaWFtIiwiaWRlbnRpZmllciI6IlNlcnZpY2VJZC1mNDBkYmZmNy02ODhhLTQyMmUtOGJiYy1kMGNhMDViZjRlNzciLCJzdWIiOiJTZXJ2aWNlSWQtZjQwZGJmZjctNjg4YS00MjJlLThiYmMtZDBjYTA1YmY0ZTc3Iiwic3ViX3R5cGUiOiJTZXJ2aWNlSWQiLCJhY2NvdW50Ijp7InZhbGlkIjp0cnVlLCJic3MiOiI5NDIzYzFkZDcwOGY0MjhhYjAzZmU1Mzc2MjZkYjIwNSJ9LCJpYXQiOjE1Nzg5NDI4MzQsImV4cCI6MTU3ODk0NjQzNCwiaXNzIjoiaHR0cHM6Ly9pYW0uY2xvdWQuaWJtLmNvbS9pZGVudGl0eSIsImdyYW50X3R5cGUiOiJ1cm46aWJtOnBhcmFtczpvYXV0aDpncmFudC10eXBlOmFwaWtleSIsInNjb3BlIjoiaWJtIG9wZW5pZCIsImNsaWVudF9pZCI6ImRlZmF1bHQiLCJhY3IiOjEsImFtciI6WyJwd2QiXX0.FIlFGtHQbeBzQm7t1KRezsnWCh7IE41VNhySGrmpLlkye_Eydj9bMgDAh98S4kbQGKtW5NjZQyN3REHjoVDA2gcviaNdACrq2mC89AiQV3x-u-1FdBF1xJ73v3Ko4JJayZNkz37SomSBcYaiOkSnEkFT5hbSnnHcz1qEwQLhhqlIw-wZo43-1Pkwz5MvH4aSyFc2N5RWO-RJBXMDgLPajHvPYfqj-OqPu4cQWJyIOdclKXEn4WdonRrdrPVkBXXoNr90iAin84h3FErNC3m2_FvFneLiGlXHzex-z65Hl30261B-ZqClKCo-iTNFGSzfHlxDaIinV3VBckGCOYeSWQ', 
                       Accept: 'application/json', 'Content-Type': 'application/json' }, 
                       body: { 
                       input_data: [ { 
                       fields: [ 'GENDER', 'AGE', 'MARITAL_STATUS', 'PROFESSION', 'PRODUCT_LINE', 'PURCHASE_AMOUNT' ], 
                       values: [ [ 'M', 22, 'Married', 'Student', 'CAMPING EQUIPMENT', 2000 ] ] } ] }, 
                       json: true };

request(options, function (error, response, body) { if (error) throw new Error(error);

console.log(body); });
    } );    
}


const ServiceClient = module.exports = function (service) {
  if (service) {
    this.credentials = service.credentials;
  }
};

ServiceClient.prototype = {

  isAvailable: function () {
    return (this.credentials != null);
  },

  performRequest: function (options, callback) {
    /*getTokenFromTokenEndoint(
      this.credentials.url,
      this.credentials.username,
      this.credentials.password*/
     getAuthToken("ZF_xih1lrD0EG2XNjOrzIhNEaq6OMQDppy1b9ZBVdh0H")
    .then((token) => {
      options.headers = {
         Authorization: 'Bearer ' + token,
         "Content-type": 'application/json',
         "ML-Instance-ID" : "701c17b8-3637-4fb5-a35f-97e8976704bd"
      };
      options.uri = options.uri.startsWith('http') ? options.uri : this.credentials.url + options.uri;
      debug(`url: ${options.uri}`);
      request(options, callback);
    })
    .catch((err) => {
      //callback && callback(err);
        console.log(err);
        callback(err);
    });
  },

  getScore: function (href, data, callback) {
    logger.enter('getScore()', 'href: ' + href + ', data: ' + data);
    let options = {
      method: 'POST',
      uri: href,
      headers: {'content-type': 'application/json'}
    };
    let body = JSON.stringify({values: [data], fields: schema});
    debug(body);
    options.body = body;

    this.performRequest(options, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        var scoreResponse = JSON.parse(body);
        var index = scoreResponse.fields.indexOf('probability');
        scoreResponse['probability'] = {values: scoreResponse.values[0][index]};

        logger.info('getScore()', `successfully finished scoring for scoringHref ${href}`);
        callback && callback(null, scoreResponse);
      } else if (error) {
        logger.error(error);
        callback && callback(JSON.stringify(error.message));
      } else {
        let error = JSON.stringify('Service error code: ' + response.statusCode);
        if (typeof response.body !== 'undefined') {
          try {
            error = JSON.stringify(JSON.parse(response.body).message);
          } catch (e) {
            // suppress
          }
        }
        logger.error(`getScore() error during scoring for scoringHref: ${href}, msg: ${error}`);
        debug(error, 'body: ', response.body);
        callback && callback(error);
      }
    });
  },

  _extendDeploymentWithModel: function (instanceDetails, deployments, callback) {
    if (deployments.length === 0) {
      callback(null, deployments);
      return;
    }

    let options = {
      method: 'GET',
      uri: instanceDetails.entity.published_models.url
    };
    this.performRequest(options, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        let models = JSON.parse(body).resources;
        let result = deployments
          .map((item) => {
            let {entity} = item;
            let model = models.find(m => m.metadata.guid === entity.published_model.guid);
            model = model && model.entity;
            return {
              name: entity.name,
              status: entity.status,
              createdAt: item.metadata.created_at,
              scoringHref: entity.scoring_url,
              id: item.metadata.guid,
              model: {
                author: model.author && model.author.name ? model.author.name : undefined,
                input_data_schema: model.input_data_schema,
                runtimeEnvironment: model.runtime_environment,
                name: model.name
              }
            };
          });
        return callback(null, result);
      } else if (error) {
        logger.error('_extendDeploymentWithModel()', error);
        return callback(error.message);
      } else {
        error = new Error('Service error code: ' + response.statusCode);
        logger.error('_extendDeploymentWithModel()', error);
        return callback(error.message);
      }
    });
  },

  _getInstanceDetails: function (callback) {
    logger.enter('getInstanceDetails()');
    let options = {
      method: 'GET',
      uri: '/v3/wml_instances/' + this.credentials.instance_id
    };

    this.performRequest(options, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        let details = JSON.parse(body);
        debug('instance details', details);
        return callback(null, details);
      } else if (error) {
        logger.error('getInstanceDetails()', error);
        return callback(error.message);
      } else {
        error = new Error('Service error code: ' + response.statusCode);
        logger.error('getInstanceDetails()', error);
        return callback(error.message);
      }
    });
  },

  getDeployments: function (callback) {
    logger.enter('getDeployments()');

    this._getInstanceDetails((error, instanceDetails) => {
      if (error) {
        return callback(error);
      } else {
        let options = {
          method: 'GET',
          uri: instanceDetails.entity.deployments.url
        };

        this.performRequest(options, (error, response, body) => {
          if (!error && response.statusCode === 200) {
            let deployments = JSON.parse(body);
            deployments = deployments && deployments.resources;
            debug('all deployments =>', deployments);
            this._extendDeploymentWithModel(instanceDetails, deployments, (err, result) => {
              if (err) {
                return callback(err);
              }
              debug('adjusted deployments: ', result);
              return callback(null, result);
            });
          } else if (error) {
            logger.error('getDeployments()', error);
            return callback(error.message);
          } else {
            error = new Error('Service error code: ' + response.statusCode);
            logger.error('getDeployments()', error);
            return callback(error.message);
          }
        });
      }
    });
  }
};

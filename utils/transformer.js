/**
 * Ajilore Raphael Olamide < reaphealolams@gmail.com >
 * Right reserved   
*/

let Transformer = {};

Transformer.transformResponse = function(responseCode, responseText, payload, meta) {
    if (payload == undefined) {
        payload = {};
    }
    if (meta == undefined) {
        meta = {};
    }

    return {
        timeStamp: Date.now(),
        responseCode: responseCode,
        responseText: responseText,
        payload: payload,
        meta: meta
    };
};

module.exports = Transformer;
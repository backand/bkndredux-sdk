module.exports = function actions_gen (name) {
  var upname = name.toUpperCase();
  var camel  = name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
  return (
    `import { ${upname}_REQUEST, ${upname}_RESOLVE, ${upname}_REJECT,
  CREATE_${upname}_RESOLVE, CREATE_${upname}_REJECT,
  UPDATE_${upname}_RESOLVE, UPDATE_${upname}_REJECT,
  REMOVE_${upname}_RESOLVE, REMOVE_${upname}_REJECT } from './${name}Types'
import backand from '@backand/vanilla-sdk'

// add custom actions here!

// generated actions
export const get${camel} = (options = {}) => {
  return dispatch => {
    dispatch({
      type: ${upname}_REQUEST,
    })
    backand.object.getList('${name}', options)
      .then(response => {
        dispatch({
          type: ${upname}_RESOLVE,
          payload: {
            data: response.data
          }
        });
      })
      .catch(error => {
        dispatch({
          type: ${upname}_REJECT,
          payload: {
            error: error.data
          }
        });
      });
  };
}

export const create${camel} = (data, options = {}, parameters) => {
  return dispatch => {
    backand.object.create('${name}', data, options, parameters)
      .then(response => {
        // SUCCESS CALLBACK: Write your code here!
        // Use the following type, and payload structure in case of using dispatch():
        // dispatch({
        //   type: CREATE_${upname}_RESOLVE,
        //   payload: {
        //     data: DATA_TO_REDUCER
        //   }
        // });
      })
      .catch(error => {
        dispatch({
          type: CREATE_${upname}_REJECT,
          payload: {
            error: error.data
          }
        });
      });
  };
}

export const update${camel} = (id, data, options = {}, parameters) => {
  return dispatch => {
    backand.object.update('${name}', id, data, options, parameters)
      .then(response => {
        // SUCCESS CALLBACK: Write your code here!
        // Use the following type, and payload structure in case of using dispatch():
        // dispatch({
        //   type: UPDATE_${upname}_RESOLVE,
        //   payload: {
        //     data: DATA_TO_REDUCER
        //   }
        // });
      })
      .catch(error => {
        dispatch({
          type: UPDATE_${upname}_REJECT,
          payload: {
            error: error.data
          }
        });
      });
  };
}

export const remove${camel} = (id, parameters) => {
  return dispatch => {
    backand.object.remove('${name}', id, parameters)
      .then(response => {
        // SUCCESS CALLBACK: Write your code here!
        // Use the following type, and payload structure in case of using dispatch():
        // dispatch({
        //   type: REMOVE_${upname}_RESOLVE,
        //   payload: {
        //     data: DATA_TO_REDUCER
        //   }
        // });
      })
      .catch(error => {
        dispatch({
          type: REMOVE_${upname}_REJECT,
          payload: {
            error: error.data
          }
        });
      });
  };
}
`)
}

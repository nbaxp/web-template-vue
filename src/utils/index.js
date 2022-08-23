/* eslint-disable import/prefer-default-export */
function isMobile() {
  return navigator.userAgent.toLowerCase().match(/mobile/i);
}

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time * 1000);
  });
}

function schemaToModel(properties) {
  const entity = {};
  Object.keys(properties).forEach((propertyName) => {
    const property = properties[propertyName];
    if (property.type === 'object') {
      entity[propertyName] = schemaToModel(property.properties);
    } else {
      entity[propertyName] = property.default;
    }
  });
  return entity;
}

function toJSON(obj) {
  return JSON.stringify(obj, (_key, value) => {
    if (typeof value === 'function') {
      return `/*()*/${value}/*()*/`;
    }
    return value;
  });
}

async function fromJSON(str) {
  const dataUri = `data:text/javascript;charset=utf-8,${encodeURIComponent(
    str.replaceAll("/**/'", '').replaceAll("'/**/", ''),
  )}`;
  const obj = await import(dataUri);
  return obj;
  // return JSON.parse(str, (_key, value) => {
  //   if (value.startsWith('/*()*/')) {
  //     return new Function(value);
  //   }
  //   return value;
  // });
}
const obj = {
  // eslint-disable-next-line object-shorthand
  fun1: function () {
    alert(1);
  },
  // fun2() {
  //   alert(1);
  // },
  // fun3: () => {
  //   alert(1);
  // },
  // eslint-disable-next-line object-shorthand
  fun4: async function () {
    alert(1);
  },
  // async fun5() {
  //   alert(1);
  // },
  // fun6: async () => {
  //   alert(1);
  // },
};
// const json = toJSON(obj);
// const source = await fromJSON('{fun1:function(){alert(1);}}');

// console.log(source);

export { fromJSON, isMobile, schemaToModel, sleep, toJSON };

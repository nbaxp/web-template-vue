import cloneDeep from 'lodash-es/cloneDeep';

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

async function importText(input) {
  const dataUri = `data:text/javascript;charset=utf-8,${encodeURIComponent(input)}`;
  const result = await import(dataUri /* @vite-ignore */);
  return result.default;
}

// const data = await importFileObject('export default {a(){alert(1);}}');
// data.a();

export { cloneDeep, importText, isMobile, schemaToModel, sleep };

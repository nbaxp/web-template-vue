import cloneDeep from 'lodash-es/cloneDeep';
import { lookup, mimes } from 'mrmime';

function isMobile() {
  return navigator.userAgent.toLowerCase().match(/mobile/i);
}

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time * 1000);
  });
}

function extensionToMimetype(extension) {
  return lookup(extension);
}

function mimetypeToExension(mimetype) {
  return mimes[mimetype];
}

async function importModule(input) {
  const dataUri = `data:text/javascript;charset=utf-8,${encodeURIComponent(input)}`;
  const result = await import(dataUri /* @vite-ignore */);
  return result.default;
}

// await importFunction('()=>console.log(123)');
async function importFunction(input) {
  const src = input ?? `()=>{}`;
  const result = await importModule(`export default ${src}`);
  return result;
}

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) {
    return '0 Bytes';
  }
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
}

function schemaToModel(properties) {
  const entity = {};
  Object.keys(properties).forEach((propertyName) => {
    const property = properties[propertyName];
    if (property.type === 'object') {
      entity[propertyName] = schemaToModel(property.properties);
    } else if ('default' in property) {
      entity[propertyName] = property.default;
    } else if (property.type === 'array') {
      entity[propertyName] = [];
    } else if (property.type === 'boolean') {
      entity[propertyName] = false;
    } else if (property.type === 'number') {
      entity[propertyName] = 0;
    } else if (property.type === 'string') {
      entity[propertyName] = null;
    }
  });
  return entity;
}

function findPath(tree, value, path = null, key = 'value', children = 'children') {
  path = path ?? [];
  for (let i = 0; i < tree.length; i += 1) {
    const item = tree[i];
    const tempPath = [...path];
    tempPath.push(item);
    if (item[key] === value) {
      return tempPath;
    }
    if (item[children]) {
      const reuslt = findPath(item[children], value, tempPath, key, children);
      if (reuslt) {
        return reuslt;
      }
    }
  }
  return path;
}

export {
  cloneDeep,
  extensionToMimetype,
  findPath,
  formatBytes,
  importFunction,
  importModule,
  isMobile,
  mimetypeToExension,
  schemaToModel,
  sleep,
};

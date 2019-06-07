import { IBundleOptions } from 'umi-library/src/types';

const options: IBundleOptions = {
  esm: {
    type: 'rollup'
  },
  cjs: 'rollup',
  umd: {
    name: 'dharma'
  }
};

export default options;

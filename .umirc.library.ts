import { IBundleOptions } from 'umi-library/src/types';

const options: IBundleOptions = {
  esm: {
    type: 'rollup'
  },
  cjs: 'rollup'
};

export default options;

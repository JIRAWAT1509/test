// import { Directus } from '@directus/sdk';

// const directus = new Directus('http://localhost:8055');  (สร้างตรงไม่ได้)
// console.log(directus);

// export { directus };

import * as DirectusSDK from '@directus/sdk';

// Log all available exports to find the right one for initializing a client
console.log(DirectusSDK);

// If a client creation function is available, use it like so
const directus = DirectusSDK.createDirectus('http://localhost:8055'); //ต้องสร้างผ่านmethod createDirectus แทน
export { directus };


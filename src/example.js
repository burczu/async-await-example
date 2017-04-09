export default function asyncAction() {
  return new Promise((resolve, reject) => {
    const successTimeout = Math.random() * 10000;
    const errorTimeout = Math.random() * 10000;

    setTimeout(() => {
      resolve('success');
    }, successTimeout);

    setTimeout(() => {
      reject('error');
    }, errorTimeout);
  });
}

// export async function asyncAction() {
//   const successTimeout = Math.random() * 10000;
//   const errorTimeout = Math.random() * 10000;
//
//   await setTimeout(() => {
//     return 'success';
//   }, successTimeout);
//
//   await setTimeout(() => {
//     return 'error';
//   }, errorTimeout);
// }

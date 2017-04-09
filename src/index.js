// export default not working yet for async functions
// import asyncAction from './example';
import { asyncAction } from './example';

// function doWork() {
//   asyncAction()
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }
//
// doWork();


async function doWork() {
  try {
    const data = await asyncAction();
    console.log(`message = ${data}`);
  } catch(error) {
    console.log(`message = ${error}`);
  }
}

doWork();

import * as yup from 'yup';

let schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email(),
});

// // check validity
// schema
//   .isValid({
//     name: 'jimmy',
//     age: 24,
//   })
//   .then(function (valid) {
//     // valid; // => true
//   });

// // you can try and type cast objects to the defined schema
// schema.cast({
//   name: 'jimmy',
//   age: '24',
//   createdOn: '2014-09-23T19:25:25Z',
// });
// // => { name: 'jimmy', age: 24, createdOn: Date }

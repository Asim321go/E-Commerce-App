module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}


// const submitData = async (event) => {
//   event.preventDefault();
//   const { fullName, email, subject, message, } = userData;
//   if (fullName && email && subject && message) {
//       const response = fetch('https://e-commerce-project-b2a35-default-rtdb.firebaseio.com/contactDataRecords.json',
//           {
//               method: "POST",
//               body: JSON.stringify({ fullName, email, subject, message, }),
//               headers: {
//                   "Content-Type": "application/json",
//               }
//           }
//       )
//       if (response) {
//           toast("Your details have been successfully submitted.",
//               {
//                   position: 'top-center',
//                   type: 'success',
//                   autoClose: 2000
//               }
//           );
//       }
//       else {
//           toast("Please fill the details")
//       }
//       setUserData({
//           fullName: "",
//           email: "",
//           subject: "",
//           message: "",
//       })
//   }
//   else if (fullName && email) {
//       toast("Please fill The Details",
//           {
//               position: "top-center",
//               type: 'error',
//               autoClose: 1000,
//               hideProgressBar: true,
//           }

//       );
//   }
//   else if (fullName && email && subject) {
//       toast("Please fill The Details",
//           {
//               position: "top-center",
//               type: 'error',
//               autoClose: 1000,
//           }

//       );
//   }

// }

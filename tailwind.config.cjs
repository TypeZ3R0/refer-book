// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    color:{

      "blue":"#1fb6ff"
    },
    extend: {
      gridTemplateColumns :{
       "35/1" : "100px,1fr,1fr",
      },
      gap :{
        "99" : "36 rem"
      }
    },
  },

}

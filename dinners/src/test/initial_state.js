export const testState = {
  user: {
    id: 0,
    name: "Matt",
    dinners: [
      {
        id: 0,
        dates: ["2018-08-20"]
      },
      { id: 1,
        dates: ["2018-08-21"]
      },
      {
        id: 2,
        dates: ["2018-08-22"]
      }
    ],
    favorites: []
  },

  dinners: [
    {
      id: 0,
      favorited: true,
      name: "Ham Sandwich",
      ingredients: [
        {
          id: 0
        },
        {
          id: 1
        }
      ]
    },
    {
      id: 1,
      favorited: false,
      name: "Pot Roast",
      ingredients: [
        {
          id: 2,
          quantity: 4
        },
        {
          id: 3,
          quantity: 2
        }
      ]
    },
    {
      id: 2,
      favorited: true,
      name: "Steak",
      ingredients: [
        {
          id: 4,
          quantity: 2
        },
        {
          id: 3,
          quantity: 1
        }
      ]
    }
  ],

  ingredients: [
    {
      id: 0,
      name: "bread",
      bought_dates: ["2018-08-15"],
      quantity: 3,
      unit_name: "loaf"
    },
    {
      id: 1,
      name: "ham",
      bought_dates: ["2018-08-15"],
      quantity: 0.5,
      unit_name: "pound"
    },
    {
      id: 2,
      name: "beef",
      bought_dates: ["2018-08-15"],
      quantity: 2,
      unit_name: "pound"
    },
    {
      id: 3,
      name: "onion",
      bought_dates: ["2018-08-17"],
      quantity: 3
    },
    {
      id: 4,
      name: "steak",
      bought_dates: ["2018-08-17"],
      quantity: 1
    }
  ]
};

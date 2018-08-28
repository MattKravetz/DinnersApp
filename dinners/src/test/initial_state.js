export const testState = {
  user: {
    id: 0,
    name: "Matt",
    dinners: [
      {
        id: 0,
        dates: ["2018-08-20"]
      },
      {
        id: 1,
        dates: ["2018-08-21"]
      },
      {
        id: 2,
        dates: ["2018-08-22"]
      }
    ],
    favorites: [
      {
        id: 1,
        favorited_date: "2018-08-21"
      }
    ]
  },

  dinners: [
    {
      id: 0,
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
      bought: true,
      unitName: "loaf"
    },
    {
      id: 1,
      name: "ham",
      bought_dates: ["2018-08-15"],
      bought: true,
      unitName: "pounds"
    },
    {
      id: 2,
      name: "beef",
      bought_dates: ["2018-08-15"],
      bought: false,
      unitName: "pounds"
    },
    {
      id: 3,
      name: "onion",
      bought: false,
      bought_dates: ["2018-08-17"]
    },
    {
      id: 4,
      name: "steak",
      bought: true,
      bought_dates: ["2018-08-17"]
    }
  ]
};

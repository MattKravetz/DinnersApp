# Components
- DinnerApp
    - Holds dinner state
- Dinner list
    - Displays list of dinners, passed down from the DinnerApp
- Add dinner form
    - Input box to enter ingredient name, onSubmit handler passed from from DinnerApp to update dinner state 
- Edit dinner form
    - Exposes dinner object fields for editing.  Gets a single object passed from DinnerApp.
    - User can add new ingredients, or edit existing ingredients




# Maybe not
# Left panel
## List of Dinners.  
- Add dinner button at the bottom of the list.
- Add dinner button adds a new, empty dinner to the list

# Edit Dinner Form
- Clicking an ingredient opens the edit ingredient component
- This takes the current state of the component and allows each field to be edited
- (if a new component, then this functions as a createDinner component!)

# Right Panel
## Shopping list
- List of all ingredients from all dinners, with quantities summed




# Redux Refactor

## Objects
- User
    - id
    - name
    - dinners [{iso 8601 str: dinner_id}]
    - favorites [dinner_ids]
- Dinner
    - id
    - favorited
    - name
    - [{ingreient_id int : {quantity} }] // quantity used just for this recipe (must always be <= total quantity by type)
    - completed dates
- Ingredient
    - id
    - name
    - [bought dates]
    - quantity // total quantity

## Quantity Model

const example_quantity = {
    unit_type: "cups" // str
    amount: 1 // int
}

## Actions
- User
    - updateName -> str
    - addDinner -> {iso 8601 str: dinner_id}
    - removeDinner -> {iso 8601 str: dinner_id}
    - addFavorite
- Dinner
    - updateFavorited -> bool
    - updateName -> str
    - addIngredient -> ingredient_id // create if not exist, increment quantity otherwise
    - removeIngredient -> ingredient_id // decrement quantity if exists, delete from ingredients arr otherwise
    - addCompleted -> bool // when marked completed, should decrement each increment by the amount used in this recipe.  if flipping from true to false, increment instead (basically, allowing you to 'undo' the decrement if it was a mistake)
- Ingredient
    - updateName -> str
    - updateBoughtState -> bool
    - updateQuantity -> {quantity}




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

# Objects
- Ingredient
    - Object with a name and a quantity
- Dinner
    - Object with an array of ingredients



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








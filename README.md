# NgRx Angular Getting Started

GD App Architecture Communities Call - (NgRx - Angular).

Applications:

- Vanilla Todo App (vanilla-todo-app)
- NgRx Todo App (ngrx-todo-app)

## Conversion Steps

Installation:

1. Add NgRx Store `ng add @ngrx/store@latest`

Setup:

1. Create `store` folder
1. Create `models` file
1. Add `State` interface to models
1. Create `index` file
1. Add `ActionReducerMap` to index
1. Add `reducers` to `StoreModule.forRoot(reducers)`
1. Add `TaskState, TaskStoreState` interface to models
1. Add `initial` file
1. Add `initialState` to initial
1. Add `actions` file
1. Create actions in actions file
1. Add `reducers` file
1. Create `taskReducer` to reducers file
1. Add `taskReducer` to index file
1. Add `selectors` file
1. Create `createFeatureSelector`in selectors file
1. Create `createSelector` in selectors file
1. Create a `constants` file
1. Create store state constant variable in constants file

Usage:

1. Add store dependency to the component
1. Call the `dispatch` method with action
1. Add the `select` method to select from store

DevTool:

1. Add NgRx DevTool `ng add @ngrx/store-devtools@latest`
1. Add `Redux Extension` to browser
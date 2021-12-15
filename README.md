# V4 Admin
---
## Package Manager
* Yarn
---
## Installation

* Run in development mode..
```sh
yarn
yarn start 
```
---

## Git Flow
* Before commiting there must be no errors or warning on linting
* Commiting while there's an error it will not commit your changes.
* run yarn or npm lint to for linting erros / warnings.

---
## Tools and Library
* ReactJS
* Typescript
* Eslint
* Prettier
* Ant Design
* Styled Components
* ReactQuery
* Axios
* React ToolKit? - depends on the complexity of the project.

---
## Coding Guide
### Folder Structure
* components -> List of all components
  * elements -> list of elements and modified ant design components/elements
* pages -> List of all pages
* assets -> List of All assets
* shared
  * config -> configuration variables
  * constants -> constants
  * hooks -> custom hooks
  * interfaces -> list of all API Model
    * utils -> interfaces for ulitity
  * navigation -> routing
  * services -> business logic
  * dao -> api fetching.
  * theme -> styled components custom theme

### Component Structure
* container -> Logic 
* view -> Render
### API Consume
* create DAO
* create Service
* Component

### Page

* Add routes -> shared/constants/routes
* Create Page -> shared/page
* Create Navigation Route ->  shared/navigation/Routes

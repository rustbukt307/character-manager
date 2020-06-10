# Character Manager

## Overview
### Character Manager is an online tool used for tabletop RPG games that will greatly assist in the task of managing the few or many characters a user plays for various tabletop RPGs. Character Manager will incorporate a character's race, class, stats, inventory, skills, and more. Ditching the old ways of complicated character sheets, constant erasing, and pencil shavings.

## MVP
### The app will allow users to create an account with a username and password for security and easy management of their characters. The user will be able to create a character, add a class, race, and manage an inventory. Skills, feats, and whatever applicable spells can also be added to the character making for a complete management experience. The aforementioned items can also be updated and removed entirely to best suit your character.

## Goals
| Day  | Goal                     | Status     |
|:----:|:------------------------:|:----------:|
| 6/08 | Conceptualize            | Complete   |
| 6/08 | Prepare pitch            | In Progress |
| 6/09 | Create wireframes/ERD    | In Progress |
| 6/09 | Get approval             | Incomplete |
| 6/10 | Auth, routes, and CRUD   | Incomplete |
| 6/10 | Create components        | Incomplete |
| 6/11 | Implement API data       | Incomplete |
| 6/11 | Apply data to components | Incomplete |
| 6/12 | Apply CSS styling        | Incomplete |
| 6/12 | Ensure app works, debug  | Incomplete |

## Libraries
| Library       | Description              |
|:-------------:|:------------------------:|
| React         | Front end design         |
| React Router  | Client-side routing      |
| Ruby on Rails | Authentication and CRUD  |

## Client
### Wireframes: 
[Landing Page](https://wireframe.cc/pro/pp/f793e9681350073)
[Sign Up](https://wireframe.cc/pro/pp/f03d98991350074)
[Login](https://wireframe.cc/pro/pp/17f238529350076)
[Campaign List](https://wireframe.cc/pro/pp/d06280149350078)
[Character List](https://wireframe.cc/pro/pp/01fcd6e36350083)
[Character Sheet](https://wireframe.cc/pro/pp/edb1dc6c9350087)

### Component Tree:
### Component Hierarchy:
### Component Breakdown:
### Component Estimates:

## Server
### ERD Model
[View ERD](https://app.diagrams.net/?lightbox=1&highlight=CC0000&edit=_blank&layers=1&nav=1&title=character-manager-ERD.drawio#R5Vlbd9soEP41fvQeCVmy%2Fdg4l7a77Wk3TbLZFx8iYYkWCRUhW86vL0hgXazY2El9mvYlYT6GgYH5ZhAeOLO4uGIwjT7QAJEBsIJi4JwPAJi4Y%2FFXAusKsMfjSYWEDAcKq4Fr%2FIgUaCk0xwHKWoqcUsJx2gZ9miTI5y0MMkZXbbUFJe1ZUxiiLeDah2QbvcMBj5RfYFzjbxEOIz2z7U2rnhhqZeVJFsGArhqQczFwZoxSXrXiYoaI3Dy9L3fv1nfkn2%2Fe1fvP2Xd4c%2Fb3l4%2B3w8rY5SFDNi4wlPCjTc9GU3ZtDW9ykPLJzS34mn921RBrCUmu9msAPCImOQvwUvrM12ojve%2B5dPSMo4IPIcFhMnDeyHMTa0Ks7hetUP0v7WQpTHoNLWjCh1kZL9IOGKVFrxUYp6KRPGRpKVvacK51brJyflLpX%2BbdFQisWsQWXPrYRh9YF8mJyfLtyRPLL20QrBFxGvX8NbytmAuvEhgjQ%2FUUZtmKsmAe4BBl3HCUzxDkKJhD0wF5GpgMkMdAahC0dhCsIszRdQp9Ka9E2hFKEY%2BJkGzRhFlaJYIFLlAggSrazgla1Pb2skGxZomYCNlGLlDsuEI0RpythYru1URf1XkCWAqLGjliA0KVm8KNrZp%2FoqEoeAAdJwfTsRuG3q4wPJTTVsW4ZzD1D4S25Ha2mkWQQZ%2FvTVk9ualJqaPzygE5hUmGGiYS4dXcJyIJGQ4gaCkvGka6ZWTGku1m%2BkVqqJhxZqgZoMJ0J2hiqImNHVph020V52BaMBhdzB9okpuajkx3FfqmFjEX5co4xnCyFDFAZZo10l%2BI2mbqnKy2c2MOnahs9ueCV1JM9TVafTc4PcV1NO0prhvwOcX11pl%2FuHz88j9j6eLj48i%2Fm82TjQ%2Bv6677U2qQ6IbSq9%2Fu1tw%2Bid6K94RXh1oN4vnzDf%2BSaed1JJhNnlAJZmi727d3p%2B%2F27vysBOP1JJjOZqIkeCMfNYR08W8Mk3V7M8WFhH7bvFMARRj1qGJPhIwKzP9T2rJ9L9rWX66SzuXmWFpYKyHjkPF6WpogDV5i6WE1IgkakugMEf%2BEGBZbg5g8fpyEtapeEtCWmsBhR57RnPlo%2FxtFtaT9%2BR0FrQeh7QBqBIjbEx8aY4hAjpftZ6S%2BmFEzfKLlhU7Hp9MpgHY37Cq%2F1ajmu03H0Ai0A90edwyps%2BoaKkN44%2FbxUd33TfrSUX3qCNUsqplz3%2BBUP4tEMLN1NWjsavm%2B2VmPKyU98Hg67ArzJh12vSX8InRwO%2BkadKPYlA7epGNoYkYHEV1w3VBLpUL29II9y23P41k71%2BU64136olGt4EW5OT1hxTmEKyfnc81NcCJumpaqV8BNYE3ltrWKzNQ9jp7ALtNj69PP6th6IYaCTmHcx1AwBS%2FJUCHWv%2F1U6vUvaM7FDw%3D%3D)


## Post-MVP
### Beyond MVP I would like the app to implement an automatic leveling system which would update certain stats, modifiers, and hit points (HP) as well as add new feats, spells, or other abilities gained as the character grows. This system would take API data from the corresponding game's core rulebooks and know that at a certain total number of experience points (XP) to update the character's level as well as stats, HP, etc automatically. Another helpful feature to implement would be automated dice rollers as well as automated attack and initiative rolls. Making this app essential for games played over webcam or even in person at a traditional tabletop setting on a laptop computer.


## Code Showcase


## Code Issues & Resolutions

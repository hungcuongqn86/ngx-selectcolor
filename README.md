# ngx-selectcolor
Angular component for view and choose color
###
![view and choose color](color.png?raw=true "Title")

## Dependents
  1. font awesome
  2. tinycolor2

## Installation
$ npm install ngx-selectcolor --save

## Implementation
```
import {LgcolorModule} from 'ngx-selectcolor';

@NgModule({
  imports: [
    ....,
    LgcolorModule
  ],
  ...
})
```
Add it to template:
```
<ni-color [color]="'red'" [faclass]="'fa-plus'"></ni-color>
```

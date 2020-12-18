import { Pipe, PipeTransform } from '@angular/core';
import { IRecipe } from '../shared/interfaces/recipe';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(recipes: IRecipe[], searchText: string): any[] {
    if (!recipes) {
      return [];
    }
    if (!searchText) {
      return recipes;
    }
    searchText = searchText.toLocaleLowerCase();

    return recipes.filter(it => {
      return it.title.toLocaleLowerCase().includes(searchText);
    });
  }

}

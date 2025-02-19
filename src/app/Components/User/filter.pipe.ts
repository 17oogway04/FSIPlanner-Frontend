import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items || !Array.isArray(items)) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    const lowerCaseSearchText = searchText.toLocaleLowerCase();

    return items.filter(item => {
      if (typeof item === 'string') {
        return item.toLocaleLowerCase().includes(lowerCaseSearchText);
      } else if (typeof item === 'object' && item !== null) {
        return Object.values(item).some(value => 
          value != null && value.toString().toLocaleLowerCase().includes(lowerCaseSearchText)
        );
      }
      return false;
    });
  }

}

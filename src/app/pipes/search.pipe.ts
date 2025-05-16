import { inject, Pipe, PipeTransform } from '@angular/core';
import { UserService } from '../service/user.service';

@Pipe({
  name: 'searchPipe',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  userService=inject(UserService)

  transform(users: unknown[], value: unknown):any[] {
    
    if(users.length===0) return []

    return users.filter((e:any) => e.name ===value)

  }

}

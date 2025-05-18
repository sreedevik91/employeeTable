import { inject, Pipe, PipeTransform } from '@angular/core';
import { UserService } from '../service/user.service';
import { IUser } from '../model/interface';

@Pipe({
  name: 'searchPipe',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  getFieldName(obj: IUser, field: string) {
    return field.split('.').reduce((acc:any, elm:string) => acc?.[elm], obj)
  }

  transform(users: IUser[], value: string, field: string = ''): any[] {

    console.log('search value and field: ', value, field);

    let lowerValue = value.toLowerCase()

    // if(users.length===0) return []

    // return users.filter((e:any) => e.name ===value)

    if (!users || !value) return users

    let filteredUser = users.filter((user: IUser) => {

      if (field) {

        let fielValue = this.getFieldName(user, field)

        return fielValue.toString().toLowerCase().includes(lowerValue)

        // return user[fieldName].toString().toLowerCase().includes(value)
      }

      return Object.values(user).some((val: unknown) => {
        return val?.toString().toLowerCase().includes(lowerValue)
      })
    })

    console.log('search result from pipe: ', filteredUser);
    return filteredUser

  }

}



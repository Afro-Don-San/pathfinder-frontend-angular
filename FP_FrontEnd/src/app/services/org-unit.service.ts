import { Injectable } from '@angular/core';
import {HttpClientService} from './http-client.service';

@Injectable({providedIn: 'root'})
export class OrgUnitService {
  nodes: any[] = null;
  visit_locations: any[] = null;
  constructor(
    private http: HttpClientService
  ) { }

  getLevel4OrgunitsIds(orgunits: any[], uuid) {
    console.log("the starting locaton is", uuid)
    console.log("org units passed are",{orgunits});

    let orgunitItems = orgunits
      .filter((ou: any) => ou.parents.indexOf(uuid) !== -1)
      .map(ou => ou.id);

      console.log("lngth of array is", orgunitItems.length);

    // if (orgunitItems.length === 0)
    // {
    //   orgunitItems = [uuid];
    // }
    console.log("selected org units are",orgunitItems);
    return orgunitItems;
  }

  getLevel4OrgunitsNames(orgunits: any[], uuid) {
    console.log({orgunits});
    return orgunits
      .filter((ou: any) => ou.id === uuid)
      .map(ou => ou.name)
      .join(', ');
  }

  getLevel4OrgunitsId(orgunits: any[], uuid) {
    return orgunits
      .filter((ou: any) => ou.id === uuid)
      .map(ou => ou.id)
      .join('');
  }


}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRecipe } from '../shared/interfaces/recipe';

@Injectable()
export class RecipeService {
  backendURL = 'https://api.backendless.com/91489BA3-1A30-C1BB-FFEE-DECBF7695D00/619A168C-5CC5-4B4D-A07D-17E96786F750';
 
  constructor(private http: HttpClient) { }

  loadRecipeList(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(`${this.backendURL}/data/recipes`);
  }

  loadRecipe(id: string): Observable<IRecipe> {
    return this.http
    .get<IRecipe>(`${this.backendURL}/data/recipes/${id}`);
  }

  loadRecipesByOwnerId(ownerId: string): Observable<IRecipe[]> {
    return this.http
    .get<IRecipe[]>(`${this.backendURL}/data/recipes?where=ownerId%3D'${ownerId}'`);
  }

  saveRecipe(data: any): Observable<IRecipe> {
    return this.http
      .post<IRecipe>(`${this.backendURL}/data/recipes`, data);
  }

  deleteRecipe(id: string): Observable<any> {
    return this.http.delete(`${this.backendURL}/data/recipes/${id}`);
  }

  editRecipe(id: string, body: any): Observable<IRecipe> {
    return this.http
      .put<IRecipe>(`${this.backendURL}/data/recipes/${id}`, body);
  }
}

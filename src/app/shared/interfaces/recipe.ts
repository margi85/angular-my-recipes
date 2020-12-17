export interface IRecipe<> {
  objectId: string;
  ownerId: string;
  title: string;
  imageURL: string;
  ingredients: string[];
  preparation: string;
}

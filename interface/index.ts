export interface IPost {
  $collectionId: string;
  $createdAt: Date;
  $databaseId: string;
  $id: string;
  $permissions: any[];
  $updatedAt: Date;
  creator: ICreator;
  prompt: string;
  thumbnail: string;
  title: string;
  video: string;
}

export interface ICreator {
  $collectionId: string;
  $createdAt: Date;
  $databaseId: string;
  $id: string;
  $permissions: any[];
  $updatedAt: Date;
  accountId: string;
  avatar: string;
  email: string;
  username: string;
}

import { checkError, client } from './client';

export async function getBlogs() {
  //comment
  const resp = await client.from('blogs').select('*');
  return checkError(resp);
}

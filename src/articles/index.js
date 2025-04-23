import { article as imperialFantasies } from './imperial-fantasies';
import { article as homecoming } from './homecoming';
import { article as bucketList } from './bucket-list';


export const blogPosts = [
  imperialFantasies,
  homecoming,
  bucketList,
].sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  
  return dateB - dateA;
});

export {
  imperialFantasies,
  homecoming,
  bucketList,
};
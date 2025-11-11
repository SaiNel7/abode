// import { article as imperialFantasies } from './imperial-fantasies';
import { article as homecoming } from './homecoming';
import { article as bucketList } from './bucket-list';
import { article as hume } from './hume';


export const blogPosts = [
  // imperialFantasies,
  homecoming,
  bucketList,
  hume,
].sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  
  return dateB - dateA;
});

export {
  // imperialFantasies,
  homecoming,
  bucketList,
  hume,
};
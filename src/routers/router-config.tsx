import Homepage from 'src/pages/homepage';
import { RouterConfigType } from 'src/types/common';

const routerConfig: RouterConfigType[] = [
  {
    path: 'homepage',
    component: <Homepage />,
    permissonKey: 'chat_page',
  },
];

export default routerConfig;

import Images from '@themes/images';
export  const DATA = [
  {
    id: 0,
    title: 'Daily meeting with team',
    time: '10:41pm',
    source: Images.purpleIcon,
  },
  {
    id: 1,
    title: 'pay for rent ',
    time: '06:85pm',
    source: Images.right,
  },
  {
    id: 2,
    title: 'Meditation',
    time: '06:85pm',
    source: Images.pinkIcon,
  },
  {
    id: 3,
    title: 'Meeting with client',
    time: '06:85pm',
    source: Images.purpleIcon,
  },
  
];

export const List = [
  {
    id: 1,
    pending: "Due's",
  },
  {
    id: 2,
    pending: 'Notes',
  },
  {
    id: 3,
    pending: 'History',
  },
];

export const GENERAL = [{
  title: "GENERAL",
  data: [
    {
      id: "1",
      task: "Sync Automatically",
      source: Images.sync,
    },
    {
      id: "2",
      task: "Language",
      source: Images.language,
      language: "EN",
      icon : Images.increaseArrow,
    },
    {
      id: "3",
      task: "Theme",
      source : Images.theme,
      language: "Light",
      icon : Images.increaseArrow,
    },
    {
      id: "4",
      task: "Show Notification",
      source:Images.cirlceNotification,
    },
  ]
}];

export const PRODUCTIVITY = [{
  title: "PRODUCTIVITY",
  data: [
    {
      id: "6",
      task: "Set Goal",
      source:Images.goal,
      icon : Images.increaseArrow,
    },
    {
      id: "7",
      task: "Delete Account",
      source:Images.account,
    },
    {
      id: "8",
      task: "Logout",
      source:Images.logout
    },
  ]
}];

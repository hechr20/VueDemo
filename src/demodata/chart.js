const range = (start, end) => new Array(end - start).fill(start).map((el, i) => start + i)

const shortMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const monthVisitData = []
const monthVisitUniqueData = []
for (let i = 0; i < shortMonth.length; i++) {
  monthVisitData[i] =Math.floor(Math.random() * 100) + 400;
  monthVisitUniqueData[i] =Math.floor(Math.random() * 100) + 400;
}
shortMonth.map((m) => {
  return {
    month: m,
    'Unique Visit': Math.floor(Math.random() * 1000) + 200,
    'Page View': Math.floor(Math.random() * 1000) + 250,
  }
})

const campaignData = [
  {
    value: 335,
    name: 'Website',
  },
  {
    value: 310,
    name: 'Email',
  },
  {
    value: 234,
    name: 'Ads',
  },
  {
    value: 135,
    name: 'Video',
  },
  {
    value: 1548,
    name: 'Search',
  },
]
const locationData = [
  {
    value: 25,
    name: 'China',
  },
  {
    value: 35,
    name: 'USA',
  },
  {
    value: 25,
    name: 'EU',
  },
  {
    value: 10,
    name: 'Russia',
  },
  {
    value: 10,
    name: 'Other',
  },
]
const kanbanGroups=[
  {
    id: 1,
    name: "To Do",
    backgroundColor: '#f4ce46',
    items: [
      { id: 1, name: "Item 1", groupId: 1 },
      { id: 2, name: "Item 2", groupId: 1 },
      { id: 3, name: "Item 3", groupId: 1 }
    ]
  },
  {
    id: 2,
    name: "In Progress",
    backgroundColor: '#2a92bf',
    items: [
      { id: 4, name: "Item 4", groupId: 2 },
      { id: 5, name: "Item 5", groupId: 2 },
      { id: 6, name: "Item 6", groupId: 2 }
    ]
  },
  {
    id: 3,
    name: "Done",
    backgroundColor: '#00b961',
    items: [
      { id: 7, name: "Item 7", groupId: 3 },
      { id: 8, name: "Item 8", groupId: 3 },
      { id: 9, name: "Item 9", groupId: 3 },
      { id: 10, name: "Item 10", groupId: 3 }
    ]
  }
]

const StackMainData = [
  220,
  182,
  191,
  234,
  290,
  330,
  310,
  123,
  442,
  321,
  90,
  149,
  210,
  122,
  133,
  334,
  198,
  123,
  125,
  220,
]
const StackData = StackMainData.map((item, key) => {
  return {
    label: key + 'D',
    max: 500,
    sales: item,
  }
})
const SinData = range(1, 12).map((i) => {
  return {
    cate: 'Cat' + i,
    value: (Math.sin(i / 5) * (i / 5 - 0.1) + i / 6) * 5,
  }
})

export { monthVisitData,monthVisitUniqueData, campaignData, locationData, StackData, SinData, shortMonth, kanbanGroups }
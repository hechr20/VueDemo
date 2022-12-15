import * as Chart from './chart'
import * as Drawer from './drawerdata'
export default {
  // chart data
  getMonthVisit: Chart.monthVisitData,
  getMonthUniqueVisit: Chart.monthVisitUniqueData,
  getCampaign: Chart.campaignData,
  getLocation: Chart.locationData,
  getMonths: Chart.shortMonth,
  getListData: Drawer.listData,
  getKanbanGroups: Chart.kanbanGroups,
}
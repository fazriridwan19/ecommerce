import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/feturedInfo/FeaturedInfo'
import './home.css'
import {userData} from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

export default function Home() {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart data={userData} title='User Analytic' grid dataKey='Active User'/>
        <div className="homeWidget">
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}

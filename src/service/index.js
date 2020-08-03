import {
    getDayData,
    getMonthData,
    getYearData
} from './requests'
import {
    formatChsDate,
    mapForChsDate
} from '/@/libs/utils'

export default async (store, field, date) => {
    let data = null;
    switch (field) {
        case 'day':
            data = await getDayData(date)
            break
        case 'month':
            data = await getMonthData(date)
            break
        case 'year':
            data = await getYearData(date)
            break
        default:
            data = await getDayData(date)
            break
    }
    if (data.error_code !== 0) {
        store.commit('setErrorCode', data.error_code)
        return
    }
    //store.date=data.result.data
    let res = null
    switch (field) {
        case 'day':
            res = data.result.data
            res.date = formatChsDate(res.date, 'day')
            res['yearMonth'] = formatChsDate(res['year-month'], 'month')
            break
        case 'month':
            res = data.result.data.holiday_array
            res = mapForChsDate(res, 'festival')
            break
        case 'year':
            res = data.result.data.holiday_list
            res = mapForChsDate(res, 'startday')
            break
    }
    store.commit('setData', {
        field,
        data: res
    })
}
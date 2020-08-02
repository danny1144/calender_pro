import {
    axiosPost,mockGet
} from '../libs/http'

function getDayData(date) {
    return new Promise((resolve, reject) => {
        mockGet({
            // url: '/api/calendar/day',
            url:'/mock/day.json',
            data: {
                date
            },
            success(data) {
                resolve(data)
            },
            error(err) {
                reject(err)
            }

        })

        
    })
}
function getMonthData(date) {
    return new Promise((resolve, reject) => {
        mockGet({
            // url: '/api/calendar/month',
            url:'/mock/month.json',
            data: {
                "year-month": date
            },
            success(data) {
                resolve(data)
            },
            error(err) {
                reject(err)
            }

        })
    })
}
function getYearData(year) {
    return new Promise((resolve, reject) => {
        mockGet({
            // url: '/api/calendar/year',
            url:'/mock/year.json',
            data: {
                year
            },
            success(data) {
                resolve(data)
            },
            error(err) {
                reject(err)
            }

        })
    })
}
export {
    getDayData,
    getMonthData,
    getYearData
}
export default {
    setHeaderTitle: (state, routName) => {
        switch (routName) {
            case 'day':
                state.headerTitle = '当天信息'
                break
            case 'month':
                state.headerTitle = '近期假期'
                break
            case 'year':
                state.headerTitle = '当年假期'
                break
            default:
                state.headerTitle = '当天信息'
        }
    },
    setPlaceholder: (state, routName) => {
        let date = new Date(),
            year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate();
        month = month < 10 ? ('0' + month) : month
        day = day < 10 ? ('0' + day) : day
        switch (routName) {
            case 'day':
                state.placeholder = `格式：${year}${month}${day} (${year}年${month}月${day}日)`
                break
            case 'month':
                state.placeholder = `格式：${year}${month} (${year}年${month}月)`
                break
            case 'year':
                state.placeholder = `格式：${year} (${year}年)`
                break
            default:
                state.headerTitle = `格式：${year}${month}${day} (${year}年${month}月${day}日)`
        }
    },
    setMaxlength: (state, routName) => {
        switch (routName) {
            case 'day':
                state.maxlength = 8
                break
            case 'month':
                state.maxlength = 6
                break
            case 'year':
                state.maxlength = 4
                break
            default:
                state.maxlength = 8
        }
    },
    setErrorCode: (state, errorCode) => {
        state.error_code = errorCode
    },
    setData(state, payload) {
        const {
            field,
            data
        } = payload
        switch (field) {
            case 'day':
                state.dayData = data
                break
            case 'month':
                state.monthData = data
                break
            case 'year':
                state.yearData = data
                break
            default:
                break
        }
    }


}
import {
    getIconDate
} from '/@/libs/utils'

export default [

    {
        iconText: getIconDate('day'),
        textTab: '当天',
        path: '/'
    },

    {
        iconText: getIconDate('month'),
        textTab: '近期',
        path: '/month'
    },

    {
        iconText: getIconDate('year'),
        textTab: '当年',
        path: '/year'
    },
]
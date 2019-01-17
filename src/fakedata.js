import moment from 'moment';

const data = [
    {
        Id: 1,
        first_name: 'Ardine',
        last_name: 'Cleyburn',
        events: []
    },
    {
        Id: 2,
        first_name: 'Ransell',
        last_name: 'Syfax',
        events: [
            {
                id: 1,
                title: 'Twitterbridge',
                start: moment('2019-01-06 09:19:53').toDate(),
                end: moment('2019-02-05 14:47:09').toDate()
            },
            {
                id: 2,
                title: 'Divanoodle',
                start: moment('2019-01-07 12:58:00').toDate(),
                end: moment('2019-01-07 15:19:52').toDate()
            },
            {
                id: 3,
                title: 'Bubbletube',
                start: moment('2019-01-03 12:06:06').toDate(),
                end: moment('2019-02-03 10:24:23').toDate()
            }
        ]
    },
    {
        Id: 3,
        first_name: 'Zena',
        last_name: 'Fayerman',
        events: [
            {
                id: 1,
                title: 'Skyndu',
                start: moment('2019-01-02 14:48:25').toDate(),
                end: moment('2019-02-05 17:56:31').toDate()
            }
        ]
    },
    {
        Id: 4,
        first_name: 'Georgianne',
        last_name: 'Crommett',
        events: [
            {
                id: 1,
                title: 'Leexo',
                start: moment('2019-01-08 15:46:05').toDate(),
                end: moment('2019-02-11 16:45:55').toDate()
            },
            {
                id: 2,
                title: 'Topicblab',
                start: moment('2019-01-08 20:56:06').toDate(),
                end: moment('2019-01-11 09:16:54').toDate()
            },
            {
                id: 3,
                title: 'Voonte',
                start: moment('2019-01-01 08:19:47').toDate(),
                end: moment('2019-01-07 23:38:47').toDate()
            },
            {
                id: 4,
                title: 'Vitz',
                start: moment('2019-01-09 21:01:49').toDate(),
                end: moment('2019-01-20 11:02:17').toDate()
            }
        ]
    },
    {
        Id: 5,
        first_name: 'Gerik',
        last_name: 'Skaid',
        events: [
            {
                id: 1,
                title: 'Twiyo',
                start: moment('2019-01-04 11:08:57').toDate(),
                end: moment('2019-01-21 23:18:05').toDate()
            },
            {
                id: 2,
                title: 'Twitterbeat',
                start: moment('2019-01-08 01:37:22').toDate(),
                end: moment('2019-01-14 11:04:23').toDate()
            },
            {
                id: 3,
                title: 'Abata',
                start: moment('2019-01-07 00:10:20').toDate(),
                end: moment('2019-01-24 01:18:54').toDate()
            },
            {
                id: 4,
                title: 'Fivespan',
                start: moment('2019-01-05 03:18:06').toDate(),
                end: moment('2019-01-07 17:26:56').toDate()
            },
            {
                id: 5,
                title: 'Photospace',
                start: moment('2019-01-05 11:23:58').toDate(),
                end: moment('2019-01-11 10:47:32').toDate()
            }
        ]
    }
];
export default data;

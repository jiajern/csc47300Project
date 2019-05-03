import React from 'react';
import { Tabs, Table, Button, Progress, Card } from 'antd';
import { getUser } from '../../services/auth';
import { I18n } from 'aws-amplify';

const Education = (props) => {

    const columns = [{
        title: I18n.get('School Name'),
        dataIndex: 'schoolName',
        key: 'schoolName',
    }, {
        title: I18n.get('Degree'),
        dataIndex: 'degree',
        key: 'degree',
    }, {
        title: I18n.get('City'),
        dataIndex: 'city',
        key: 'city',
    }, {
        title: I18n.get('Country'),
        dataIndex: 'country',
        key: 'country'
    }, {
        title: I18n.get('Start Year'),
        dataIndex: 'startYear',
        key: 'startYear',
    }, {
        title: I18n.get('End Year'),
        dataIndex: 'endYear',
        key: 'endYear'
    }];

    const educationList = [...props.education];
    console.log("length: ", educationList.length)
    const display = educationList.map(item => {
        console.log(item);
        <Card
            size="default"
            title={item.schoolName}
            style={{ border: "solid", height: 210 }}
        >
            <br />
            <p className="description">{item.degree}</p>
        </Card>
    })

    return display;
}


export default Education;
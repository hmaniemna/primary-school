import React from 'react';
import { Button} from 'semantic-ui-react'

const Teacher = () => (
    <div>
        <Button.Group widths='5'>
            <Button><a href="/teacher/infos">المعلومات الشّخصيّة</a></Button>
            <Button><a href="/teacher/studentmangement">التصرف في التلاميذ</a></Button>
            <Button><a href="/teacher/presence"> الحضور</a></Button>
            <Button><a href="/teacher/timetable">جدول أوقاتي</a></Button>
            <Button><a href="/teacher/stat">إحصائيّات</a></Button>
        </Button.Group>
    </div>
)

export default Teacher;
